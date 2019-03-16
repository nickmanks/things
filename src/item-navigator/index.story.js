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
  })
  .add('with selected item editor modal', ()=> {
    const store = storyStore({
      things: {items: testItems, selected: 'test-id-1'}
    });

    return (
      <Provider store={store}>
        <ItemNavigator store={store} />
      </Provider>
    );
  })
  .add('with 1/4 columns', ()=> {
    const store = storyStore({
      things: {
        items: {['test-id-1']: testItems['test-id-1']}
      }
    });

    return (
      <Provider store={store}>
        <ItemNavigator store={store} />
      </Provider>
    );
  })
  .add('with 2/4 columns', ()=> {
    const store = storyStore({
      things: {
        items: {
          ['test-id-1']: testItems['test-id-1'],
          ['test-id-2']: testItems['test-id-2']
        }
      }
    });

    return (
      <Provider store={store}>
        <ItemNavigator store={store} />
      </Provider>
    );
  })
  .add('with 3/4 columns', ()=> {
    const store = storyStore({
      things: {
        items: {
          ['test-id-1']: testItems['test-id-1'],
          ['test-id-2']: testItems['test-id-2'],
          ['test-id-3']: testItems['test-id-3']
        }
      }
    });

    return (
      <Provider store={store}>
        <ItemNavigator store={store} />
      </Provider>
    );
  })
  .add('with 4/4 columns', ()=> {
    const store = storyStore({
      things: {
        items: {
          ['test-id-1']: testItems['test-id-1'],
          ['test-id-2']: testItems['test-id-2'],
          ['test-id-3']: testItems['test-id-3'],
          ['test-id-4']: testItems['test-id-4']
        }
      }
    });

    return (
      <Provider store={store}>
        <ItemNavigator store={store} />
      </Provider>
    );
  });
