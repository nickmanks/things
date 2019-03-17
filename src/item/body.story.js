/* global module */
import React from 'react';
import {storiesOf} from '@storybook/react';
import ItemBody from './body';
import './theme.scss';


storiesOf('Simple/ItemBody', module)
  .add('with description', ()=> (
    <ItemBody
      description={'This is a new description'}
    />
  ))
  .add('with category', ()=> (
    <ItemBody
      category={'Ingredients'}
    />
  ))
  .add('with due', ()=> (
    <ItemBody
      due={100000}
    />
  ))
  .add('with category and description', ()=> (
    <ItemBody
      category={'Ingredients'}
      description={'1x Tomato, 1x Onion'}
    />
  ))
  .add('with category, description and date', ()=> (
    <ItemBody
      category={'Ingredients'}
      description={'1x Tomato, 1x Onion'}
      due={100000}
    />
  ));
