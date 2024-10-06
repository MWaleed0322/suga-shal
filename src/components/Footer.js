import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <section className="newsletter_secc">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Join our newsletter to<br /> keep up to date with us!</h2>
                        </div>
                        <div className="col-md-4">
                            <form>
                                <input type="email" name="email" placeholder="Enter your email address" />
                                <button type="submit">Subscribe</button>
                                <FaUser className="" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer_info">
                                <h5>Suga Shal</h5>
                                <p>Lorem ipsum dolor sit amet consectetur. Donec lectus dolor urna nunc cursus dolor suspendisse
                                    blandit dictum. Convallis.</p>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-2">
                            <div className="footer_links">
                                <h5>About Us</h5>
                                <ul>
                                    <li><a href="#">Reservations</a></li>
                                    <li><a href="career.html">Career</a></li>
                                    <li><a href="#">Events</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_links">
                                <h5>Menu</h5>
                                <ul>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_links">
                                <h5>Contact</h5>
                                <ul>
                                    <li><a href="tel:4808496371">480-849-6371</a></li>
                                    <li><a href="mailto:Apleasantaffair@gmail.com">Apleasantaffair@gmail.com</a></li>
                                    <li><a href="#">1211 N Country Club Dr #9</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_wrp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>© All Rights 2024 By Suga Shal</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-text">
                                    <a href="#"><p>Terms of Service</p></a>
                                    <a href="#"><p>Privacy Policy</p></a>
                                    <a href="#"><p>Cookies</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
