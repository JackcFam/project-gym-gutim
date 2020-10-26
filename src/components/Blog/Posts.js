import React from 'react';
import {Link} from 'react-router-dom';
function Posts(props) {
    return (
        <>
            {
                props.posts.map((post) => {
                    return (
                      <div className="col-lg-6 col-sm-6">
                        <div className="blog__item">
                          <div className="blog__item__pic">
                            <img src={post.anh} alt="true" />
                          </div>
                          <div className="blog__item__text">
                            <ul>
                              <li>
                                <i className="fa fa-calendar-o" /> May 4, 2019
                              </li>
                              <li>
                                <i className="fa fa-comment-o" /> 5
                              </li>
                            </ul>
                            <h5>
                                        <a href="#">{post.tieuDe}</a>
                            </h5>
                            <p>
                              Sed quia non numquam modi tempora indunt ut labore
                              et dolore magnam aliquam quaerat{" "}
                            </p>
                            <Link to={"/blog/" + post.slug} className="blog_read_more">
                              READ MORE <span className="arrow_right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                })
            }
        </>
    );
}

export default Posts;
