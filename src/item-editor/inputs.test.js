import React from 'react';
import {FormInput, FormTextarea} from 'shards-react';
import DatePicker from 'react-datepicker';
import EditorInputs from './inputs';
import {unwrappedShallow} from '../testing/helpers';
import testItems from '../testing/test-items';


describe('<EditorInputs />', ()=> {
  it('calls onDateChange when date changes', ()=> {
    const dateFn = jest.fn();
    const wrapper = unwrappedShallow(
      <EditorInputs
        selected={testItems['test-id-1']}
        onDateChange={dateFn}
      />
    );

    wrapper.find(DatePicker).prop('onChange')('some new date');

    expect(dateFn).toHaveBeenCalledWith(
      testItems['test-id-1'], 'some new date'
    );
  });

  it('calls onCategoryChange when category input changes', ()=> {
    const categoryFn = jest.fn();
    const wrapper = unwrappedShallow(
      <EditorInputs
        selected={testItems['test-id-1']}
        onCategoryChange={categoryFn}
      />
    );
    const evt = {
      target: {value: 'some new category'}
    };

    wrapper.find(FormInput).prop('onChange')(evt);

    expect(categoryFn).toHaveBeenCalledWith(
      testItems['test-id-1'], 'some new category'
    );
  });

  it('calls onDescriptionChange when description changes', ()=> {
    const descriptionFn = jest.fn();
    const wrapper = unwrappedShallow(
      <EditorInputs
        selected={testItems['test-id-1']}
        onDescriptionChange={descriptionFn}
      />
    );
    const evt = {
      target: {value: 'some new description'}
    };

    wrapper.find(FormTextarea).prop('onChange')(evt);

    expect(descriptionFn).toHaveBeenCalledWith(
      testItems['test-id-1'], 'some new description'
    );
  });
});
