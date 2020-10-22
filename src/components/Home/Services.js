import React from "react";
//  import PropTypes from 'prop-types';

//  Services.propTypes = {

//  };

function Services(props) {
  return (
    <section className="services-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="services-pic">
              <img src="https://i.imgur.com/1lcFJrg.jpg" alt="true" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-items">
              <div className="row">
                <div className="col-md-6">
                  <div className="services-item bg-gray">
                    <img src="https://i.imgur.com/RgPrJNb.png" alt="true" />
                    <h4>Huấn luyện viên cá nhân</h4>
                    <p>
                      Giúp bạn đánh giá các chỉ số cơ thể để phục hồi thể lực
                    </p>
                  </div>
                  <div className="services-item bg-gray pd-b">
                    <img src="https://i.imgur.com/HjMF3Hz.png" alt="true" />

                    <h4>Giảm căng cơ</h4>
                    <p>
                      Giải phóng cơ thể khỏi những áp lực không mong muốn xuất
                      hiện trên các khối cơ
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="services-item">
                    <img src="https://i.imgur.com/fdeSmsn.png" alt="true" />
                    <h4>Yoga</h4>
                    <p>Giúp giải tỏa strees và thư giãn tâm hồn</p>
                  </div>
                  <div className="services-item pd-b">
                    <img src="https://i.imgur.com/tzDGnON.png" alt="true" />
                    <h4>Giảm cân</h4>
                    <p>
                      Giảm mỡ toàn thân với các bài tập hiệu quả chuyên sâu nhất
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
