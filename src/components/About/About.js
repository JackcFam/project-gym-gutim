
import React, {useState} from 'react';
import CountUp from 'react-countup';
import Trainer from '../Home/Trainer';
import Client from './Client';
import Images from './Images';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../../css/modal-video.min.css';


function About(props) {
  const [isOpen, setOpen] = useState(false);
  return (
      <>
    <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb/classes-breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Về chúng tôi</h2>
                <div className="breadcrumb-option">
                  <a href="./index.html">
                    <i className="fa fa-home" /> Trang chủ
                  </a>
                  <span>Về chúng tôi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  {/* About Section Begin */}
  <section className="about-section about-page spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="about-pic">
            <img src="https://i.imgur.com/AfGIBzO.jpg" alt="true" />
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
            <img src="https://i.imgur.com/5v8mnU9.png" alt="true" />
            <div className="at-author">
              <h4>Lettie Chavez</h4>
              <span>CEO - Founder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section End */}
  {/* About Counter Section Begin */}
  <div className="about-counter">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="about-counter-text">
            <div className="single-counter">
              <CountUp start={0} end={98} duration={7} className="counter-num count">98</CountUp>
              <p>Programs</p>
            </div>
            <div className="single-counter">
              <CountUp start={0} end={14} duration={7} className="counter-num count">14</CountUp>
              <p>Locations</p>
            </div>
            <div className="single-counter">
              <CountUp start={0} end={50} duration={7} className="counter-num count">50</CountUp>
              <span>k+</span>
              <p>Members</p>
            </div>
            <div className="single-counter">
              <CountUp start={0} end={34} duration={7} className="counter-num count">34</CountUp>
              <p>Coaches</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Counter Section End */}
  {/* Gym Award Section Begin */}
  <section className="gym-award spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="award-text">
            <h2>Best gym award</h2>
            <p>Năm 2007 Gutim trở thành công ty thể dục thể hình quốc tế đầu tiên và lớn nhất ra mắt tại Việt Nam. Với sứ mệnh “Làm Cho Cuộc Sống Tốt Đẹp Hơn”, Gutim không chỉ đơn thuần giống như bao phòng tập thông thường khác. Đây là trung tâm của phong cách sống năng động, nhằm truyền cảm hứng, mang lại niềm vui sảng khoái cũng như nguồn sinh khí mới cho cộng đồng.</p>
            <p>Thành công vượt bậc của Gutim gắn liền với tầm nhìn và vai trò lãnh đạo của nhà sáng lập, đồng thời cũng là CEO – ông Lettie Chavez đã thổi bùng trong toàn công ty của ông ngọn lửa đam mê tận hưởng cuộc sống và giải trí, vốn đã tạo nên một cuộc cách mạng trong cách luyện tập thể dục thể hình trên khắp châu Á.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <img src="https://i.imgur.com/13YHUNa.jpg" alt="true" />
        </div>
      </div>
    </div>
  </section>



  {/* Gym Award Section End */}
  {/* Banner Section Begin */}
  <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="banner-text">
            <h2>Tham gia tập luyện</h2>
            <p>Trải nghiệm tập luyện chuyên nghiệp tại studio 5* gymzone chưa bao giờ đơn giản hơn</p>
            <Link to="/contact" className="primary-btn banner-btn">Đăng ký tập thử</Link>
          </div>
        </div>
        <div className="col-lg-5">
          <img src="https://i.imgur.com/IrBf66a.png" alt="true" />
        </div>
      </div>
    </div>
  </section>


  <section className="container">
    <div className="row">
      <div className="col">
      <Client></Client>
      </div>
    </div>
  </section>
  {/* Banner Section End */}
  {/* Trainer Section Begin */}
  <Trainer></Trainer>
  <section className="container">
    <div className="row">
      <div className="col">
      <Images></Images>
      </div>
    </div>
  </section>


  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jC5xlKIQgR8" onClose={() => setOpen(false)} />
</>


  );
}

export default About;
