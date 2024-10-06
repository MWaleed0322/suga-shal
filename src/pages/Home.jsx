import React from 'react'
// import "./styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Home() {
  return (
    <>
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
                <a href="about.html">
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

      <section className="career-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="mission-img">
                <img src="images/mission.jfif" alt="Mission" />
              </div>
              <div className="vision-img visionimg">
                <span>
                  <h5>1211 N Country Club Dr #9</h5> Experience difference with our premium fast
                </span>
                <img src="images/vision.jfif" alt="Vision" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="career-txt">
                <h1><b>bar, live</b> <span>Music</span> <b>events,</b> and delicious food.</h1>
                <p className="mb-5">
                  Experience the difference with our premium fast food offerings. From flame-grilled burgers to fresh-cut fries,
                  every item on our menu is crafted to perfection, ensuring a satisfying meal every time.
                </p>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="mission-detail-box">
                      <i className="fa-light fa-burger-lettuce"></i>
                      <h5>Food</h5>
                      <p>Classic fast food item consisting of a grilled or fried patty served inside a sliced bun.
                        Toppings often include lettuce.</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mission-detail-box">
                      <i className="fa-solid fa-martini-glass"></i>
                      <h5>Drinks</h5>
                      <p>Classic fast food item consisting of a grilled or fried patty served inside a sliced bun.
                        Toppings often include lettuce.</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mission-detail-box">
                      <i className="fa-solid fa-compact-disc"></i>
                      <h5>Lively Music</h5>
                      <p>Classic fast food item consisting of a grilled or fried patty served inside a sliced bun.
                        Toppings often include lettuce.</p>
                    </div>
                  </div>
                </div>
                <a href="menu.html">Check Menu <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="Client-heading">
                <h2>Check What Our <span>Clients</span> Are Saying</h2>
                <p>
                  Discover a culinary adventure at [Restaurant Name], where our expertly crafted menu offers a
                  variety of mouthwatering options to satisfy every craving. From our signature gourmet burgers,
                  made with the freshest ingredients and cooked to perfection, to our crispy, golden sides, every
                  bite promises a burst of flavor.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-5">
              <div className="client-slider">
                <div className="client-img">
                  <img src="images/client.jfif" alt="Client" />
                </div>
                <div className="client-img">
                  <img src="images/client.jfif" alt="Client" />
                </div>
                <div className="client-img">
                  <img src="images/client.jfif" alt="Client" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
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
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}
