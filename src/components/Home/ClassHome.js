import React from 'react';
import {Link} from 'react-router-dom';
import SlickHome from "./SlickHome";

function ClassHome(props) {
    return (
      <>
        <section className="classes-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Các lớp tập luyện</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <SlickHome></SlickHome>
                <div className="can-giua">
                  <Link to="/classes" className="primary-btn">
                    Tìm hiểu thêm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default ClassHome;
