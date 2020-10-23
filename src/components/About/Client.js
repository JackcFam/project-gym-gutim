import React from 'react';
import Slider from "react-slick";
export default function Client() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 4000,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    cssEase: "linear"
  };


  return (

  <section className="testimonial-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <h2>Hội viên Gutim nói gì về chúng tôi</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-10 offset-lg-1">

        <div className="testimonial-slider owl-carousel">
          <Slider {...settings} style={{ width: "100%" }}>
          <div className="testimonial-item col">
            <p style={{fontSize: "15px"}}>Ở Gutim, có rất nhiều môn học và chương trình huấn
                          luyện mà My yêu thích như: Yoga, Kickfit và tập luyện
                          một kèm một cùng huấn luyện viên cá nhân. Đặc biệt,
                          chương trình huấn luyện cá nhân mang đến nhiều lợi ích
                          như cơ thể săn chắc rõ rệt, thể lực cũng được nâng cao
                          nhanh chóng. Sau một thời gian luyện tập, My đã cảm
                          thấy rõ sự săn chắc của cơ thể. Và cho dù phải làm
                          việc liên tục, đầu óc của My vẫn luôn tỉnh táo và cơ
                          thể vẫn giữ được sự linh hoạt. My hy vọng, những ai
                          đến với Gutim cũng đạt được những mục tiêu của chính
                          mình giống như My.</p>
            <div className="ti-pic">
              <img src="https://i.imgur.com/s0LaRua.png" alt="true" />
              <div className="quote">
                <img src="https://i.imgur.com/PPVJnKD.png" alt="true" />
              </div>
            </div>
            <div className="ti-author">
              <h4>Diễm My</h4>
              <span>Diễn viên</span>
            </div>
          </div>




          <div className="testimonial-item col">
            <p style={{fontSize: "15px"}}>Giang bắt đầu tập luyện tại Gutim vào 2 năm trước.
                          Đến thời điểm hiện tại, Giang có thể tự tin khẳng
                          định, Gutim là trung tâm thể hình và giải trí hàng
                          đầu tại Việt Nam và là điểm đến quen thuộc của nhiều
                          người của công chúng. Bộ môn yêu thích nhất của của
                          Giang tại Gutim là Yoga. Khi thực hành các động tác
                          Yoga, Giang học hỏi được sự cân bằng, khéo léo. Ở
                          ngưỡng tuổi 30, tập luyện Yoga xen kẽ cùng các buổi
                          tập cùng huấn luyện viên cá nhân mang đến cho Giang sự
                          tươi trẻ về ngoại hình và sự phấn chấn trong tinh
                          thần. </p>
            <div className="ti-pic">
              <img src="https://i.imgur.com/RKmAibp.png" alt="true" />
              <div className="quote">
                <img src="https://i.imgur.com/PPVJnKD.png" alt="true" />
              </div>
            </div>
            <div className="ti-author">
              <h4>Hương Giang</h4>
              <span>Diễn Viên</span>
            </div>
          </div>


          <div className="testimonial-item col">
            <p style={{fontSize: "15px"}}>Thói quen tập luyện tại Gutim đã giúp Tường thực sự
                          thay đổi, nhất là ngoại hình, nhiều người nghi ngờ
                          mình thẩm mỹ vì khuôn mặt mình thon gọn hơn nhiều so
                          với thời gian thi The Voice. Sự thật nằm ở những buổi
                          vác tạ chạy vòng vòng trong phòng tập cùng với huấn
                          luyện viên. Nếu như trong suốt bao năm qua tôi không
                          luyện tập dưới áp lực và kỷ luật thì làm sao mình có
                          thể rèn được sức mạnh như thế. Không chỉ là sự thay
                          đổi về ngoại hình về thể lực mà thành quả ý nghĩa nhất
                          việc tập luyện chính là một tinh thần thép thật sự.</p>
            <div className="ti-pic">
              <img src="https://i.imgur.com/r66oG4K.png" alt="true" />
              <div className="quote">
                <img src="https://i.imgur.com/PPVJnKD.png" alt="true" />
              </div>
            </div>
            <div className="ti-author">
              <h4>Vũ Cát Tường</h4>
              <span>Ca Sĩ</span>
            </div>
          </div>

          <div className="testimonial-item col">
            <p style={{fontSize: "15px"}}>Trải qua sự nghiệp người mẫu 13 năm tại Hồng Kông,
                          Singapore, Thái Lan, Philippines, Úc, Việt Nam
                          ....cũng như tham gia đóng một số bộ phim tại Việt
                          Nam. Ngoài công việc trong ngành giải trí nói trên, ít
                          ai biết công việc chính chiếm toàn bộ thời gian của
                          tôi lại là điều hành mảng kinh doanh và truyền thông
                          cho một công ty vận tải. Với lịch trình làm việc bận
                          rộn, tôi vẫn có thể vừa hoàn thành vai trò của một
                          doanh nhân, vừa tham gia các hoạt động giải trí vừa
                          duy trì được body săn chắc, khỏe khoắn đến vậy vì tôi
                          hiểu rằng: để có thể phát triển sự nghiệp và chăm sóc
                          gia đình tốt nhất, tôi cần một cơ thể khỏe mạnh và
                          luôn tràn đầy sức sống.</p>
            <div className="ti-pic">
              <img src="https://i.imgur.com/dwrdrwd.png" alt="true" />
              <div className="quote">
                <img src="https://i.imgur.com/PPVJnKD.png" alt="true" />
              </div>
            </div>
            <div className="ti-author">
              <h4>Hồ Vĩnh Khoa</h4>
              <span>Người Mẫu</span>
            </div>
          </div>









          </Slider>

        </div>
      </div>
    </div>
  </div>
</section>

  );
}
