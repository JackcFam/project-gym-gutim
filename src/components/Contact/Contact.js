import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import BackToTop from "../BackToTop";


function Contact(props) {
  const [heart, setHeart] = useState(false);
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
   }, 1000);
 };
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
                <h2>Liên Hệ</h2>
                <div className="breadcrumb-option">
                  <a href="./index.html">
                    <i className="fa fa-home" /> Trang chủ
                  </a>
                  <span>Liên Hệ</span>
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
                      <img src="https://i.imgur.com/zRPDwAk.png" alt="true" />
                    </div>
                    <div className="cw-text">
                      <h5>Our Location</h5>
                      <p>60-49 Road 11378 New York</p>
                    </div>
                  </div>
                  <div className="ca-widget">
                    <div className="cw-icon">
                      <img src="https://i.imgur.com/a1HfV4s.png" alt="true" />
                    </div>
                    <div className="cw-text">
                      <h5>Phone:</h5>
                      <p>+65 11.188.888</p>
                    </div>
                  </div>
                  <div className="ca-widget">
                    <div className="cw-icon">
                      <img src="https://i.imgur.com/XcrrXcf.png" alt="true" />
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
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        placeholder="Your name"
                        id="name"
                        name="name"
                        ref={register({
                          required: true,
                          maxLength: 30,
                          pattern: {
                            value: /^[A-Za-z]+$/i,
                          },
                        })}
                      />
                      {errors.name && errors.name.type === "required" && (
                        <span className="errors-name1">
                          Tên không được bỏ trống
                        </span>
                      )}
                      {errors.name && errors.name.type === "maxLength" && (
                        <span className="errors-name1">
                          Max length exceeded
                        </span>
                      )}
                      {errors.name && errors.name.type === "pattern" && (
                        <span className="errors-name1" style={{ color: "red" }}>
                          Không đúng định dạng
                        </span>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        placeholder="Your email"
                        id="emailc"
                        name="email1"
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          },
                        })}
                      />
                      {errors.email1?.type === "required" && (
                        <p className="errors-name1">
                          Email không được bỏ trống
                        </p>
                      )}
                      {errors.email1?.type === "pattern" && (
                        <p className="errors-name1">
                          Email không đúng định dạng
                        </p>
                      )}
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="text"
                        style={{ height: "150px" }}
                        placeholder="Your messages"
                        defaultValue={""}
                        name="textm"
                        ref={register({
                          required: true,
                          maxLength: 255,
                        })}
                      />
                      {errors.textm && errors.textm.type === "required" && (
                        <span className="errors-name1">
                          Tin nhắn không được bỏ trống
                        </span>
                      )}
                      {errors.textm && errors.textm.type === "maxLength" && (
                        <span className="errors-name1">
                          Max length exceeded
                        </span>
                      )}
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
        <iFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21070.22693089112!2d105.81039880248275!3d21.003654383775498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab43c0c4db%3A0xdb6effebd6991106!2sKeangnam%20Hanoi%20Landmark%20Tower!5e0!3m2!1svi!2s!4v1601239618618!5m2!1svi!2s"
          height={612}
          style={{ border: 0 }}
          allowFullScreen
        ></iFrame>
      </div>
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
          <p className="text-center">Cảm ơn bạn đã góp ý</p>
        </div>
      </Modal>
      <BackToTop></BackToTop>
    </div>
  );
}

export default Contact;
