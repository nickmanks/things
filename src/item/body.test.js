import React from 'react';
import {CardBody} from 'shards-react';
import ItemBody from './body';
import {unwrappedShallow} from '../testing/helpers';


describe('<ItemBody />', ()=> {
  it('calls onEditItem when clicked', ()=> {
    const editFn = jest.fn();
    const wrapper = unwrappedShallow(<ItemBody onEditItem={editFn} />);

    wrapper.find(CardBody).prop('onClick')();

    expect(editFn).toHaveBeenCalled();
  });
});
