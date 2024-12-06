import React from 'react'
// import "./styles/globals.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function About() {
    return (
        <>
            <section className="main_slder">
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <img
                        src="images/banner.png"
                        className="img-fluid main-banner-img new-banner-css"
                        alt="..."
                    />

                    <div className="container postion-a">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-8 col-sm-12 col-12">
                                <div
                                    className="banner_text wow new-banner-heading-css fadeInLeft"
                                    data-wow-duration="2s"
                                >
                                    <h1>
                                        About<span>Us</span>
                                    </h1>
                                    <p>Home | About</p>
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
                                    At Suga Shal, we blend great food, amazing drinks, and live music to create unforgettable
                                    nights. Located in the heart of the city, our venue is the perfect spot to unwind and
                                    enjoy life.
                                </p>
                                <p>
                                    To provide a lively atmosphere where people can enjoy quality food, drinks, and music.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="experience-heading">
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Magna mauris facilisi elementum ut. Justo
                                pellentesque nibh magnis felis orci tincidunt. Etiam at ut faucibus id auctor ultricies
                                augue nulla dignissim. Massa ultrices lorem nulla suspendisse at ipsum. Iaculis at purus
                                sodales eget arcu. Vitae eget sed felis facilisis vel ac faucibus phasellus ut. Vitae nulla
                                vulputate sed neque nibh porttitor. Tellus congue consectetur ut sed dui lacus. Eu in fusce
                                netus at amet sem ullamcorper. Quis gravida mattis eget risus turpis nulla.
                            </p>
                            <p>
                                Aliquam suspendisse sed feugiat massa vestibulum fames. Enim porttitor faucibus purus cras
                                ac ultrices at. Proin non leo faucibus nibh nunc donec. Est gravida amet venenatis pretium
                                ut eget ac. Quis eget mattis augue elementum a in tristique sit sed. Mauris sed id bibendum
                                at ipsum amet enim duis. Netus viverra at auctor turpis tellus et lacus. Dolor augue at a
                                sit enim donec congue ac. Fermentum potenti natoque elementum enim non et posuere nam.
                            </p>
                            <p>
                                Nec at ullamcorper morbi ut faucibus neque risus. Lobortis lorem ipsum at egestas ut est
                                metus. Leo risus pulvinar turpis vitae vivamus. Id id sem a scelerisque. Faucibus sapien a
                                porta tempus pretium quis venenatis ac. Platea maecenas platea turpis elit quis tristique
                                ullamcorper accumsan. Suspendisse ultricies praesent risus dignissim. Commodo venenatis
                                posuere netus tempus commodo.
                            </p>
                            <p>
                                Aliquet non tincidunt dui nullam convallis vestibulum. Ullamcorper arcu tortor sociis nibh
                                ipsum donec posuere amet. Lectus at nisi tristique eu cum. Integer habitasse odio non dui.
                                Lectus justo posuere et.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-sec">
                <div className="container">
                    {/* Mission Section */}
                    <div className="row">
                        <div className="col-md-7">
                            <div className="mission-heading">
                                <h4>Our Mission</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Lectus egestas sagittis velit venenatis morbi.
                                    Vitae lacinia eget egestas neque magna. Pretium et placerat enim sit quam imperdiet
                                    augue. Mattis fringilla facilisi tincidunt tempus eget etiam in morbi vitae. Etiam eget
                                    euismod cum rutrum mauris pretium metus phasellus a. Suspendisse in urna fermentum amet
                                    morbi. Nunc id eget vulputate et euismod. Magna pulvinar in id urna amet. Scelerisque
                                    diam lectus diam urna curabitur mauris faucibus. Nascetur sed vitae nullam nullam id.
                                    <br />
                                    Nisl purus cursus fringilla convallis leo fermentum.
                                </p>
                                <p>
                                    Mattis in urna ac nibh nisl etiam at sit. Maecenas non nisl dolor nulla ac eu. Elementum
                                    nec feugiat tempus convallis. Consectetur congue sagittis mi est nunc. Id nisl duis odio
                                    morbi sed non nec tristique facilisi. Eu risus magna ornare mattis diam mi a sed.
                                    Pulvinar eget fames sit quis. In turpis volutpat ligula id sodales.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="mission-img">
                                <img src="images/mission.jfif" alt="Mission" />
                            </div>
                        </div>
                    </div>
                    {/* Vision Section */}
                    <div className="row">
                        <div className="col-md-7">
                            <div className="mission-heading">
                                <h4>Our Vision</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Nunc mauris ultrices in vestibulum vitae
                                    hendrerit et. Ultrices iaculis tempus volutpat viverra eget purus faucibus mattis. Tellus
                                    sit cras massa tempus feugiat lobortis. Sapien eu blandit tempor duis.
                                </p>
                                <a href="career.html">
                                    Join Our Team <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="vision-img">
                                <span>Experience difference with our premium fast </span>
                                <img src="images/vision.jfif" alt="Vision" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
