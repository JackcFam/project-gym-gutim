import React from "react";
import "../../css/App.css";
Pricing.propTypes = {};

function Pricing(props) {
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
                <h2>Dịch vụ</h2>
                <div className="breadcrumb-option">
                  <a href="./index.html">
                    <i className="fa fa-home" /> Trang chủ
                  </a>
                  <span>Dịch vụ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  <section className="membership-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>MEMBERSHIP PLANS</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="membership-item">
            <div className="mi-title">
              <h4>Basic</h4>
              <div className="triangle" />
            </div>
            <h2 className="mi-price">$17<span>/01 mo</span></h2>
            <ul>
              <li>
                <p>Duration</p>
                <span>12 months</span>
              </li>
              <li>
                <p>Personal trainer</p>
                <span>00 person</span>
              </li>
              <li>
                <p>Amount of people</p>
                <span>01 person</span>
              </li>
              <li>
                <p>Number of visits</p>
                <span>Unlimited</span>
              </li>
            </ul>
            <a href="#" className="primary-btn membership-btn">Buy Now</a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="membership-item">
            <div className="mi-title">
              <h4>Standard</h4>
              <div className="triangle" />
            </div>
            <h2 className="mi-price">$57<span>/01 mo</span></h2>
            <ul>
              <li>
                <p>Duration</p>
                <span>12 months</span>
              </li>
              <li>
                <p>Personal trainer</p>
                <span>01 person</span>
              </li>
              <li>
                <p>Amount of people</p>
                <span>01 person</span>
              </li>
              <li>
                <p>Number of visits</p>
                <span>Unlimited</span>
              </li>
            </ul>
            <a href="#" className="primary-btn membership-btn">Buy Now</a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="membership-item">
            <div className="mi-title">
              <h4>Premium</h4>
              <div className="triangle" />
            </div>
            <h2 className="mi-price">$98<span>/01 mo</span></h2>
            <ul>
              <li>
                <p>Duration</p>
                <span>12 months</span>
              </li>
              <li>
                <p>Personal trainer</p>
                <span>01 person</span>
              </li>
              <li>
                <p>Amount of people</p>
                <span>01 person</span>
              </li>
              <li>
                <p>Number of visits</p>
                <span>Unlimited</span>
              </li>
            </ul>
            <a href="#" className="primary-btn membership-btn">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Membership Section End */}
  {/* Register Section Begin */}
  <section className="register-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="register-text">
            <div className="section-title">
              <h2>Register Now</h2>
              <p>The First 7 Day Trial Is Completely Free With The Teacher</p>
            </div>
            <form action="#" className="register-form">
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor="name">First Name</label>
                  <input type="text" id="name" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="email">Your email address</label>
                  <input type="text" id="email" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="mobile">Mobile No*</label>
                  <input type="text" id="mobile" />
                </div>
              </div>
              <button type="submit" className="register-btn">Get Started</button>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="register-pic">
            <img src="https://i.imgur.com/YEPxyXb.jpg" alt="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}

export default Pricing;
