import React from 'react'
// import "./styles/globals.css";
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Home() {
  return (
    <div className="main-body">
      <Header />
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
                          Make a Reservation <i className="fa-solid fa-arrow-right"></i>
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

    </div>
  )
}
