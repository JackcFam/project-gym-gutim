import React from 'react';
import Slider from "react-slick";

function Images(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]
      };



    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
            <div className="section-title">
              <h2>Ảnh nổi bật</h2>
            </div>
          </div>
            </div>
            <div className="container">


            <div className="row">
                <Slider {...settings} style={{ width: "100%" }}>
                    <div className="col">
                        <img src="https://i.imgur.com/3Sljkfs.jpg" alt="true" />
                    </div>
                    <div className="col">
                        <img src="https://i.imgur.com/piOC8Yh.jpg" alt="true" />
                    </div>
                    <div className="col">
                        <img src="https://i.imgur.com/9w8nr0n.jpg" alt="true" />
                    </div>
                    <div className="col">
                        <img src="https://i.imgur.com/cHq4YZE.jpg" alt="true" />
                    </div>
                    <div className="col">
                        <img src="https://i.imgur.com/cHq4YZE.jpg" alt="true" />
                    </div>
                    <div className="col">
                        <img src="https://i.imgur.com/1lcFJrg.jpg" alt="true" />
                    </div>
                    <div className="col">
                        <img src="https://i.imgur.com/cHq4YZE.jpg" alt="true" />
                    </div>
                    <div className="col">
                        <img src="https://i.imgur.com/f9eqgXr.jpg" alt="true" />
                    </div>
                    <div className="col">
                        <img src="https://i.imgur.com/fF0BM3Z.jpg" alt="true" />
                    </div>
                    <div className="col">
                        <img src="https://i.imgur.com/wjAOZyV.png" alt="true" />
                    </div>
                </Slider>
            </div>
            </div>
        </div>
    );
}

export default Images;
