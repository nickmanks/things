import React, {Fragment} from 'react';
import AppBar from '../app-bar';
import ItemNavigator from '../item-navigator';
import PersistenceManager from '../persistence';
import './theme.scss';


const App = ()=> (
  <Fragment>
    <AppBar />
    <div className={'app-container'}>
      <ItemNavigator />
    </div>
    <PersistenceManager />
  </Fragment>
);

export default App;
