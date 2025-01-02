import React from 'react'

export default function Career() {
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
                  <h1>Career</h1>
                  <p>Home | Career</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-sec">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-5">
              <div className="mission-img">
                <img src="images/mission.jfif" alt="Mission" />
              </div>
              <div className="vision-img visionimg">
                <span>
                  <h5>1211 N Country Club Dr #9</h5>
                  <br /> Experience the difference with our premium fast
                </span>
                <img src="images/vision.jfif" alt="Vision" />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-7">
              <div className="career-txt">
                <h2>Work for Us</h2>
                <p className="mb-5">
                  Support and represent the exciting restaurant industry by working in our Washington, D.C., headquarters, or our offices in Chicago, Lansing, and Orlando.
                  <br />
                  We attract world-class team members who collaborate to serve our industry. Our teams are engaged and committed to enhancing the quality of life for all we serve.
                  <br />
                  The National Restaurant Association offers competitive compensation with outstanding benefits.
                </p>
                <h3>We offer a diverse workplace</h3>
                <p>
                  We are an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, sexual orientation, gender identity, or national origin, age, disability status, genetic information and testing, family and medical leave, protected veteran status, or any other characteristic protected by law.
                </p>
                <p>
                  We strongly encourage women, people of color, people with disabilities, and veterans to apply for our job openings. This commitment supports our policy of developing and capitalizing on the abilities of all our team members, as well as selecting, developing, and promoting those who are best qualified.
                </p>
                <a href="#apply">Apply Here <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
