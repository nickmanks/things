/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {storyStore} from '../stories/helpers';
import ErrorNotification from '.';


storiesOf('Connected/ErrorNotification', module)
  .add('with no errors', ()=> {
    const store = storyStore({
      persistence: {
        loaded: true,
        queued: [],
        processing: [],
        done: [],
        errors: []
      }
    });

    return (<ErrorNotification store={store} />);
  })
  .add('with errors', ()=> {
    const store = storyStore({
      persistence: {
        loaded: true,
        queued: [],
        processing: [],
        done: [],
        errors: ['error']
      }
    });

    return (<ErrorNotification store={store} />);
  });
