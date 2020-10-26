import React from 'react';
function BannerBlog(props) {
    return (
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb/classes-breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Blog</h2>
                <div className="breadcrumb-option">
                  <a href="./index.html">
                    <i className="fa fa-home" /> Trang chủ
                  </a>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default BannerBlog;
