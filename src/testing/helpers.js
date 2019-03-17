import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {shallow} from 'enzyme';
import reducers from '../reducers';

/* eslint-env jest */

export const keys = {
  ESC: 27,
  UP: 38,
  DOWN: 40,
  ENTER: 13
};

export function unwrappedShallow(cmp, options) {
  //  Docs on shallow() here:
  //  http://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html

  //  Check here if we have a "connected" (e.g. - Redux) component. If we
  //  do, then we unwrapp it and then return its shallow representation.
  const shallowOptions = options || {context: {}};
  return (cmp.type && cmp.type.WrappedComponent
    ? shallow(cmp, shallowOptions).shallow(shallowOptions)
    : shallow(cmp, shallowOptions)
  );
}

export function event() {
  let resolver = null;

  const promise = new Promise((resolve)=> {
    resolver = resolve;
  });
  promise.fire = ()=> resolver();

  return promise;
}

const storySpies = new WeakMap();

export const testStore = (state={}, middlewares=[])=> {
  const capture = jest.fn();

  const store = createStore(
    reducers,
    state,
    applyMiddleware(
      thunkMiddleware,
      ...middlewares,
      ()=> (next)=> (action)=> {
        capture(action);
        store.nextDispatch.fire();
        store.nextDispatch = event();
        return next(action);
      }
    )
  );
  store.nextDispatch = event();
  store.dispatchSpy = capture;

  storySpies.set(store, capture);
  return store;
};
