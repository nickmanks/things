import React from 'react';
import {Badge} from 'shards-react';
import ItemStatus from './status';
import {unwrappedShallow} from '../testing/helpers';


describe('<ItemStatus />', ()=> {
  it('updates the ready status', ()=> {
    const updateFn = jest.fn();
    const wrapper = unwrappedShallow(
      <ItemStatus status={'ready'} onUpdateStatus={updateFn} />
    );

    wrapper.find(Badge)
      .findWhere((item)=> item.prop('theme') === 'danger')
      .prop('onClick')();

    expect(updateFn).toHaveBeenCalledWith('ready');
  });

  it('updates the in progress status', ()=> {
    const updateFn = jest.fn();
    const wrapper = unwrappedShallow(
      <ItemStatus status={'in progress'} onUpdateStatus={updateFn} />
    );

    wrapper.find(Badge)
      .findWhere((item)=> item.prop('theme') === 'warning')
      .prop('onClick')();

    expect(updateFn).toHaveBeenCalledWith('in progress');
  });

  it('updates the done status', ()=> {
    const updateFn = jest.fn();
    const wrapper = unwrappedShallow(
      <ItemStatus status={'done'} onUpdateStatus={updateFn} />
    );

    wrapper.find(Badge)
      .findWhere((item)=> item.prop('theme') === 'success')
      .prop('onClick')();

    expect(updateFn).toHaveBeenCalledWith('done');
  });
});
