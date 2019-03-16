/* global module */
import React from 'react';
import {Provider} from 'react-redux';
import {storiesOf} from '@storybook/react';
import {storyStore} from '../stories/helpers';
import ItemNavigator from '.';
import testItems from '../testing/test-items';


storiesOf('Connected/ItemNavigator', module)
  .add('with multiple items', ()=> {
    const store = storyStore({
      things: {items: testItems}
    });

    return (
      <Provider store={store}>
        <ItemNavigator store={store} />
      </Provider>
    );
  })
  .add('with no items', ()=> {
    const store = storyStore({
      things: {items: {}}
    });

    return (
      <Provider store={store}>
        <ItemNavigator store={store} />
      </Provider>
    );
  });
