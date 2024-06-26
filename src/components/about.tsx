const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-bx wow zoomIn">
                    <h2>Who are we?</h2>
                    <p>
                        Tshomo Studios is a video game and animation
                        production company in Johannesburg, South Africa.
                        We specialise in capturing untold cultures in interactive
                        game and animation compositions. Our young-hearted
                        staff is eclectic and fun, and we have the urge to
                        unravel stories of heritage and imagination.
                    </p>
                </div>
            </div>
            <div className="desktop">
                <div className="mission">
                    <div className="box">
                        <aside className="content">
                            <h4>Mission Statment</h4>
                            <h1>We cultivate an interest in finding stories of untold cultures and find fascinating and interactive ways to tell them.</h1>
                            <h4>Vision Statment</h4>
                            <p>To be part of a child’s upbringing. <br />We&#x27;re on a mission to revolutionise the stories that shape the next generation.</p>
                        </aside>
                    </div>
                    <div className="box">
                        <img className="" src={require("../assets/img/IMG_0638 2.PNG")} alt="Mission Image" />
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="mission">
                    <div className="box">
                        <img className="" src={require("../assets/img/IMG_0638 2.PNG")} alt="Mission Image" />
                        <div className="overlay-text">
                            <h4>Mission Statement</h4>
                            <h1>We cultivate an interest in finding stories of untold cultures and find fascinating and interactive ways to tell them.</h1>
                        </div>
                    </div>
                    <div className="box">
                        <aside className="content">
                            <h4>Vision Statment</h4>
                            <p>To be part of a child’s upbringing. <br />We&#x27;re on a mission to revolutionise the stories that shape the next generation.</p>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
