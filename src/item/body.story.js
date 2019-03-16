/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import ItemBody from './body';
import './theme.scss';


storiesOf('Simple/ItemBody', module)
  .add('with description', ()=> (
    <ItemBody
      description={'This is a new description'}
      onEditItem={()=> null}
    />
  ))
  .add('with category', ()=> (
    <ItemBody
      category={'Ingredients'}
      onEditItem={()=> null}
    />
  ))
  .add('with category and description', ()=> (
    <ItemBody
      category={'Ingredients'}
      description={'1x Tomato, 1x Onion'}
      onEditItem={()=> null}
    />
  ));
