import React from 'react';
import {withCustomContainer, storyStore} from './helpers';


describe('withCustomBackground', ()=> {
  it('renders story with a custom background', ()=> {
    expect(withCustomContainer('white')(()=> <div>Dummy Story</div>))
      .toMatchElem(
        <div style={{backgroundColor: 'white'}}>
          <div>Dummy Story</div>
        </div>
      );
  });

  it('renders story with a red background', ()=> {
    expect(withCustomContainer('red')(()=> <div>Dummy Story</div>))
      .toMatchElem(
        <div style={{backgroundColor: 'red'}}>
          <div>Dummy Story</div>
        </div>
      );
  });
});

describe('storyStore', ()=> {
  it('returns an appropriate redux store', ()=> {
    const store = storyStore();
    expect(store).toHaveProperty('dispatch');
    expect(store).toHaveProperty('getState');
    expect(store).toHaveProperty('subscribe');
  });
});
