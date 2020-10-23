import React, { useState, useEffect } from "react";
import Slider from "react-slick";

function SlickHome(props) {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    async function getClass() {
      const request = await fetch("https://api-webdata.herokuapp.com/classes");
      const classes = await request.json();
      setClasses(classes);
    }
    getClass();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 15000,
    cssEase: "linear",
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
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} style={{ width: "100%" }}>
      {classes.map((classe) => {
        return (
          <div className="col" key={classe.id}>
            <div className="single-class-item set-bg">
              <div
                style={{
                  backgroundImage: `url('${classe.img}')`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  cursor: "pointer",
                }}
              >
                <div className="banner-class">
                  <p className="name-class-banner">{classe.name}</p>
                  <p ClassName="caption-banner-class" style={{
                    color: "white", fontSize: "13px",fontWeight: "500"}}
                  >
                    Nơi bạn có thể thư giản và tập luyện trong một môi trường
                    đầy đủ tiện nghi...
                  </p>
                  <a className="join-now" href="/" >
                    Join Now
                  </a>
                </div>
              </div>
              <div className="si-text">
                <h4>{classe.name}</h4>
                <span>
                  <i className="fa fa-user" /> {classe.teacher}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default SlickHome;
