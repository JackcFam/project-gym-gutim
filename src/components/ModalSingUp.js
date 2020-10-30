import React from "react";
import { Modal, Container, Col, Row, Button } from "react-bootstrap";

function ModalSingUp(props) {
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
                                  <p className="days">
                                      NGÀY
                                  </p>
                </div>

                <div className="tap-thu-mien-phi">
                  <p>TẬP THỬ</p>
                  <p>MIỄN PHÍ</p>
                </div>
              </div>
            </Col>

            <form className="form-dang-ky-tap-thu">
              <input
                type="text"
                id="name"
                placeholder="Họ và Tên"
                name="hoten"
              />
              <input
                type="text"
                id="phone"
                placeholder="Số Điện Thoại"
                name="sdt"
              />
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
