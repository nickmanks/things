import React from 'react';
import {Badge} from 'shards-react';
import ItemStatus from './status';
import {unwrappedShallow} from '../testing/helpers';


describe('<ItemStatus />', ()=> {
  it('updates the pending status', ()=> {
    const updateFn = jest.fn();
    const wrapper = unwrappedShallow(
      <ItemStatus status={'pending'} onUpdateStatus={updateFn} />
    );
    const evt = {
      stopPropagation: jest.fn()
    };

    wrapper.find(Badge)
      .findWhere((item)=> item.prop('theme') === 'danger')
      .prop('onClick')(evt);

    expect(evt.stopPropagation).toHaveBeenCalled();
    expect(updateFn).toHaveBeenCalledWith('pending');
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
