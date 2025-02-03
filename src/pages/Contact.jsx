import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted:", formData);
      alert("Message Sent Successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    }
  };
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
                  <h1>Contact <span>Us</span>
                  </h1>
                  <p>Home | Contact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-md-10 centerCol">
              <div className="section_head text-center">
                <h3><span>Get in Touch</span> with us</h3>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row mt-50">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>

              <div className="col-md-6">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>

              <div className="col-md-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="col-md-12">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="error">{errors.message}</p>}
              </div>

              <div className="col-md-12">
                <div className="btn_wrap">
                  <button type="submit" className="btn1 btn3 border-0">
                    Send Your Message <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
