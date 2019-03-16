/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {storyStore} from '../stories/helpers';
import Item from '.';
import './theme.scss';


storiesOf('Connected/Item', module)
  .add('with in ready item', ()=> {
    const store = storyStore();

    return (
      <Item
        item={{
          name: 'Buy Groceries',
          category: 'Ingredients',
          description: '1x Tomato, 1x Onion, 1x Spaghetti',
          status: 'ready',
          created: '3h'
        }}

        store={store}
      />
    );
  })
  .add('with in progress item', ()=> {
    const store = storyStore();

    return (
      <Item
        item={{
          name: 'Buy Groceries',
          category: 'Ingredients',
          description: '1x Tomato, 1x Onion, 1x Spaghetti',
          status: 'in progress',
          created: '3h'
        }}

        store={store}
      />
    );
  })
  .add('with done item', ()=> {
    const store = storyStore();

    return (
      <Item
        item={{
          name: 'Buy Groceries',
          category: 'Ingredients',
          description: '1x Tomato, 1x Onion, 1x Spaghetti',
          status: 'done',
          created: '3h'
        }}

        store={store}
      />
    );
  });
