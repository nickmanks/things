import React from 'react';
import ItemHeader from './header';
import ItemBody from './body';
import ItemStatus from './status';
import Item from '.';
import {unwrappedShallow, testStore} from '../testing/helpers';
import testItems from '../testing/test-items';


describe('<Item />', ()=> {
  it('updates an items name when onNameChange is called', ()=> {
    const store = testStore({
      things: {items: {...testItems}}
    });
    const wrapper = unwrappedShallow(
      <Item store={store} item={testItems['test-id-1']} />
    );

    wrapper.find(ItemHeader).prop('onNameChange')('new name');

    expect(store.getState().things.items['test-id-1'].name).toBe('new name');
  });

  it('selects passed item when body is clicked', ()=> {
    const store = testStore({
      things: {items: {...testItems}}
    });
    const wrapper = unwrappedShallow(
      <Item store={store} item={testItems['test-id-1']} />
    );

    wrapper.find(ItemBody).prop('onEditItem')();

    expect(store.getState().things.selected).toBe('test-id-1');
  });

  it('updates an items status when onUpdateStatus is called', ()=> {
    const store = testStore({
      things: {items: {...testItems}}
    });
    const wrapper = unwrappedShallow(
      <Item store={store} item={testItems['test-id-1']} />
    );

    wrapper.find(ItemStatus).prop('onUpdateStatus')('new status');

    expect(
      store.getState().things.items['test-id-1'].status
    ).toBe('new status');
  });
});
