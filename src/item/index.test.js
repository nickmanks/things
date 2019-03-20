import React from 'react';
import {act} from 'react-test-renderer';
import {Card} from 'shards-react';
import ItemHeader from './header';
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

    act(()=> {
      wrapper.find(ItemHeader).prop('onNameChange')('new name');
    });

    jest.runAllTimers();

    expect(store.getState().things.items['test-id-1'].name).toBe('new name');
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

  it('calls onEditItem when card is clicked', ()=> {
    const store = testStore({
      things: {items: {...testItems}}
    });
    const wrapper = unwrappedShallow(
      <Item store={store} item={testItems['test-id-1']} />
    );

    wrapper.find(Card).prop('onClick')();

    expect(store.getState().things.selected).toBe('test-id-1');
  });
});
