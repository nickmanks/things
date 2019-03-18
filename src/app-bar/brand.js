import React from 'react';
import PropTypes from 'prop-types';
import './theme.scss';
import logo from '../favicon.png';


const Brand = ({mobile})=> (
  <a className={'app-bar-logo'}>
    <img
      className={mobile ? 'app-bar-logo-img-mobile' : 'app-bar-logo-img'}
      src={logo}
    />
    {!mobile && <h4 className={'app-bar-logo-name'}> things </h4>}
  </a>
);
Brand.propTypes = {
  mobile: PropTypes.bool
};


export default Brand;
