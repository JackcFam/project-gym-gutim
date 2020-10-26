import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
function TopNews(props) {
  const [topnew, setTopnew] = useState([]);
  useEffect(() => {
    async function getTopnew() {
      const request = await fetch("https://api-webdata.herokuapp.com/topnews");
      const topnew = await request.json();
      setTopnew(topnew);
    }
    getTopnew();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    ],
  };
  return (
    <>
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

      <section className="container">
        <div className="row">
          <div className="col">
            <section className="latest-blog-section spad">
              <Container>
                <Row>
                  <div className="col-lg-12">
                    <div className="section-title">
                      <h2>THÔNG TIN HỮU ÍCH</h2>
                    </div>
                  </div>
                </Row>

                <Slider {...settings} style={{ width: "100%" }}>
                  {topnew.map((item) => {
                    if (item.id <= 5) {
                      return (
                        <Link to={"/blog/" + item.slug}>
                          <React.Fragment key={item.id}>
                            <Col>
                              <Container>
                                <Card className="single-blog-item">
                                  <Card.Img src={item.anh} alt="true" />
                                  <Card.Body className="blog-widget">
                                    <div className="bw-date">
                                      February 17, 2019
                                    </div>
                                    <a href="/blog" className="tag">
                                      #Gym
                                    </a>
                                  </Card.Body>
                                  <h4>
                                    <a href="/blog">{item.tieuDe}</a>
                                  </h4>
                                </Card>
                              </Container>
                            </Col>
                          </React.Fragment>
                        </Link>
                      );
                    }
                  })}
                </Slider>
              </Container>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopNews;
