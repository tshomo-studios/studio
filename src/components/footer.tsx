import LogoSvg from "../assets/svg/ICON VARIATION.svg"

const Footer = () => {

    function getCurrentYear(): number {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }
    
    return (
        <section className="footer" id="footer">
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join the newsletter to receive our next deals
                    </p>
                    <p className='footer-subscription-text'>
                        You can unsubscribe at any time.
                    </p>
                    <div className='input-areas'>
                        <form>
                            <input
                                className='footer-input'
                                name='email'
                                type='email'
                                placeholder='Your Email'
                            />
                            <button className='btn btn--outline'>Subscribe</button>
                        </form>
                    </div>
                </section>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <a href='/sign-up'>How it works</a>
                            <a href='/'>Testimonials</a>
                            <a href='/'>Careers</a>
                            <a href='/'>Investors</a>
                            <a href='/'>Terms of Service</a>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <a href='/'>Contact</a>
                            <a href='/'>Support</a>
                            <a href='/'>Destinations</a>
                            <a href='/'>Sponsorships</a>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Videos</h2>
                            <a href='/'>Submit Video</a>
                            <a href='/'>Ambassadors</a>
                            <a href='/'>Agency</a>
                            <a href='/'>Influencer</a>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <a href='/'>Instagram</a>
                            <a href='/'>Facebook</a>
                            <a href='/'>Youtube</a>
                            <a href='/'>Twitter</a>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <a href='/' className='social-logo'>
                                <img src={LogoSvg} alt="Logo Image" />
                                <i className='fab fa-typo3' />
                            </a>
                        </div>
                        <small className='website-rights'> tshomostudios © {getCurrentYear()}</small>
                        <div className='social-icons'>
                            <a
                                className='social-icon-link facebook'
                                href='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i className='fab fa-facebook-f' />
                            </a>
                            <a
                                className='social-icon-link instagram'
                                href='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i className='fab fa-instagram' />
                            </a>
                            <a
                                className='social-icon-link youtube'
                                href='/'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <i className='fab fa-youtube' />
                            </a>
                            <a
                                className='social-icon-link twitter'
                                href='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <i className='fab fa-twitter' />
                            </a>
                            <a
                                className='social-icon-link twitter'
                                href='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i className='fab fa-linkedin' />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Footer