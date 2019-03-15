import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import './theme.scss';
import theme from './theme.scss';

export function withCustomContainer(backgroundColor) {
  const CustomContainer = (story)=> (
    <div className={theme.container} style={{backgroundColor}}>
      {story()}
    </div>
  );
  CustomContainer.displayName = 'CustomContainer';
  return CustomContainer;
}

export const storyStore =
  (state)=> createStore(reducers, state, applyMiddleware(thunk));
