import React from 'react';
import Search from './search';
import {FormInput} from 'shards-react';
import {unwrappedShallow, testStore} from '../testing/helpers';


describe('<Search />', ()=> {
  it('updates searchValue in store onChange', ()=> {
    const store = testStore();
    const wrapper = unwrappedShallow(<Search store={store} />);
    const evt = {
      target: {value: 'new search term'}
    };

    wrapper.find(FormInput).prop('onChange')(evt);

    expect(store.getState().things.searchValue).toBe('new search term');
  });

  it('reflects searchValue from store', ()=> {
    const store = testStore({
      things: {searchValue: 'some value'}
    });
    const wrapper = unwrappedShallow(<Search store={store} />);

    expect(wrapper.find(FormInput).prop('value')).toBe('some value');
  });
});
