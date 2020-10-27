import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Classes/ClassContent/Class-content.css";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import BackToTop from "../BackToTop";
function BlogContent(props) {
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
  const prams = useParams();
  const { slug } = prams;
  const [baivietchitiet, setBaivietchitiet] = useState([]);
  const [baivietchitiet2, setBaivietchitiet2] = useState([]);
  useEffect(() => {
    async function getBaichitiet() {
      const response = await fetch(
        "https://api-webdata.herokuapp.com/topnews?slug=" + slug
      );
      const baichitiet = await response.json();
      setBaivietchitiet(baichitiet[0]);
    }
    getBaichitiet();
  }, [slug]);
  useEffect(() => {
    async function getBaichitiet2() {
      const response = await fetch(
        "https://api-webdata.herokuapp.com/topnews"
      );
      const baichitiet2 = await response.json();
      setBaivietchitiet2(baichitiet2);
    }
    getBaichitiet2();
  }, []);

  return (
    <div>
      <section
        className="blog-details-hero set-bg"
        data-setbg="img/blog/blog-detail-hero.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bd-hero-text">
                <span>{baivietchitiet.danhMuc}</span>
                <h2>{baivietchitiet.tieuDe}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        {/* Blog Details Section Begin */}
        <section className="blog-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="bd-text">
                  <div className="bd-title">
                    <p>{baivietchitiet.trichDan}</p>
                  </div>
                  <div className="bd-pic">
                    <div className="row">
                      <div className="col-lg-12">
                        <img src={baivietchitiet.anh} alt="true" />
                      </div>
                    </div>
                  </div>
                  <div className="bd-more-text">
                    <div className="bm-item">
                      <h4>{baivietchitiet.tieuDe}</h4>
                      <p>{baivietchitiet.noiDung}</p>
                    </div>
                  </div>
                  <div className="bd-quote">
                    <samp>"</samp>
                    <p>
                      “We need to stop interrupting what people are interested
                      in and be what people are interested in.”
                    </p>
                    <div className="quote-author">
                      <h5>Steven Jobs</h5>
                      <span>CEO-DeerCreative</span>
                    </div>
                  </div>
                  <div className="bd-last-para">
                    <p>
                      All the above assumes that a client is willing to create a
                      website in the first place. Some clients may believe that
                      they can forgo a website entirely. However, without a
                      website, it is impossible for a business to grow.
                    </p>
                  </div>
                  <div className="tag-share">
                    <div className="tags">
                      <a href="#">Camera</a>
                      <a href="#">Photography</a>
                      <a href="#">Tips</a>
                    </div>
                    <div className="social-share">
                      <span>Share:</span>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-youtube-play" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-author">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="ba-pic">
                          <img
                            src="https://i.imgur.com/dr66xjI.jpg"
                            alt="true"
                          />
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="ba-text">
                          <h5>Shane Lynch</h5>
                          <p>
                            Aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse
                            cillum bore et dolore magna aliqua.{" "}
                          </p>
                          <div className="bt-social">
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fa fa-google-plus" />
                            </a>
                            <a href="#">
                              <i className="fa fa-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Details Section End */}
        {/* Latest Blog Section Begin */}
        <section className="latest-blog-section recommend spad">
          <Container>
            <Row>
              <div className="col-lg-12">
                <h3>Recommended</h3>
              </div>
            </Row>
            <Row>
              <Slider {...settings} style={{ width: "100%" }}>
                {baivietchitiet2.map((value) => {
                  if (value.id !== baivietchitiet.id) {
                    if (dem<= 8) {
                      dem++;
                      return (
                        <Container>
                          <React.Fragment key={value.id}>
                            <Link to={"/blog/" + value.slug}>
                              <Col>
                                <Container>
                                  <Card className="single-blog-item">
                                    <Card.Img src={value.anh} alt="true" />
                                    <Card.Body className="blog-widget">
                                      <div className="bw-date">
                                        February 17, 2019
                                      </div>
                                      <a href="/blog" className="tag">
                                        #{value.tag}
                                      </a>
                                    </Card.Body>
                                    <h4>
                                      <a href="/blog">{value.tieuDe}</a>
                                    </h4>
                                  </Card>
                                </Container>
                              </Col>
                            </Link>
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
      </div>

      <BackToTop></BackToTop>
    </div>
  );
}

export default BlogContent;
