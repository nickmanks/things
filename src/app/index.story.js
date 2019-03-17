/* global module */
import React from 'react';
import {Provider} from 'react-redux';
import {storiesOf} from '@storybook/react';
import {storyStore} from '../stories/helpers';
import App from '.';
import testItems from '../testing/test-items';


storiesOf('Connected/App', module)
  .add('with multiple items', ()=> {
    const store = storyStore({
      things: {items: testItems}
    });

    return (
      <Provider store={store}>
        <App store={store} />
      </Provider>
    );
  });
