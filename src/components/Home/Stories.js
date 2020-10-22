import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Stories(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="testimonial-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Câu chuyện thành công</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="container"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.cfyc.com.vn/images_server/themes/celebration/img/testimonial/testimonial-3.png?v=1.2"
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.cfyc.com.vn/images_server/themes/celebration/img/testimonial/testimonial-4.png?v=1.2"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Stories;
