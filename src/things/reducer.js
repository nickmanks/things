import reducer from '../utils/reducer';

import testItems from './test-items';


const DefaultState = {
  items: testItems,
  selected: null
};


export default reducer(DefaultState, {
  'things/update-item': (state, {item})=> ({
    ...state,
    items: {
      ...state.items,
      [item.id]: item
    }
  }),
  'things/select-item': (state, {id})=> ({
    ...state,
    selected: id
  })
});
