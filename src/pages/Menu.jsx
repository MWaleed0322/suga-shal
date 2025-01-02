import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { PiHamburgerBold } from "react-icons/pi";
import CareerSection from "../components/CareerSection";
import { FaArrowRight, FaCompactDisc, FaMartiniGlass } from "react-icons/fa6";
import ClientSliderSec from "../components/clientSliderSec";
import { LuListFilter } from "react-icons/lu";

const servicesData = {

    ALL: [
        { id: 1, title: "Classic Cheeseburger", price: "$5.99", img: "images/product1.jfif", desc: "A timeless favorite featuring juicy beef patty melted cheddar cheese, fresh lettuce, ripe tomato." },
        { id: 2, title: "Bacon BBQ Burger", price: "$7.49", img: "images/product2.jfif", desc: "A smoky favorite with bacon and BBQ sauce, topped with cheddar cheese." },
        { id: 3, title: "Spicy Jalapeño Burger", price: "$6.99", img: "images/product3.jfif", desc: "For those who like it hot, with fresh jalapeños and spicy sauce." },
        { id: 4, title: "Mushroom Swiss Burger", price: "$7.29", img: "images/product4.jfif", desc: "Savory mushrooms and melted Swiss cheese on a grilled patty." },
        { id: 5, title: "Veggie Delight Burger", price: "$6.49", img: "images/product5.jfif", desc: "A healthy option with a delicious veggie patty and fresh toppings." },
        { id: 6, title: "Avocado Ranch Burger", price: "$7.29", img: "images/product6.jfif", desc: "Creamy avocado and zesty ranch sauce for a refreshing twist." },
    ],
    Buger: [
        { id: 1, title: "Classic Cheeseburger", price: "$5.99", img: "images/product1.jfif", desc: "A timeless favorite featuring juicy beef patty melted cheddar cheese, fresh lettuce, ripe tomato." },
        { id: 2, title: "Bacon BBQ Burger", price: "$7.49", img: "images/product2.jfif", desc: "A smoky favorite with bacon and BBQ sauce, topped with cheddar cheese." },
        { id: 3, title: "Spicy Jalapeño Burger", price: "$6.99", img: "images/product3.jfif", desc: "For those who like it hot, with fresh jalapeños and spicy sauce." },
    ],
    Sandwich: [
        { id: 4, title: "Mushroom Swiss Burger", price: "$7.29", img: "images/product4.jfif", desc: "Savory mushrooms and melted Swiss cheese on a grilled patty." },
        { id: 5, title: "Veggie Delight Burger", price: "$6.49", img: "images/product5.jfif", desc: "A healthy option with a delicious veggie patty and fresh toppings." },
    ],

};

export default function Menu() {
    const [activeTab, setActiveTab] = useState("ALL");

    return (
        <>
            <section className="main_slder">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <img src="images/banner.png" className="img-fluid main-banner-img new-banner-css" alt="..." />

                    <div className="container postion-a">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-8 col-sm-12 col-12">
                                <div className="banner_text wow new-banner-heading-css fadeInLeft" data-wow-duration="2s">
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

            <section className="our-services-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="our-services-heading text-center">
                                <h2>Sizzling Gourmet Burgers and Savory Sides A Feast of Flavor at Suga Shal</h2>
                                <p>
                                    Discover a culinary adventure at [Restaurant Name], where our expertly crafted menu
                                    offers a variety of mouthwatering options to satisfy every craving.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="inline-all-div">
                        <button><LuListFilter /> Filter</button>
                        <div className="our-services-tab-btn">
                            <ul className="nav nav-tabs">
                                {Object.keys(servicesData).map((tab) => (
                                    <li key={tab} className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === tab ? "active" : ""}`}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {tab}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p><b>Sorting By</b> Last Upload</p>
                    </div>

                    <div className="our-services-tab-content">
                        <div className="row">
                            {servicesData[activeTab].map((service) => (
                                <div className="col-lg-4 col-md-6 col-12" key={service.id}>
                                    <div className="our-services-box">
                                        <img src={service.img} alt="Service" />
                                        <h2>{service.title}</h2>
                                        <p>{service.desc}</p>
                                        <Link to="/services" className="theme-btn-1">
                                            Order Now <FaArrowRight /> <span>{service.price}</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ClientSliderSec />
        </>
    );
}