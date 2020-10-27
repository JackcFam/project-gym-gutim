import React, { useState, useEffect } from "react";
import BannerBlog from "./BannerBlog";
import Posts from "./Posts";
import Pagination from "./Pagination";
import queryString from "query-string";
import PostsFilterForm from './PostsFilterForm';
import BackToTop from "../BackToTop";
import {Link} from "react-router-dom";
function Blog(props) {
  const [blogs, setBlogs] = useState([]);
  const [caculater, setCaculater] = useState([]);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 6,
  });
  useEffect(() => {
    async function getBlogs() {
      try {
        const pramsquery = queryString.stringify(filters);
        const responseUrl =
          "https://api-webdata.herokuapp.com/topnews?" + pramsquery;
        const response = await fetch(responseUrl);
        const responseJSON = await response.json();
        setBlogs(responseJSON);
      } catch (error) {
        console.log("Loi Api Blog:", error.message);
      }
    }
    getBlogs();
  }, [filters]);
  useEffect(() => {
    async function getCaculater() {
      try {
        const responseUrl =
          "https://api-webdata.herokuapp.com/topnews";
        const response = await fetch(responseUrl);
        const responseJSON = await response.json();
        setCaculater(responseJSON);
      } catch (error) {
        console.log("Loi Api Blog:", error.message);
      }
    }
    getCaculater();
  }, []);



  function handleClick(newPage) {
    console.log('New page:', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }



  function TagFilter(newItem) {
    setFilters({
      _page: 1,
      tag_like: newItem,
    })
  }
function Categories(newItem) {
  setFilters({
    // ...filters,
    _page: 1,
    danhMuc_like: newItem,
  });
}

function handleFilterChange(newFilter) {
  console.log("Filter changed:", newFilter);
  setFilters({
    ...filters,
    _page: 1,
    tieuDe_like: newFilter.searchTerm,
  });
}

  return (
    <>
      <BannerBlog></BannerBlog>

      {/* blog section */}

      <section className="blog spad">
        <div className="container">
          <div className="row">
            {/* thanh bar */}
            <div className="col-lg-4 order-lg-1 order-2">
              <div className="blog__sidebar">
                <PostsFilterForm
                  onSubmit={handleFilterChange}
                ></PostsFilterForm>
                <div className="blog__sidebar__categories">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="#" onClick={() => Categories("Fuel")}>
                        Fuel (4)
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => Categories("Sweat")}>
                        Sweat (2)
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => Categories("Play")}>
                        Play (3)
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => Categories("Live")}>
                        Live (6)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog__sidebar__recent">
                  <h4>Bài Viết Mới</h4>
                  <Link
                    to={"/blog/nhung-the-vo-tu-ve-danh-cho-con-gai-phong-than"}
                    className="blog__recent__item"
                    style={{ display: "inline-block" }}
                  >
                    <div className="blog__recent__item__pic">
                      <img src="https://i.imgur.com/yCaLaTZ.jpg" alt="true" />
                    </div>
                    <div className="blog__recent__item__text">
                      <h6>Những thế võ tự vệ dành cho con gái phòng thân</h6>
                      <span>April 10, 2020</span>
                    </div>
                  </Link>
                  <Link
                    to={"/blog/bi-quyet-thanh-cong-thoat-gay-nhanh-chong"}
                    className="blog__recent__item"
                    style={{ display: "inline-block" }}
                  >
                    <div className="blog__recent__item__pic">
                      <img src="https://i.imgur.com/i6Ps0xo.jpg" alt="true" />
                    </div>
                    <div className="blog__recent__item__text">
                      <h6>Bí quyết thành công thoát gầy nhanh chóng</h6>
                      <span>November 05, 2020</span>
                    </div>
                    
                  </Link>
                  <Link
                    to={"/blog/an-gi-de-co-bung-6-mui"}
                    className="blog__recent__item"
                    style={{ display: "inline-block" }}
                  >
                    <div className="blog__recent__item__pic">
                      <img src="https://i.imgur.com/DLh1jSN.jpg" alt="true" />
                    </div>
                    <div className="blog__recent__item__text">
                      <h6>Ăn gì để có cơ bụng 6 múi</h6>
                      <span>MAR 05, 2020</span>
                    </div>
                  </Link>
                </div>
                <div className="blog__sidebar__tags">
                  <h4>Search By Tags</h4>
                  <a href="#" onClick={() => TagFilter("Weight")}>
                    Weight
                  </a>
                  <a href="#" onClick={() => TagFilter("Beauty")}>
                    Beauty
                  </a>
                  <a href="#" onClick={() => TagFilter("YogaBall")}>
                    Yoga Ball
                  </a>
                  <a href="#" onClick={() => TagFilter("Fruit")}>
                    Fruit
                  </a>
                  <a href="#" onClick={() => TagFilter("HealthyFood")}>
                    Healthy Food
                  </a>
                  <a href="#" onClick={() => TagFilter("Lifestyle")}>
                    Lifestyle
                  </a>
                </div>
              </div>
            </div>
            {/* end thanh bar */}

            <div className="col-lg-8 order-lg-2 order-1">
              <div className="row">
                <Posts posts={blogs}></Posts>

                <Pagination
                  totalRows={caculater}
                  pagination={filters}
                  onPageChange={handleClick}
                ></Pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
      <BackToTop></BackToTop>
    </>
  );
}

export default Blog;
