import React from 'react'
import { Link } from 'react-router-dom'
import CareerSection from '../components/CareerSection'

export default function menu() {
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
                                        <span>Our</span> Menu
                                    </h1>
                                    <p>Home | Menu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CareerSection />
        </>
    )
}
