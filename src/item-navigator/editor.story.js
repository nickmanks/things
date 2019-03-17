/* global module */
import React from 'react';
import {Provider} from 'react-redux';
import {storiesOf} from '@storybook/react';
import {storyStore} from '../stories/helpers';
import EditorModal from './editor';
import testItems from '../testing/test-items';


storiesOf('Connected/EditorModal', module)
  .add('with selected item', ()=> {
    const store = storyStore({
      things: {items: testItems, selected: 'test-id-1'}
    });

    return (
      <Provider store={store}>
        <EditorModal store={store} />
      </Provider>
    );
  })
  .add('with selected archived item', ()=> {
    const store = storyStore({
      things: {items: testItems, selected: 'test-id-5'}
    });

    return (
      <Provider store={store}>
        <EditorModal store={store} />
      </Provider>
    );
  })
  .add('with no selected item', ()=> {
    const store = storyStore({
      things: {items: testItems, selected: null}
    });

    return (
      <Provider store={store}>
        <EditorModal store={store} />
      </Provider>
    );
  });
