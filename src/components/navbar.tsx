import React, { useState, useEffect } from "react";
import { FaBars, FaRegUser } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import LogoSvg from "../assets/svg/TSHOMO ICON.svg"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-logo">
                    <img src={LogoSvg} alt="Logo Image" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar