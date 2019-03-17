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
    const evt = {
      stopPropagation: jest.fn()
    };

    wrapper.find(Badge)
      .findWhere((item)=> item.prop('theme') === 'danger')
      .prop('onClick')(evt);

    expect(evt.stopPropagation).toHaveBeenCalled();
    expect(updateFn).toHaveBeenCalledWith('ready');
  });

  it('updates the in progress status', ()=> {
    const updateFn = jest.fn();
    const wrapper = unwrappedShallow(
      <ItemStatus status={'in progress'} onUpdateStatus={updateFn} />
    );
    const evt = {
      stopPropagation: jest.fn()
    };

    wrapper.find(Badge)
      .findWhere((item)=> item.prop('theme') === 'warning')
      .prop('onClick')(evt);

    expect(evt.stopPropagation).toHaveBeenCalled();
    expect(updateFn).toHaveBeenCalledWith('in progress');
  });

  it('updates the done status', ()=> {
    const updateFn = jest.fn();
    const wrapper = unwrappedShallow(
      <ItemStatus status={'done'} onUpdateStatus={updateFn} />
    );
    const evt = {
      stopPropagation: jest.fn()
    };

    wrapper.find(Badge)
      .findWhere((item)=> item.prop('theme') === 'success')
      .prop('onClick')(evt);

    expect(evt.stopPropagation).toHaveBeenCalled();
    expect(updateFn).toHaveBeenCalledWith('done');
  });
});
