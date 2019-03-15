import React, {Fragment} from 'react';
import AppBar from '../app-bar';
import ItemNavigator from '../item-navigator';
import './theme.scss';


const App = ()=> (
  <Fragment>
    <AppBar />
    <div className={'app-container'}>
      <ItemNavigator />
    </div>
  </Fragment>
);

export default App;
