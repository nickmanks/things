/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {storyStore} from '../stories/helpers';
import OutlineItem from './outline';
import './theme.scss';


storiesOf('Connected/OutlineItem', module)
  .add('with New Thing button', ()=> {
    const store = storyStore();

    return (<OutlineItem store={store} />);
  });
