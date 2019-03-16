/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {storyStore} from '../stories/helpers';
import Search from './search';
import './theme.scss';


storiesOf('Connected/Search', module)
  .add('search bar', ()=> {
    const store = storyStore();

    return (<Search store={store} />);
  });
