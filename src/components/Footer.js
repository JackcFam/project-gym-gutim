import React, { useState}from 'react';
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

function Footer(props) {
  const [heart, setHeart] = useState(false);
  const [valueip, setValueip] = useState();



  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    setHeart(true);
    getHeart();
  }

  const getHeart = () => {
  setTimeout(() => {
    setHeart(false);
  }, 650);
};
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-option">
                <span>Phone</span>
                <p>(123) 118 9999 - (123) 118 9999</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-option">
                <span>Address</span>
                <p>72 Kangnam, 45 Opal Point Suite 391</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-option">
                <span>Email</span>
                <p>contactcompany@Gutim.com</p>
              </div>
            </div>
          </div>
          <div
            className="subscribe-option set-bg"
            data-setbg="img/footer-signup.jpg"
          >
            <div className="so-text">
              <h4>Subscribe To Our Mailing List</h4>
              <p>Sign up to receive the latest information </p>
            </div>
            <form className="subscribe-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                value={valueip}
                type="text"
                placeholder="Enter Your Mail"
                name="email"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />
              <button type="submit">
                <i className="fa fa-send" />
              </button>
              {errors.email?.type === "required" && (
                <p className="errors">Email không được bỏ trống</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="errors">Email không đúng định dạng</p>
              )}
            </form>
          </div>
          <div className="copyright-text">
            <ul>
              <li>
                <a href="#">Term&amp;Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p>©</p>
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="fa fa-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Pham Ngoc Nhat
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
            <p />
            <div className="footer-social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-dribbble" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <Modal
        className="modal d-flex justify-content-center modal-selecter"
        show={heart}
        animation={true}
      >
        <div className="modal-content-alert">
          <div className="d-flex justify-content-center my-3">
            <img
              src="https://img.icons8.com/color/48/000000/reading-confirmation.png"
              className="img-tick"
              alt=""
            />
          </div>
          <p className="text-center">Đăng ký thành công</p>
        </div>
      </Modal>
    </>
  );
}

export default Footer;
