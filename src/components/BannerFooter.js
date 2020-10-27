import React from "react";
import {Link} from 'react-router-dom'

function BannerFooter(props) {
  return (
    <div>
      <section className="footer-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="footer-banner-item set-bg"
                data-setbg="img/footer-banner/footer-banner-1.jpg"
                style={{
                  backgroundImage: `url(${"https://i.imgur.com/yCZ5sxH.jpg"})`,
                }}
              >
                <span>Ưu đãi thành viên mới</span>
                <h2>7 days for free</h2>
                <p>
                  Hoàn thành các bài tập của chúng tôi, chắc chắn bạn sẽ có thân
                  hình mong ước
                </p>
                <a href="#" className="primary-btn">
                  Đăng ký ngay
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="footer-banner-item set-bg"
                data-setbg="img/footer-banner/footer-banner-2.jpg"
                style={{
                  backgroundImage: `url(${"https://i.imgur.com/JnIwxmV.jpg"})`,
                }}
              >
                <span>contact us</span>
                <h2>1900 9198</h2>
                <p>
                  Nếu bạn tin tưởng chúng tôi trên hành trình của bạn, chúng tôi sẽ không làm bạn thất vọng!
                </p>
                <a href="tel:19009198" className="primary-btn">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerFooter;
