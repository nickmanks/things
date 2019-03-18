/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import ItemHeader from './header';
import './theme.scss';


storiesOf('Simple/ItemHeader', module)
  .add('with name', ()=> (
    <ItemHeader
      name={'Thing to do!'}
      onNameChange={()=> null}
    />
  ))
  .add('with created', ()=> (
    <ItemHeader
      created={10000}
      onNameChange={()=> null}
    />
  ))
  .add('with name and created', ()=> (
    <ItemHeader
      name={'Thing to do!'}
      created={10000}
      onNameChange={()=> null}
    />
  ));
