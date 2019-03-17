import React from 'react';
import {FormInput} from 'shards-react';
import ItemHeader from './header';
import {unwrappedShallow} from '../testing/helpers';


describe('<ItemHeader />', ()=> {
  it('calls onNameChange when input changes', ()=> {
    const onChange = jest.fn();
    const wrapper = unwrappedShallow(<ItemHeader onNameChange={onChange} />);
    const evt = {
      target: {value: 'some change'}
    };

    wrapper.find(FormInput).prop('onChange')(evt);

    expect(onChange).toHaveBeenCalledWith('some change');
  });

  it('stops event propagation on click', ()=> {
    const onChange = jest.fn();
    const wrapper = unwrappedShallow(<ItemHeader onNameChange={onChange} />);
    const evt = {
      stopPropagation: jest.fn()
    };

    wrapper.find(FormInput).prop('onClick')(evt);

    expect(evt.stopPropagation).toHaveBeenCalled();
  });
});
