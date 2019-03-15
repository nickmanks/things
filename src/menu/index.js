import React from 'react';
import {slide as BurgerMenu} from 'react-burger-menu';
import './theme.scss';

const Menu = ()=> (
  <BurgerMenu customBurgerIcon={false}>
    <a id="dashboard" className="menu-item" href="/">Home</a>
    <a id="tasks" className="menu-item" href="/about">About</a>
  </BurgerMenu>
);

export default Menu;
