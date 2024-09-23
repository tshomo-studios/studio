import React, { useState, useEffect, useCallback } from "react";
import { FaBars, FaRegUser } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import LogoSvg from "../assets/svg/TSHOMO ICON.svg";

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

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
            </div>
        </nav>
    );
};

export default Navbar;
