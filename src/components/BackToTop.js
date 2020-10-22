import React from "react";
import ScrollUpButton from "react-scroll-up-button";
// import PropTypes from 'prop-types';

// BackToTop.propTypes = {

// };

function BackToTop(props) {
    return (
      <ScrollUpButton
        ShowAtPosition={150}
        ContainerClassName="back-to-top"
        TransitionClassName="back-to-top-trasition "
      >
        <div>
          <span className="symbol-btn-back-to-top">
            <i className="fas fa-arrow-up"></i>
          </span>
        </div>
      </ScrollUpButton>
    );
}

export default BackToTop;
