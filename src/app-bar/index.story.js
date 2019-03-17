/* global module */
import React from 'react';
import {Provider} from 'react-redux';
import {storiesOf} from '@storybook/react';
import {storyStore} from '../stories/helpers';
import AppBar from '.';
import testItems from '../testing/test-items';
import './theme.scss';


storiesOf('Simple/AppBar', module)
  .add('full app bar', ()=> {
    const store = storyStore();

    return (
      <Provider store={store}>
        <AppBar store={store} />
      </Provider>
    );
  })
  .add('with test items (1 archived)', ()=> {
    const store = storyStore({
      things: {items: testItems}
    });

    return (
      <Provider store={store}>
        <AppBar store={store} />
      </Provider>
    );
  });
