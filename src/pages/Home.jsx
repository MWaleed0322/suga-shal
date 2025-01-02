import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../styles/globals.css";
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight, FaCompactDisc, FaMartiniGlass } from 'react-icons/fa6';
import { PiHamburgerBold } from 'react-icons/pi';
import CareerSection from '../components/CareerSection';
import ClientSliderSec from '../components/clientSliderSec';


export default function Home() {
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
    <>
      <section className="main_slider">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/banner.png" className="img-fluid main-banner-img" alt="Banner" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-8 col-sm-12 col-12">
                      <div className="banner_text wow fadeInLeft" data-wow-duration="2s">
                        <h2>Where Great Food Meets <span>LiveMusic</span></h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Aliquet euismod convallis massa in
                          tincidunt mattis aliquam. Integer felis mi elit gravida. Nibh nibh lacus
                          sodales ut tincidunt nisi. Arcu nullam ligula massa diam placerat. Viverra
                          viverra.
                        </p>
                        <a href="about.html" className="theme1">
                          Make a Reservation <FaArrowRight />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                      <div className="banner-extra-main">
                        <div className="banner-extra">
                          <div className="customers-box">
                            <p>Happy Customers</p>
                            <h3>2,87K</h3>
                          </div>
                          <div className="customers-box">
                            <p>Loyalty Program Members</p>
                            <h3>1.77K</h3>
                          </div>
                          <div className="customer">
                            <p>Committed to sustainability, eco-friendly<br /> packaging and waste reduction programs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="experience-heading">
                <h2>
                  <span>Experience</span> a night of fun, flavor, <span>and rhythm.</span>
                </h2>
              </div>
            </div>
            <div className="col-md-5">
              <div className="experience-heading">
                <p>
                  At Suga Shal, we blend great food, amazing drinks, and live music to create
                  unforgettable nights. Located in the heart of the city, our venue is the perfect spot
                  to unwind and enjoy life.
                </p>
                <p>
                  To provide a lively atmosphere where people can enjoy quality food, drinks, and music.
                </p>
                <a href="about">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <img src="images/team.png" alt="Team" />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="team-heading">
                <h4>To provide a lively atmosphere where people can enjoy quality food, drinks, and music.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nunc mauris ultrices in vestibulum vitae hendrerit et.
                  Ultrices iaculis tempus volutpat viverra eget purus faucibus mattis. Tellus sit cras massa tempus feugiat lobortis.
                  Sapien eu blandit tempor duis.
                </p>
                <a href="career.html">Join Our Team <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CareerSection />

      <ClientSliderSec />

    </>
  )
}
