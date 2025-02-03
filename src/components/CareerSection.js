import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import { PiHamburgerBold } from 'react-icons/pi'
import { FaArrowRight, FaCompactDisc, FaMartiniGlass } from 'react-icons/fa6'

function CareerSection() {

    const missionDetails = [
        {
            icon: <PiHamburgerBold />,
            title: "Food",
            description:
                "Classic fast food item consisting of a grilled or fried patty served inside a sliced bun. Toppings often include lettuce.",
        },
        {
            icon: <FaMartiniGlass />,
            title: "Drinks",
            description:
                "Refreshing beverages served with meals, including soft drinks, coffee, and juices.",
        },
        {
            icon: <FaCompactDisc />,
            title: "Lively Music",
            description:
                "Enjoy energetic music that enhances your dining experience and sets the perfect ambiance.",
        },
    ];

    return (
        <section className="career-sec">
            <Container>
                <Row>
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
                            <h1>
                                <b>bar, live</b> <span>Music</span> <b>events,</b> and delicious food.
                            </h1>
                            <p className="mb-5">
                                Experience the difference with our premium fast food offerings. From flame-grilled burgers to
                                fresh-cut fries, every item on our menu is crafted to perfection, ensuring a satisfying meal
                                every time. Experience the difference with premium fast food offerings. From flame grilled
                                burgers to fresh.
                            </p>
                            <Row>
                                {missionDetails.map((item, index) => (
                                    <div className="col-lg-4" key={index}>
                                        <div className="mission-detail-box">
                                            <div className="mission-detail-box-i">{item.icon}</div>
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                            <Link to="menu">
                                Check Menu <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default CareerSection
