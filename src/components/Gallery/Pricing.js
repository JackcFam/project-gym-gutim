import React,{useState} from "react";
import "../../css/App.css";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import BuyModal from './BuyModal';
import BackToTop from "../BackToTop";


function Pricing(props) {
  const [heart, setHeart] = useState(false);
  const [modalShow, setModalShow] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (values, e) => {
    e.target.reset();
    console.log(values);
    setHeart(true);
    getHeart();
  };
  const getHeart = () => {
    setTimeout(() => {
      setHeart(false);
    }, 3000);
  };
  function handelBuy() {
    setModalShow("block");
  }
  function closeBuy(){
    setModalShow("");
  }
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
                <h2>Dịch vụ thẻ tập</h2>
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
                <h2 className="mi-price">
                  $17<span>/01 mo</span>
                </h2>
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
                <lable
                  className="primary-btn membership-btn"
                  onClick={() => handelBuy()}
                >
                  Buy Now
                </lable>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="membership-item">
                <div className="mi-title">
                  <h4>Standard</h4>
                  <div className="triangle" />
                </div>
                <h2 className="mi-price">
                  $57<span>/01 mo</span>
                </h2>
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
                <lable
                  className="primary-btn membership-btn"
                  onClick={() => handelBuy()}
                >
                  Buy Now
                </lable>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="membership-item">
                <div className="mi-title">
                  <h4>Premium</h4>
                  <div className="triangle" />
                </div>
                <h2 className="mi-price">
                  $98<span>/01 mo</span>
                </h2>
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
                <lable
                  className="primary-btn membership-btn"
                  onClick={() => handelBuy()}
                >
                  Buy Now
                </lable>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BuyModal show={modalShow} close={closeBuy}></BuyModal>

      <section className="register-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="register-text">
                <div className="section-title">
                  <h2>Register Now</h2>
                  <p>
                    The First 7 Day Trial Is Completely Free With The Teacher
                  </p>
                </div>
                <form
                  action="#"
                  className="register-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row">
                    <div className="col-lg-6 input1">
                      <label htmlFor="name">First Name</label>
                      <input
                        type="text"
                        id="name"
                        name="fname"
                        ref={register({
                          required: true,
                          maxLength: 15,
                          pattern: {
                            value: /^[A-Za-z]+$/i,
                          },
                        })}
                      />
                      {errors.fname && errors.fname.type === "required" && (
                        <span className="errors-name1">
                          First Name không được bỏ trống
                        </span>
                      )}
                      {errors.fname && errors.fname.type === "maxLength" && (
                        <span className="errors-name1">
                          Max length exceeded
                        </span>
                      )}
                      {errors.fname && errors.fname.type === "pattern" && (
                        <span className="errors-name1" style={{ color: "red" }}>
                          Không đúng định dạng
                        </span>
                      )}
                    </div>
                    <div className="col-lg-6 input1">
                      <label htmlFor="email">Your email address</label>
                      <input
                        type="text"
                        id="email"
                        name="email2"
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          },
                        })}
                      />
                      {errors.email2?.type === "required" && (
                        <p className="errors-name1">
                          Email không được bỏ trống
                        </p>
                      )}
                      {errors.email2?.type === "pattern" && (
                        <p className="errors-name1">
                          Email không đúng định dạng
                        </p>
                      )}
                    </div>
                    <div className="col-lg-6 input1">
                      <label htmlFor="last-name">Last Name</label>
                      <input
                        type="text"
                        id="last-name"
                        name="lname"
                        ref={register({
                          required: true,
                          maxLength: 15,
                          pattern: {
                            value: /^[A-Za-z]+$/i,
                          },
                        })}
                      />
                      {errors.lname && errors.lname.type === "required" && (
                        <span className="errors-name1">
                          Last Name không được bỏ trống
                        </span>
                      )}
                      {errors.lname && errors.lname.type === "maxLength" && (
                        <span className="errors-name1">
                          Max length exceeded
                        </span>
                      )}
                      {errors.lname && errors.lname.type === "pattern" && (
                        <span className="errors-name1" style={{ color: "red" }}>
                          Không đúng định dạng
                        </span>
                      )}
                    </div>
                    <div className="col-lg-6 input1">
                      <label htmlFor="mobile">Mobile No*</label>
                      <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        ref={register({
                          required: true,
                          minLength: 10,
                          maxLength: 10,
                        })}
                      />
                      {errors.mobile && errors.mobile.type === "required" && (
                        <span className="errors-name1">
                          Số điện thoại không được bỏ trống
                        </span>
                      )}
                      {errors.mobile && errors.mobile.type === "minLength" && (
                        <span className="errors-name1">
                          Số điện thoại có phải có 10 chữ số và không có ký tự
                        </span>
                      )}
                      {errors.mobile && errors.mobile.type === "maxLength" && (
                        <span className="errors-name1">
                          Số điện thoại có phải có 10 chữ số và không có ký tự
                        </span>
                      )}
                    </div>
                  </div>
                  <button type="submit" className="register-btn">
                    Đăng ký tập thử
                  </button>
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
      <Modal
        className="modal d-flex justify-content-center modal-selecter"
        show={heart}
        animation={true}
      >
        <div className="modal-content-alert">
          <div className="d-flex justify-content-center my-3">
            <img
              src="https://img.icons8.com/color/48/000000/double-tick.png"
              className="img-tick"
              alt=""
            />
          </div>
          <p className="text-center">
            Cảm ơn bạn đã tin tưởng sử dụng dịch vụ, <br />
            nhân viên của Gym Gutim sẽ liên hệ lại với bạn trong thời gian sớm
            nhất
          </p>
        </div>
      </Modal>
      <BackToTop></BackToTop>
    </div>
  );
}

export default Pricing;
