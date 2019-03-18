import React from 'react';
import {Dropdown, DropdownItem} from 'shards-react';
import Sort from './sort';
import {unwrappedShallow, testStore} from '../testing/helpers';


// eslint-disable-next-line max-statements
describe('<Sort />', ()=> {
  it('reflects open state from store', ()=> {
    const store = testStore({
      things: {sortOpen: true}
    });

    const wrapper = unwrappedShallow(<Sort store={store} />);

    expect(wrapper.find(Dropdown).prop('open')).toBe(true);
  });

  it('updates open state on toggle', ()=> {
    const store = testStore({
      things: {sortOpen: true}
    });
    const wrapper = unwrappedShallow(<Sort store={store} />);
    wrapper.find(Dropdown).prop('toggle')();

    expect(store.getState().things.sortOpen).toBe(false);
  });

  it('sets sort state newest if already set to null and newest clicked', ()=> {
    const store = testStore({
      things: {sortOpen: true, sortType: null}
    });
    const wrapper = unwrappedShallow(<Sort store={store} />);

    wrapper.find(DropdownItem)
      .findWhere((item)=> item.prop('id') === 'newest')
      .prop('onClick')();

    expect(store.getState().things.sortType).toBe('newest');
  });

  it('sets sort state oldest if already set to null and oldest clicked', ()=> {
    const store = testStore({
      things: {sortOpen: true, sortType: null}
    });
    const wrapper = unwrappedShallow(<Sort store={store} />);

    wrapper.find(DropdownItem)
      .findWhere((item)=> item.prop('id') === 'oldest')
      .prop('onClick')();

    expect(store.getState().things.sortType).toBe('oldest');
  });

  it('sets sort state status if already set to null and status clicked', ()=> {
    const store = testStore({
      things: {sortOpen: true, sortType: null}
    });
    const wrapper = unwrappedShallow(<Sort store={store} />);

    wrapper.find(DropdownItem)
      .findWhere((item)=> item.prop('id') === 'status')
      .prop('onClick')();

    expect(store.getState().things.sortType).toBe('status');
  });

  it('sets sort state due if already set to null and due clicked', ()=> {
    const store = testStore({
      things: {sortOpen: true, sortType: null}
    });
    const wrapper = unwrappedShallow(<Sort store={store} />);

    wrapper.find(DropdownItem)
      .findWhere((item)=> item.prop('id') === 'due')
      .prop('onClick')();

    expect(store.getState().things.sortType).toBe('due');
  });

  it(
    'sets sort state archived if already set to null and archived clicked',
    ()=> {
      const store = testStore({
        things: {sortOpen: true, sortType: null}
      });
      const wrapper = unwrappedShallow(<Sort store={store} />);

      wrapper.find(DropdownItem)
        .findWhere((item)=> item.prop('id') === 'archived')
        .prop('onClick')();

      expect(store.getState().things.sortType).toBe('archived');
    });

  it('sets sort state null if already set to newest and newest clicked', ()=> {
    const store = testStore({
      things: {sortOpen: true, sortType: 'newest'}
    });
    const wrapper = unwrappedShallow(<Sort store={store} />);

    wrapper.find(DropdownItem)
      .findWhere((item)=> item.prop('id') === 'newest')
      .prop('onClick')();

    expect(store.getState().things.sortType).toBe(null);
  });

  it('sets sort state null if already set to oldest and oldest clicked', ()=> {
    const store = testStore({
      things: {sortOpen: true, sortType: 'oldest'}
    });
    const wrapper = unwrappedShallow(<Sort store={store} />);

    wrapper.find(DropdownItem)
      .findWhere((item)=> item.prop('id') === 'oldest')
      .prop('onClick')();

    expect(store.getState().things.sortType).toBe(null);
  });

  it('sets sort state null if already set to status and status clicked', ()=> {
    const store = testStore({
      things: {sortOpen: true, sortType: 'status'}
    });
    const wrapper = unwrappedShallow(<Sort store={store} />);

    wrapper.find(DropdownItem)
      .findWhere((item)=> item.prop('id') === 'status')
      .prop('onClick')();

    expect(store.getState().things.sortType).toBe(null);
  });

  it('sets sort state null if already set to due and due clicked', ()=> {
    const store = testStore({
      things: {sortOpen: true, sortType: 'due'}
    });
    const wrapper = unwrappedShallow(<Sort store={store} />);

    wrapper.find(DropdownItem)
      .findWhere((item)=> item.prop('id') === 'due')
      .prop('onClick')();

    expect(store.getState().things.sortType).toBe(null);
  });

  it(
    'sets sort state null if already set to archived and archived clicked',
    ()=> {
      const store = testStore({
        things: {sortOpen: true, sortType: 'archived'}
      });
      const wrapper = unwrappedShallow(<Sort store={store} />);

      wrapper.find(DropdownItem)
        .findWhere((item)=> item.prop('id') === 'archived')
        .prop('onClick')();

      expect(store.getState().things.sortType).toBe(null);
    });
});
