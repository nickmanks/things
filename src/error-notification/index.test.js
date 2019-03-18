import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ErrorNotification from '.';
import {unwrappedShallow, testStore} from '../testing/helpers';


describe('<ErrorNotification />', ()=> {
  it('removes the errors when removeError is called', ()=> {
    const store = testStore({
      persistence: {
        errors: ['error-1', 'error-2']
      }
    });
    const wrapper = unwrappedShallow(<ErrorNotification store={store} />);

    wrapper.find(FontAwesomeIcon)
      .findWhere(
        (icon)=> icon.prop('className') === 'error-notification-icon-post'
      )
      .prop('onClick')();

    expect(store.getState().persistence.errors).toEqual([]);
  });
});
