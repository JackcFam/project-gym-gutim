import React from "react";
import ProductList from "./ProductList";


function Gallery() {

  return (
    <>
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb/classes-breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Gallery</h2>
                <div className="breadcrumb-option">
                  <a href="./index.html">
                    <i className="fa fa-home" /> Home
                  </a>
                  <span>Gallery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductList></ProductList>

      {/* <div className="gallery-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="gallery-controls">
                <li className="active" data-filter=".all">
                  all gallery
                </li>
                <li data-filter=".fitness">fitness</li>
                <li data-filter=".coaching">coaching</li>
                <li data-filter=".event">event</li>
                <li data-filter=".other">other</li>
              </ul>
            </div>
          </div>
          <div className="row gallery-filter">
            <div className="col-lg-6 mix all fitness">
              <img src="https://i.imgur.com/WEJjGmY.jpg" alt="true" />
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 mix all fitness coaching">
                  <img src="https://i.imgur.com/84CWvdr.jpg" alt="true" />
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12 mix all coaching">
                      <img src="https://i.imgur.com/m3r6WL6.jpg" alt="true" />
                    </div>
                    <div className="col-lg-12 mix all coaching">
                      <img src="https://i.imgur.com/qZwtjPD.jpg" alt="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 mix all other">
                  <img src="https://i.imgur.com/R3EvzA3.jpg" alt="true" />
                </div>
                <div className="col-lg-6 mix all other">
                  <img src="https://i.imgur.com/OahpWLi.jpg" alt="true" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mix all event">
              <img src="https://i.imgur.com/w2QOwnM.jpg" alt="true" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Gallery;
