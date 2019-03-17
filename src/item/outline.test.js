import React from 'react';
import {Button} from 'shards-react';
import OutlineItem from './outline';
import {unwrappedShallow, testStore} from '../testing/helpers';


jest.mock('uuid/v4', ()=> ()=> 'test-id');
jest.mock('../utils/dates', ()=> ({
  now: ()=> ({
    getTime: ()=> 100
  })
}));


describe('<OutlineItem />', ()=> {
  it('creates a new item when "New Thing" button clicked', ()=> {
    const store = testStore();
    const wrapper = unwrappedShallow(<OutlineItem store={store} />);

    wrapper.find(Button).prop('onClick')();

    const {items} = store.getState().things;

    expect(Reflect.ownKeys(items).length).toBe(1);
    expect(items['test-id']).toEqual({
      id: 'test-id',
      name: 'New Thing!',
      description: 'Click here to edit my description, category and due date',
      category: 'Category',
      status: 'ready',
      archived: false,
      archivedDate: null,
      due: 100,
      created: 100
    });
  });
});
