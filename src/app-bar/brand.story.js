/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import Brand from './brand';


storiesOf('Simple/Brand', module)
  .add('things logo and name', ()=> (
    <Brand />
  ))
  .add('mobile logo and name', ()=> (
    <Brand mobile={true} />
  ));
