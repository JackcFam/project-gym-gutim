import React from 'react';

function Banner(props) {
    
    return (
        <section className="hero-section set-bg" data-setbg="https://i.imgur.com/Bd4djQ7.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-text">
                  <span>FITNESS ELEMENTS</span>
                  <h1>BMI CALCULATOR</h1>
                  <p>
                    Gutim comes packed with the user-friendly BMI Calculator
                    <br /> shortcode which lets
                  </p>
                  <a href="/about" className="primary-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Banner;
