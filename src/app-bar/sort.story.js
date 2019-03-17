/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {storyStore} from '../stories/helpers';
import Sort, {CheckBox} from './sort';
import './theme.scss';


storiesOf('Connected/Sort', module)
  .add('open with no sort', ()=> {
    const store = storyStore({
      things: {
        sortType: null,
        sortOpen: true
      }
    });

    return (<Sort store={store} />);
  })
  .add('open with sort newest', ()=> {
    const store = storyStore({
      things: {
        sortType: 'newest',
        sortOpen: true
      }
    });

    return (<Sort store={store} />);
  })
  .add('open with sort oldest', ()=> {
    const store = storyStore({
      things: {
        sortType: 'oldest',
        sortOpen: true
      }
    });

    return (<Sort store={store} />);
  })
  .add('open with sort status', ()=> {
    const store = storyStore({
      things: {
        sortType: 'status',
        sortOpen: true
      }
    });

    return (<Sort store={store} />);
  })
  .add('open with sort due', ()=> {
    const store = storyStore({
      things: {
        sortType: 'due',
        sortOpen: true
      }
    });

    return (<Sort store={store} />);
  })
  .add('open with sort archived', ()=> {
    const store = storyStore({
      things: {
        sortType: 'archived',
        sortOpen: true
      }
    });

    return (<Sort store={store} />);
  })
  .add('sort checkbox', ()=> (<CheckBox show={true} />));
