import HeroSvg from "../assets/svg/TSHOMO STUDIOS LOGO.svg";
import ScrollSvg from "../assets/svg/SCROLL.svg";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="background">
                    <img src={HeroSvg} alt="Hero logo" />
                </div>
                <div className="scroll">
                    <img src={ScrollSvg} alt="Scroll down indicator" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
