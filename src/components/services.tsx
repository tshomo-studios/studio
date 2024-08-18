const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="carousel-bg">
                    <img src={require("../assets/img/Tribal Portrait_, Stefano Strabla.jpg")} alt="Carousel Image" />
                    <div className="carousel-content">
                        <h1>"Games with characters, stories, and settings reflecting African experiences empower players, fostering cultural pride and identity."</h1>
                    </div>
                </div>

                <div className="strategy-bg">
                    <img src={require("../assets/img/PS4-Case copy.png")} alt="Carousel Image" />
                    <div className="strategy-content">
                        <h1>How to make Profit</h1>
                        
                        <ul>
                            <li>
                                <h3>Game Sales:</h3>
                                Our primary source of revenue. Players
                                purchase the game to access the core
                                experience.
                            </li>

                            <li>
                                <h3>In-App Purchases (IAPs):</h3>
                                Many RPGs offer in-app purchases. Players
                                can buy virtual goods to enhance their
                                gaming experience.
                            </li>

                            <li>
                                <h3>DLCs (Downloadable Content):</h3>
                                Offering additional content through DLCs
                                allows game developers to extend the
                                lifespan of our game.
                            </li>

                            <li>
                                <h3>Subscription Models:</h3>
                                RPGs adopt a subscription-based model
                                where players pay a regular fee (monthly or
                                annually) to access premium content,
                                features, or benefits.
                            </li>

                            <li>
                                <h3>Cosmetic Microtransactions:</h3>
                                Selling cosmetic items, such as skins, outfits,
                                or customization options that do not affect
                                gameplay, is a popular monetization
                                strategy.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Services