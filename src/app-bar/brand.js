import React from 'react';
import './theme.scss';
import logo from '../favicon.png';


const Brand = ()=> (
  <a className={'app-bar-logo'}>
    <img className={'app-bar-logo-img'} src={logo} />
    <h4 className={'app-bar-logo-name'}> things </h4>
  </a>
);

export default Brand;
