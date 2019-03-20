/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import ItemStatus from './status';
import './theme.scss';


storiesOf('Simple/ItemStatus', module)
  .add('with pending status', ()=> (
    <ItemStatus
      status={'pending'}
      onUpdateStatus={()=> null}
    />
  ))
  .add('with done status', ()=> (
    <ItemStatus
      status={'done'}
      onUpdateStatus={()=> null}
    />
  ));
