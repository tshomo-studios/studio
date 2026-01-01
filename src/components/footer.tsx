import LogoSvg from "../assets/svg/ICON VARIATION.svg"
import { getCurrentYear } from '../utils'

const Footer = () => {
    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        if (email) {
            console.log('Newsletter subscription:', email);
            e.currentTarget.reset();
            alert('Thank you for subscribing!');
        }
    };

    return (
        <section id="footer">
            <div className='container'>
                <section className='subscription'>
                    <p className='heading'>
                        Join the newsletter to receive our next deals
                    </p>
                    <p className='text'>
                        You can unsubscribe at any time.
                    </p>
                    <div className='input-areas'>
                        <form onSubmit={handleSubscribe}>
                            <input
                                className='input'
                                name='email'
                                type='email'
                                placeholder='Your Email'
                                required
                            />
                            <button type='submit' className='btn btn--outline'>Subscribe</button>
                        </form>
                    </div>
                </section>
                <div className='links'>
                    <div className='link-wrapper'>
                        <div className='link-items'>
                            <h2>About Us</h2>
                            <a href='#about'>How it works</a>
                            <a href='#about'>Testimonials</a>
                            <a href='#about'>Careers</a>
                            <a href='#about'>Investors</a>
                            <a href='#about'>Terms of Service</a>
                        </div>
                        <div className='link-items'>
                            <h2>Contact Us</h2>
                            <a href='#contact'>Contact</a>
                            <a href='#contact'>Support</a>
                            <a href='#about'>Destinations</a>
                            <a href='#about'>Sponsorships</a>
                        </div>
                    </div>
                    <div className='link-wrapper'>
                        <div className='link-items'>
                            <h2>Videos</h2>
                            <a href='#about'>Submit Video</a>
                            <a href='#about'>Ambassadors</a>
                            <a href='#about'>Agency</a>
                            <a href='#about'>Influencer</a>
                        </div>
                        <div className='link-items'>
                            <h2>Social Media</h2>
                            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a>
                            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a>
                            <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>Youtube</a>
                            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <a href='/' className='social-logo'>
                                <img src={LogoSvg} alt="Logo" />
                                <i className='fab fa-typo3' />
                            </a>
                        </div>
                        <small className='website-rights'> tshomostudios © {getCurrentYear()}</small>
                        <div className='social-icons'>
                            <a
                                className='social-icon-link facebook'
                                href='https://facebook.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Facebook'
                            >
                                <i className='fab fa-facebook-f' />
                            </a>
                            <a
                                className='social-icon-link instagram'
                                href='https://instagram.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Instagram'
                            >
                                <i className='fab fa-instagram' />
                            </a>
                            <a
                                className='social-icon-link youtube'
                                href='https://youtube.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Youtube'
                            >
                                <i className='fab fa-youtube' />
                            </a>
                            <a
                                className='social-icon-link twitter'
                                href='https://twitter.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Twitter'
                            >
                                <i className='fab fa-twitter' />
                            </a>
                            <a
                                className='social-icon-link linkedin'
                                href='https://linkedin.com'
                                target='_blank'
                                rel='noopener noreferrer'
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