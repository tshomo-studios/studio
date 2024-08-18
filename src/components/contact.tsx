const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="reach-out">
                    <div className="box">
                        <img src={require("../assets/img/Instagram Stories Card.png")} alt="Carousel Image" />
                    </div>

                    <div className="box">
                        <h1>Our reach</h1>
                        <p>
                            As humans, we are deeply influenced by
                            the factors that shape our identities. Our
                            goal is to connect with individuals on a
                            personal level and celebrate their
                            uniqueness and cultural backgrounds. To
                            foster a sense of community, we utilize
                            our social media platforms to share
                            aspects of the game, enticing consumers
                            to stay engaged with our progress.
                        </p>

                        <p>
                            We offer engaging short films depicting
                            relatable characters living everyday lives,
                            shedding light on current societal issues.
                            This approach allows us to interact with
                            our audience, build rapport, and establish
                            long-lasting connections with them.
                        </p>
                    </div>
                </div>

                <div className="help">

                </div>
            </div>

        </section>
    );
}

export default Contact