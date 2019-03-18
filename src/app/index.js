import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppBar from '../app-bar';
import ItemNavigator from '../item-navigator';
import ItemEditor from '../item-editor';
import PersistenceManager from '../persistence';
import ErrorNotification from '../error-notification';
import './theme.scss';


const App = ({loaded})=> (
  <Fragment>
    <AppBar />
    {loaded
      ? (
        <div className={'app-container'}>
          <ItemNavigator />
          <ItemEditor />
        </div>
      ): (
        <div className={'app-loading-spinner'}>
          <div className={'app-spinner'}></div>
        </div>
      )}
    <PersistenceManager />
    <ErrorNotification />
  </Fragment>
);
App.propTypes = {
  loaded: PropTypes.bool
};


const mapStateToProps = ({persistence})=> ({
  loaded: persistence.loaded
});

export default connect(mapStateToProps)(App);
