import HeroSvg from "../assets/svg/TSHOMO STUDIOS LOGO.svg"
import ScrollSvg from "../assets/svg/SCROLL.svg"

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-container">
                <div className="hero-bg">
                    <img className="hero-image-bg" src={HeroSvg} alt="Hero Image" />
                </div>
                <div className="hero-scroll">
                    <img className="hero-scroll-img" src={ScrollSvg} alt="Scroll Image" />
                </div>
            </div>
        </section>
    );
}

export default Hero