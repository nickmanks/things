import React from 'react';
import {FormInput, FormTextarea, Modal} from 'shards-react';
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
});
