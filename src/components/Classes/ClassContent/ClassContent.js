import React, { useState, useEffect } from "react";
import BannerQuangCao from "./BannerQuangCao";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "./Class-content.css";
import BackToTop from "../../BackToTop";
function ClassContent(props) {
  let dem = 1;
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
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
        },
      },
    ],
  };

  const params = useParams();
  const { slug } = params;
  const [lophocchitiet, setLophocchitiet] = useState([]);
  const [lophocchitiet2, setLophocchitiet2] = useState([]);

  useEffect(() => {
    async function getLopchitiet() {
      const response = await fetch(
        "https://api-webdata.herokuapp.com/classes?slug=" + slug
      );
      const lophocchitiet = await response.json();
      setLophocchitiet(lophocchitiet[0]);
    }
    getLopchitiet();
  }, [slug]);

  useEffect(() => {
    async function getLopchitiet2() {
      const response = await fetch("https://api-webdata.herokuapp.com/classes");
      const lophocchitiet = await response.json();
      setLophocchitiet2(lophocchitiet);
    }
    getLopchitiet2();
  }, []);

  return (
    <>
      <section
        className="blog-details-hero set-bg"
        data-setbg="img/blog/blog-detail-hero.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bd-hero-text">
                <span>Class</span>
                <h2>{lophocchitiet.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Classes Section Begin */}
      <section className="classes-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="classes__sidebar">
                <div className="classes__sidebar__item classes__sidebar__item--info">
                  <h4>Thông tin lớp học</h4>
                  <ul className="classes__sidebar__item__widget">
                    <li>
                      <span className="icon_calendar" /> Mon, Wed, Fri
                    </li>
                    <li>
                      <span className="icon_clock_alt" /> 18:30 - 19:30
                    </li>
                  </ul>
                  <ul className="classes__sidebar__item__id">
                    <li>
                      <span className="icon_pin_alt" /> 184 Main Collins
                      Streets, New York
                    </li>
                    <li>
                      <span className="icon_id" /> Jordan Lawson
                    </li>
                  </ul>
                  <a href="/" className="sidebar-btn">
                    Đăng ký ngay
                  </a>
                </div>
                <div className="classes__sidebar__item">
                  <h4>About Instructor</h4>
                  <div className="classes__sidebar__instructor">
                    <div className="classes__sidebar__instructor__pic">
                      <img src="https://i.imgur.com/NqnUjlU.png" alt="true" />
                    </div>
                    <div className="classes__sidebar__instructor__text">
                      <div className="classes__sidebar__instructor__title">
                        <h4>{lophocchitiet.teacher}</h4>
                        <span>{lophocchitiet.name} Teacher</span>
                      </div>
                      <p>
                        Yoga &amp; Therapy Certificate of
                        <br /> Uttarakhand University Sanskirt
                      </p>
                      <div className="classes__sidebar__instructor__social">
                        <a href="www.facebook.com">
                          <span className="social_facebook" />
                        </a>
                        <a href="www.facebook.com">
                          <span className="social_twitter" />
                        </a>
                        <a href="www.facebook.com">
                          <span className="social_instagram" />
                        </a>
                        <a href="www.facebook.com">
                          <span className="social_linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="classes__sidebar__item">
                  <h4>Review &amp; Comment</h4>
                  <div className="classes__sidebar__comment__list">
                    <div className="classes__sidebar__comment">
                      <div className="classes__sidebar__comment__pic">
                        <img src="https://i.imgur.com/9iK6CRX.png" alt="true" />
                        <div className="classes__sidebar__comment__rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-half-o" />
                        </div>
                      </div>
                      <div className="classes__sidebar__comment__text">
                        <span>04 Mar 2018</span>
                        <h6>Brandon Kelley</h6>
                        <p>
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit,
                        </p>
                      </div>
                    </div>
                    <div className="classes__sidebar__comment">
                      <div className="classes__sidebar__comment__pic">
                        <img src="https://i.imgur.com/NH1sGwh.png" alt="true" />
                        <div className="classes__sidebar__comment__rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-half-o" />
                        </div>
                      </div>
                      <div className="classes__sidebar__comment__text">
                        <span>04 Mar 2018</span>
                        <h6>Christina Kelley</h6>
                        <p>
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="classes__details">
                <div className="classes__details__large">
                  <img src={lophocchitiet.img} alt="true" />
                  <span>Beginer</span>
                </div>
                <ul className="classes__details__widget">
                  <li>
                    <span className="icon_calendar" /> Mon, Wed, Fri
                  </li>
                  <li>
                    <span className="icon_clock_alt" /> 18:30 - 19:30
                  </li>
                </ul>
                <h2>100 Hour of class {lophocchitiet.name}</h2>
                <p>{lophocchitiet.content}</p>
                <div className="classes__details__item">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <img src="https://i.imgur.com/7Xn7zQm.jpg" alt="true" />
                    </div>
                    <div className="col-lg-8 col-md-8">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <img
                            src="https://i.imgur.com/g1UOOoi.jpg"
                            alt="true"
                          />
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <img
                            src="https://i.imgur.com/EpYq5sz.jpg"
                            alt="true"
                          />
                        </div>
                      </div>
                      <img src="https://i.imgur.com/okivv6a.jpg" alt="true" />
                    </div>
                  </div>
                </div>
                <div className="classes__details__desc">
                  <h6>
                    The Secret to improving her height to achieve quick result,
                    If you are going to use a passage of you need to be sure.
                  </h6>
                  <ul>
                    <li>
                      <span className="icon_check" /> All their equipment and
                      instruments are alive.
                    </li>
                    <li>
                      <span className="icon_check" /> The that about to watched
                      storm, so beautiful terrific.
                    </li>
                    <li>
                      <span className="icon_check" /> There are many variations
                      of passages of lorem ppsum available.
                    </li>
                    <li>
                      <span className="icon_check" /> If you are going to use a
                      passage of you need to be sure.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Classes Section End */}
      <BannerQuangCao></BannerQuangCao>
      {/* Upcoming Classes Section Begin */}
      <Container>
        <Row>
          <Col>
            <section className="upcoming-classes spad">
              <Container>
                <Row>
                  <div className="col-lg-12">
                    <div className="section-title normal-title">
                      <h2>Mọi người cũng đã đăng ký</h2>
                    </div>
                  </div>
                </Row>
                <Row>
                  <Slider {...settings} style={{ width: "100%" }}>
                    {lophocchitiet2.map((value) => {
                      if (value.id !== lophocchitiet.id) {
                        if (dem <= 6) {
                          dem++;
                          return (
                            <Container>
                              <React.Fragment key={value.id}>
                                <Col>
                                  <Link to={"/classes/" + value.slug}>
                                    <Card className="classes__item">
                                      <div
                                        className="classes__item__pic set-bg"
                                        data-setbg="img/classes/classes-10.jpg"
                                      >
                                        <Card.Img src={value.img} alt="true" />
                                      </div>
                                      <Card.Body className="classes__item__text">
                                        <p>
                                          14 Days | Start on 10th Every Month
                                        </p>
                                        <h4>
                                          <Link to={"/classes/" + value.slug}>
                                            {value.name}
                                          </Link>
                                        </h4>
                                        <h6>
                                          {value.teacher}{" "}
                                          <span>- Gutim Teacher</span>
                                        </h6>
                                        <Link to="/" className="class-btn">
                                          Đăng ký ngay
                                        </Link>
                                      </Card.Body>
                                    </Card>
                                  </Link>
                                </Col>
                              </React.Fragment>
                            </Container>
                          );
                        }
                      }
                    })}
                  </Slider>
                </Row>
              </Container>
            </section>
          </Col>
        </Row>
          </Container>
          <BackToTop></BackToTop>
    </>
  );
}

export default ClassContent;
