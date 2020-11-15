import React, { useState } from "react";
import { Modal, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function ModalSingUp(props) {
  const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();
        alert("Đăng ký thành công");
  };
  return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton className="modal-content-dang-ky">
        <Row className="modal-body">
          <Col className="content-main-dang-ky">
            <div className="title-dang-ky">ĐĂNG KÝ ĐỂ NHẬN NGAY</div>
            <div className="title-dang-ky1">
              <div className="7ngay">
                <p className="seven">7</p>
                <p className="days">NGÀY</p>
              </div>

              <div className="tap-thu-mien-phi">
                <p>TẬP THỬ</p>
                <p>MIỄN PHÍ</p>
              </div>
            </div>
          </Col>

          <form
            className="form-dang-ky-tap-thu"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              id="hoten"
              placeholder="Họ và Tên"
              name="hoten"
              ref={register({
                required: true,
                maxLength: 30,
                pattern: {
                  value: /^[A-Za-z]+$/i,
                },
              })}
            />
            {errors.hoten && errors.hoten.type === "required" && (
              <span className="errors-name">Tên không được bỏ trống</span>
            )}
            {errors.hoten && errors.hoten.type === "maxLength" && (
              <span className="errors-name">Max length exceeded</span>
            )}
            {errors.hoten && errors.hoten.type === "pattern" && (
              <span className="errors-name">Không đúng định dạng</span>
            )}
            <input
              type="text"
              id="phone"
              placeholder="Số Điện Thoại"
              name="sdt"
              ref={register({
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            />
            {errors.sdt && errors.sdt.type === "required" && (
              <span className="errors-sdt">Số điện thoại không được bỏ trống</span>
            )}
            {errors.sdt && errors.sdt.type === "minLength" && (
              <span className="errors-sdt">
                Vui lòng nhập số điện thoại từ 0 và không có ký tự đặc biệt. vd:
                0123456789
              </span>
            )}
            {errors.sdt && errors.sdt.type === "maxLength" && (
              <span className="errors-sdt">
                Vui lòng nhập số điện thoại từ 0 và không có ký tự đặc biệt. vd:
                0123456789
              </span>
            )}
            <Button
              type="submit"
              id="button-submit-sign-up"
              className="btn-danger"
            >
              ĐĂNG KÝ NGAY
            </Button>
          </form>
        </Row>
      </Modal.Header>
    </Modal>
  );
}

export default ModalSingUp;
