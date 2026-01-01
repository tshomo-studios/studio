import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, animateScroll as scroll } from "react-scroll";
import LogoSvg from "../assets/svg/TSHOMO ICON.svg";

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className={scrolled ? "scrolled" : ""}>
            <div className="container">
                <div className="logo" onClick={toggleHome}>
                    <img src={LogoSvg} alt="TSHOMO Logo" />
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            // exact={true}
                            offset={-80}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            // exact={true}
                            offset={-80}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            // exact={true}
                            offset={-80}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FiX size={20} style={{ color: "#333" }} />
                    ) : (
                        <FiMenu size={20} style={{ color: "#333" }} />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
