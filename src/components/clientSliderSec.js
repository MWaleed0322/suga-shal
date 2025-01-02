import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiHamburgerBold } from 'react-icons/pi'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCompactDisc, FaMartiniGlass } from 'react-icons/fa6'

function ClientSliderSec() {
    const clientslider = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    return (
        <section className="client-sec">
            <Container>
                <Row>
                    <Col md="12" sm="12">
                        <div className="Client-heading">
                            <h2>Check What Our <span>Clients</span> Are Saying</h2>
                            <p>
                                Discover a culinary adventure at [Restaurant Name], where our expertly crafted menu offers a
                                variety of mouthwatering options to satisfy every craving. From our signature gourmet burgers,
                                made with the freshest ingredients and cooked to perfection, to our crispy, golden sides, every
                                bite promises a burst of flavor.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col md="5">
                        <Slider className='client-slider' {...clientslider}>
                            <div>
                                <div className="client-img">
                                    <img src="images/client.jfif" alt="Client" />
                                </div>
                            </div>
                            <div className="client-img">
                                <img src="images/client.jfif" alt="Client" />
                            </div>
                            <div className="client-img">
                                <img src="images/client.jfif" alt="Client" />
                            </div>
                        </Slider>
                    </Col>
                    <Col md="7">
                        <div className="client-review">
                            <i className="fa-solid fa-quote-left"></i>
                            <div className="star-box">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. In sit sit dolor quam libero posuere adipiscing.
                                Enim risus consequat nisl nunc ut ullamcorper pellentesque egestas nunc. Euismod malesuada
                                sit diam aliquam sit eget.
                            </p>
                            <h5>Jessica Thompson</h5>
                            <h6>Marketing Manager at Bright Ideas Inc.</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ClientSliderSec
