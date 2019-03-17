import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './theme.scss';


export function withCustomContainer(backgroundColor) {
  const CustomContainer = (story)=> (
    <div className={'story-container'} style={{backgroundColor}}>
      {story()}
    </div>
  );
  CustomContainer.displayName = 'CustomContainer';
  return CustomContainer;
}

export const storyStore =
  (state)=> createStore(reducers, state, applyMiddleware(thunk));
