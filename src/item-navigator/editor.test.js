import React from 'react';
import {FormInput, FormTextarea, Modal, Button} from 'shards-react';
import DatePicker from 'react-datepicker';
import EditorModal from './editor';
import {unwrappedShallow, testStore} from '../testing/helpers';
import testItems from '../testing/test-items';


describe('<EditoModal />', ()=> {
  it('updates the selected item category on change', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-1'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);
    const evt = {
      target: {value: 'new category'}
    };

    wrapper.find(FormInput).prop('onChange')(evt);

    const {items} = store.getState().things;

    expect(items['test-id-1'].category).toBe('new category');
  });

  it('updates the selected item description on change', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-1'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);
    const evt = {
      target: {value: 'new description'}
    };

    wrapper.find(FormTextarea).prop('onChange')(evt);

    const {items} = store.getState().things;

    expect(items['test-id-1'].description).toBe('new description');
  });

  it('sets selected to null when the modal is toggled', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-1'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);

    wrapper.find(Modal).prop('toggle')();

    expect(store.getState().things.selected).toBe(null);
  });

  it('archives an item if its not archived and button clicked', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-1'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);

    wrapper.find(Button)
      .findWhere((button)=> button.prop('id') === 'archive')
      .prop('onClick')();

    expect(store.getState().things.items['test-id-1'].archived).toBe(true);
  });

  it('restores an item if its archived and button clicked', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-5'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);

    wrapper.find(Button)
      .findWhere((button)=> button.prop('id') === 'restore')
      .prop('onClick')();

    expect(store.getState().things.items['test-id-5'].archived).toBe(false);
  });

  it('closes the modal when done button is clicked', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-5'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);

    wrapper.find(Button)
      .findWhere((button)=> button.prop('id') === 'done')
      .prop('onClick')();

    expect(store.getState().things.selected).toBe(null);
  });

  it('updates the selected items due date on date change', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-5'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);
    const date = {
      getTime: jest.fn(()=> 100)
    };

    wrapper.find(DatePicker).prop('onChange')(date);

    expect(date.getTime).toHaveBeenCalled();
    expect(store.getState().things.items['test-id-5'].due).toBe(100);
  });
});
