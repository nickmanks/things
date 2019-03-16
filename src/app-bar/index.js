import React from 'react';
import Brand from './brand';
import Search from './search';
import SortDropdown from './sort';
import './theme.scss';


const AppBar = ()=> (
  <header className={'app-bar-header'}>
    <div className={'app-flex-1'}>
      <Brand />
    </div>
    <div className={'app-flex-2'}>
      <Search />
    </div>
    <div className={'app-flex-1'}>
      <SortDropdown />
    </div>
  </header>
);

export default AppBar;
