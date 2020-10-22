import React  from "react";
import '../css/font-awesome.min.css';
import {
  NavLink
} from "react-router-dom";

// import PropTypes from 'prop-types';

// Menu.propTypes = {

// };

function Menu(props) {
  return (
    <header className="header-section">
      <div className="container">
        <input type="checkbox" id="chk" />
        <label htmlFor="chk" className="show-menu-btn">
          <i className="fa fa-bars" aria-hidden="true" />
        </label>

        <div className="logo">
          <NavLink to="./">
            <img src="https://i.imgur.com/GnEMupR.png" alt="logo" />
          </NavLink>
        </div>

        <div className="nav-menu">
          <nav className="mainmenu">
            <ul>
              <li>
                <NavLink activeClassName="active" exact to="./">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="./about">Về chúng tôi</NavLink>
              </li>
              <li>
                <NavLink to="./classes">Lớp học</NavLink>
              </li>
              <li>
                <NavLink to="./pricing">Dịch vụ</NavLink>
              </li>
              <li>
                <NavLink to="./blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="./contact">Liên hệ</NavLink>
              </li>
            </ul>
          </nav>
          <a href="/contact" className="primary-btn signup-btn">
            <span className="svg-wrapper">
              <svg
                style={{ height: "40", width: "160" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="shape"
                  style={{ height: "40", width: "160" }}
                ></rect>
              </svg>
              <span className="text">ĐĂNG KÝ TẬP THỬ</span>
            </span>
          </a>

          <label htmlFor="chk" className="hide-menu-btn">
                <i className="fa fa-times" aria-hidden="true" />
          </label>
        </div>

      </div>
    </header>
  );
}

export default Menu;
