import React from 'react';
import {Modal} from 'react-bootstrap';

function ModalThongBao(props) {
    return (
      <Modal
        className="modal d-flex justify-content-center modal-selecter"
        show={tick}
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
    );
}

export default ModalThongBao;
