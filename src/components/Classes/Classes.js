import React from "react";
import AddClass from "./AddClass";
import LichTap from './LichTap';
function Classes(props) {
  return (
    <div>
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb/classes-breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Lớp học</h2>
                <div className="breadcrumb-option">
                  <a href="./index.html">
                    <i className="fa fa-home" /> Trang chủ
                  </a>
                  <span>Lớp học</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AddClass></AddClass>

      <LichTap></LichTap>

    </div>
  );
}

export default Classes;
