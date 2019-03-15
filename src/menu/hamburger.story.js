/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Hamburger from './hamburger';
import 'hamburgers/dist/hamburgers.min.css';


storiesOf('Simple/Hamburger', module)
  .add('inactive hamburger', ()=> (
    <Hamburger isActive={false} />
  ))
  .add('active hamburger', ()=> (
    <Hamburger isActive={true} />
  ));
