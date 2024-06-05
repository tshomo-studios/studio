import HeroSvg from "../assets/svg/TSHOMO STUDIOS LOGO.svg"
import ScrollSvg from "../assets/svg/SCROLL.svg"

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-container">
                <div className="hero-bg">
                    <img className="hero-image-bg" src={HeroSvg} alt="Hero Image" />
                </div>
                <div className="hero-content">
                    {/* <h1>TSHOMO</h1>
                    <h1>STUDIOS</h1> */}
                </div>
                <div className="hero-scroll">
                    <img className="hero-scroll-img" src={ScrollSvg} alt="Scroll Image" />
                </div>
            </div>
        </section>
    );
}

export default Hero