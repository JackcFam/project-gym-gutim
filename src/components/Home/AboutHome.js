import React, { useState}from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../../css/modal-video.min.css';
function AboutHome(props) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className="about-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="about-pic">
            <img src="https://i.imgur.com/ZjsSfPr.jpg" alt="true" />
            <div className="play-btn video-popup">

              <img src="https://i.imgur.com/fQRNRVp.png" onClick={()=> setOpen(true)} alt="true" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-text">
            <h2>Story About Us</h2>
            <p className="first-para">“Chúng tôi quan niệm rằng không có bất cứ một khoản đầu tư nào quý giá hơn đầu tư cho chính bản thân. Khi đầu tư một cách đúng đắn cho việc tập luyện, những lợi ích mà khách hàng nhận được không chỉ là kết quả mang tính thẩm mỹ về mặt hình thể, mà hơn hết sức khỏe, lối sống cũng chuyển biến theo hướng tích cực và lành mạnh hơn.</p>
            <p className="second-para">Đối với chúng tôi, lợi ích của khách hàng chính là lợi nhuận quý báu nhất. Kết quả thực sự của khách hàng là những gì thương hiệu Gutim luôn hướng đến.”</p>
            <Link to="/about" className="primary-btn">Tìm hiểu thêm</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jC5xlKIQgR8" onClose={() => setOpen(false)} />

        </>

    );
}

export default AboutHome;
