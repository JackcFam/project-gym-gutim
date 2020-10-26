import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Classes/ClassContent/Class-content.css";

function BlogContent(props) {
  const prams = useParams();
  const { slug } = prams;
  const [baivietchitiet, setBaivietchitiet] = useState([]);
  useEffect(() => {
    async function getBaichitiet() {
      const response = await fetch(
        "https://api-webdata.herokuapp.com/topnews?slug=" + slug
      );
      const baichitiet = await response.json();
      setBaivietchitiet(baichitiet[0]);
    }
    getBaichitiet();
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
                <span>POST</span>
                <h2>{baivietchitiet.tieuDe}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 order-lg-1 order-2">
              <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search" />
                    <button>
                      <span className="fas fa-search" />
                    </button>
                  </form>
                </div>
                <div className="blog__sidebar__categories">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Fuel (20)</a>
                    </li>
                    <li>
                      <a href="#">Sweat (5)</a>
                    </li>
                    <li>
                      <a href="#">Play (9)</a>
                    </li>
                    <li>
                      <a href="#">Live (10)</a>
                    </li>
                  </ul>
                </div>
                <div className="blog__sidebar__recent">
                  <h4>Recent News</h4>
                  <div className="blog__recent__item">
                    <div className="blog__recent__item__pic">
                      <img src={baivietchitiet.anh} alt="true" />
                    </div>
                    <div className="blog__recent__item__text">
                      <h6>09 Kinds Of Vegetables Protect The Liver</h6>
                      <span>MAR 05, 2019</span>
                    </div>
                  </div>
                  <div className="blog__recent__item">
                    <div className="blog__recent__item__pic">
                      <img src="img/blog/br-2.jpg" alt="true" />
                    </div>
                    <div className="blog__recent__item__text">
                      <h6>Tips You To Balance Nutrition Meal Day</h6>
                      <span>MAR 05, 2019</span>
                    </div>
                  </div>
                  <div className="blog__recent__item">
                    <div className="blog__recent__item__pic">
                      <img src="img/blog/br-3.jpg" alt="true" />
                    </div>
                    <div className="blog__recent__item__text">
                      <h6>4 Principles Help You Lose Weight With Vegetables</h6>
                      <span>MAR 05, 2019</span>
                    </div>
                  </div>
                </div>
                <div className="blog__sidebar__tags">
                  <h4>Search By Tags</h4>
                  <a href="#">Weight</a>
                  <a href="#">Beauty</a>
                  <a href="#">Yoga Ball</a>
                  <a href="#">Fruit</a>
                  <a href="#">Healt="true"hy Food</a>
                  <a href="#">Lifestyle</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 order-lg-2 order-1">
              <div className="blog__details">
                <div className="blog__details__large">
                  <img src={baivietchitiet.anh} alt="true" />
                  <span>{baivietchitiet.danhMuc}</span>
                </div>
                <div className="blog__details__text">
                  <p>{baivietchitiet.noiDung}</p>
                </div>
                <div className="blog__details__quote">
                  <p>
                    This is my second time completing a 200 hr TTC from Gutim
                    and I loved the experiences even more
                  </p>
                </div>
                <div className="blog__details__pic">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <img src="https://i.imgur.com/axmam1d.jpg" alt="true" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <img src="https://i.imgur.com/wWBopqw.jpg" alt="true" />
                    </div>
                  </div>
                </div>
                <div className="blog__details__desc">
                  <h4>The Secret to improving</h4>
                  <p>
                    Keeping fit during your university years may not be at the
                    front of your mind, but by maintaining a healt="true"hy
                    body, you’re going to see some positive side effects
                    spilling into the rest of your uni life, from having better
                    concentration to having more energy to party.
                  </p>
                  <p>
                    Seriously, skip a session and get some rest. There will be
                    some days when taking a nap will have way more benefit to
                    you than putting in a hard session and feeling exhausted.
                    Exercise is supposed to energise and inspire.
                  </p>
                </div>
                <div className="blog__details__tags__share">
                  <p>
                    <span>Tags:</span> All, Trending, Fuel, Cardio, Life Style
                  </p>
                  <div className="blog__details__share">
                    <a href="www.facebook.com">
                      <span className="social_facebook" />
                    </a>
                    <a href="www.facebook.com">
                      <span className="social_instagram" />
                    </a>
                    <a href="www.facebook.com">
                      <span className="social_twitter" />
                    </a>
                    <a href="www.facebook.com">
                      <span className="social_linkedin" />
                    </a>
                  </div>
                </div>
                <div className="blog__details__author">
                  <div className="blog__details__author__pic">
                    <img src="https://i.imgur.com/dwrdrwd.png" alt="true" />
                  </div>
                  <div className="blog__details__author__text">
                    <h4>Grace Carter</h4>
                    <p>
                      The face of the moon was in shadow.The spectacle before us
                      was indeed sublime. All the their that dummy equipment and
                      instruments are alive.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <a href="#" className="blog__previous__btn">
                      <i className="fa fa-angle-left" />
                      <h6>6 Reasons to get rebounding</h6>
                      <span>Previous Post</span>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <a href="#" className="blog__next__btn">
                      <i className="fa fa-angle-right" />
                      <h6>Tips make cooking simple</h6>
                      <span>Previous Post</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Section End */}
      {/* Leave Comment Begin */}
    </div>
  );
}

export default BlogContent;
