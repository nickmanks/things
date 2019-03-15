import React from 'react';
import PropTypes from 'prop-types';


const Hamburger = ({isActive})=> (
  <button
    className={`hamburger hamburger--squeeze${isActive ? ' is-active' : ''}`}
    type="button"
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
);
Hamburger.propTypes = {
  isActive: PropTypes.bool
};

export default Hamburger;
