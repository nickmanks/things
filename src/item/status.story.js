/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import ItemStatus from './status';
import './theme.scss';


storiesOf('Simple/ItemStatus', module)
  .add('with ready status', ()=> (
    <ItemStatus
      status={'ready'}
      onUpdateStatus={()=> null}
    />
  ))
  .add('with in progress status', ()=> (
    <ItemStatus
      status={'in progress'}
      onUpdateStatus={()=> null}
    />
  ))
  .add('with done status', ()=> (
    <ItemStatus
      status={'done'}
      onUpdateStatus={()=> null}
    />
  ));
