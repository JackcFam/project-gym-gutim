import React, { useState, useEffect } from "react";
import BannerBlog from "./BannerBlog";
import Posts from "./Posts";
import Pagination from "./Pagination";
import queryString from "query-string";
import PostsFilterForm from './PostsFilterForm';
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

  function handleFilterChange(newFilter) {
    console.log('Filter changed:', newFilter);
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
                <PostsFilterForm onSubmit={handleFilterChange}></PostsFilterForm>
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
                      <img src="img/blog/br-1.jpg" alt />
                    </div>
                    <div className="blog__recent__item__text">
                      <h6>09 Kinds Of Vegetables Protect The Liver</h6>
                      <span>MAR 05, 2019</span>
                    </div>
                  </div>
                  <div className="blog__recent__item">
                    <div className="blog__recent__item__pic">
                      <img src="img/blog/br-2.jpg" alt />
                    </div>
                    <div className="blog__recent__item__text">
                      <h6>Tips You To Balance Nutrition Meal Day</h6>
                      <span>MAR 05, 2019</span>
                    </div>
                  </div>
                  <div className="blog__recent__item">
                    <div className="blog__recent__item__pic">
                      <img src="img/blog/br-3.jpg" alt />
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
                  <a href="#">Healthy Food</a>
                  <a href="#">Lifestyle</a>
                </div>
                <div className="blog__sidebar__comment">
                  <h4>Comment</h4>
                  <div className="classes__sidebar__comment">
                    <div className="classes__sidebar__comment__pic">
                      <img src="img/classes-details/comment-1.png" alt />
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
                      <img src="img/classes-details/comment-2.png" alt />
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
            {/* end thanh bar */}

            <div className="col-lg-8 order-lg-2 order-1">
              <div className="row">
                <Posts posts={blogs}></Posts>


                <Pagination totalRows={caculater} pagination={filters} onPageChange={handleClick}></Pagination>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </>
  );
}

export default Blog;
