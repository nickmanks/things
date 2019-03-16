/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import AppBar from '.';
import './theme.scss';


storiesOf('Simple/AppBar', module)
  .add('full app bar', ()=> (
    <AppBar />
  ));
