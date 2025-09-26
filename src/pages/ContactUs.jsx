// src/pages/ContactUs.jsx
import { Link } from "react-router-dom";
import "../assets/css/contactus.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <>
      {/* Preloader */}
      {/* <div className="preloader">
        <img src="images/preloader.gif" alt="preloader" />
      </div> */}

      <Navbar />

      {/* Hero Section */}
      <section className="herohead">
        <h1>Contact Us</h1>
      </section>

      {/* Contact Section */}
      <section className="contact_area">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.761510628919!2d76.14826357486348!3d11.205273188970757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b38a1ff7459f%3A0xcb5ef141c4a7e37b!2sHHH%20Perfumes!5e0!3m2!1sen!2sin!4v1758532045581!5m2!1sen!2sin"
            width="100%"
            height="450"
            // style="border:0;"
            // allowfullscreen=""
            // loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="row">
            {/* Left: Contact Info */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="contact_message content">
                <p>HHH perfumes description</p>
                <ul>
                  <li>
                    <i className="fa fa-fax"></i> Address : chembakuth, Edavanna
                    , Kerala - 676123
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>{" "}
                    <a href="mailto:info@hhhperfumes.in">info@hhhperfumes.in</a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> +91 9846427382
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="col-lg-6 col-md-12">
              <div className="contact_message form">
                <h3>Keep In Touch</h3>
                <form
                  action="https://formsubmit.co/info@hhhperfumes.in"
                  method="POST"
                >
                  {/* Hidden config */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <label className="contact-label" htmlFor="name">
                    Your Name (required)
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Name *"
                    type="text"
                    className="form-control"
                    required
                  />

                  <label className="contact-label" htmlFor="email">
                    Your Email (required)
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="Email *"
                    type="email"
                    className="form-control"
                    required
                  />

                  <label className="contact-label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="Subject *"
                    type="text"
                    className="form-control"
                    required
                  />

                  <label className="contact-label" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message *"
                    className="form-control"
                    rows="5"
                    required
                  ></textarea>

                  <button type="submit" className="contact-btn mt-3">
                    Send
                  </button>
                  <p className="form-message"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
