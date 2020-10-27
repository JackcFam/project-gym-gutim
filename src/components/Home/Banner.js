import React from 'react';
import { Link } from 'react-router-dom';
function Banner(props) {

    return (
      <section
        className="hero-section set-bg"
        data-setbg="https://i.imgur.com/Bd4djQ7.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-text">
                <span>
                  <img src="https://i.imgur.com/GnEMupR.png" alt="true"></img>
                </span>
                <h1>GYM ĐÚNG - KẾT QUẢ THẬT</h1>
                <p>
                  Gutim Tự hào là trung tâm thể hình thay đổi thể hình nhất
                  <br /> tại Hà Nội cũng như Việt Nam hiện nay
                </p>
                <Link to="/about" className="primary-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Banner;
