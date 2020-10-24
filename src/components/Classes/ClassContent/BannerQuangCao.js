import React from 'react';
// import PropTypes from 'prop-types';

// BannerQuangCao.propTypes = {

// };

function BannerQuangCao(props) {
    return (
      <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text">
                <h2>Tham gia tập luyện</h2>
                <p>
                  Trải nghiệm tập luyện chuyên nghiệp tại studio 5* gymzone chưa
                  bao giờ đơn giản hơn
                </p>
                <a href="/contact" className="primary-btn banner-btn">
                  Đăng ký tập thử
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <img src="https://i.imgur.com/IrBf66a.png" alt="true" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default BannerQuangCao;
