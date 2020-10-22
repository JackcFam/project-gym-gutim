import React from "react";
import PropTypes from "prop-types";

Contact.propTypes = {};

function Contact(props) {
  return (
    
      <div>
        <section
          className="breadcrumb-section set-bg"
          data-setbg="img/breadcrumb/classes-breadcrumb.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <h2>Contact</h2>
                  <div className="breadcrumb-option">
                    <a href="./index.html">
                      <i className="fa fa-home" /> Home
                    </a>
                    <span>Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-info">
                  <h4>Contacts Us</h4>
                  <div className="contact-address">
                    <div className="ca-widget">
                      <div className="cw-icon">
                        <img src="https://i.imgur.com/zRPDwAk.png" alt />
                      </div>
                      <div className="cw-text">
                        <h5>Our Location</h5>
                        <p>60-49 Road 11378 New York</p>
                      </div>
                    </div>
                    <div className="ca-widget">
                      <div className="cw-icon">
                        <img src="https://i.imgur.com/a1HfV4s.png" alt />
                      </div>
                      <div className="cw-text">
                        <h5>Phone:</h5>
                        <p>+65 11.188.888</p>
                      </div>
                    </div>
                    <div className="ca-widget">
                      <div className="cw-icon">
                        <img src="https://i.imgur.com/XcrrXcf.png" alt />
                      </div>
                      <div className="cw-text">
                        <h5>Mail</h5>
                        <p>hellocolorlib@ gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-form">
                  <h4>Leave A Comment</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your name" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your email" />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          placeholder="Your messages"
                          defaultValue={""}
                        />
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21070.22693089112!2d105.81039880248275!3d21.003654383775498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab43c0c4db%3A0xdb6effebd6991106!2sKeangnam%20Hanoi%20Landmark%20Tower!5e0!3m2!1svi!2s!4v1601239618618!5m2!1svi!2s"
            height={612}
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
  );
}

export default Contact;
