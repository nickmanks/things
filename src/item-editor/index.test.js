import React from 'react';
import {Modal} from 'shards-react';
import EditorModal from '.';
import EditorInputs from './inputs';
import EditorButtons from './buttons';
import {unwrappedShallow, testStore} from '../testing/helpers';
import testItems from '../testing/test-items';


describe('<EditorModal />', ()=> {
  it('closes the modal when modal toggle is called', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-1'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);

    wrapper.find(Modal).prop('toggle')();

    expect(store.getState().things.selected).toBe(null);
  });

  it('updates selected item due date when onDateChange is called', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-1'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);
    const date = {
      getTime: jest.fn(()=> 'some new time')
    };

    wrapper.find(EditorInputs)
      .prop('onDateChange')(testItems['test-id-1'], date);

    expect(
      store.getState().things.items['test-id-1'].due
    ).toEqual('some new time');
  });

  it('updates selected item category when onCategoryChange is called', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-1'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);

    wrapper.find(EditorInputs)
      .prop('onCategoryChange')(testItems['test-id-1'], 'some new category');

    expect(
      store.getState().things.items['test-id-1'].category
    ).toEqual('some new category');
  });

  it(
    'updates selected item description when onDescriptionChange is called',
    ()=> {
      const store = testStore({
        things: {items: testItems, selected: 'test-id-1'}
      });
      const wrapper = unwrappedShallow(<EditorModal store={store} />);

      wrapper.find(EditorInputs)
        .prop('onDescriptionChange')(
          testItems['test-id-1'], 'some new description'
        );

      expect(
        store.getState().things.items['test-id-1'].description
      ).toEqual('some new description');
    });

  it('closes the modal when called from editor buttons', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-1'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);

    wrapper.find(EditorButtons).prop('onCloseModal')();

    expect(store.getState().things.selected).toBe(null);
  });

  it('archives the selected item when called from editor buttons', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-1'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);

    wrapper.find(EditorButtons).prop('onArchive')(testItems['test-id-1'], true);

    expect(
      store.getState().things.items['test-id-1'].archived
    ).toBe(true);
  });

  it('deletes the selected item when delete button is clicked', ()=> {
    const store = testStore({
      things: {items: testItems, selected: 'test-id-1'}
    });
    const wrapper = unwrappedShallow(<EditorModal store={store} />);

    wrapper.find(EditorButtons).prop('onDelete')(testItems['test-id-1']);

    expect(
      store.getState().things.items['test-id-1']
    ).toBe(undefined);
  });
});
