import reducer from '../utils/reducer';


const DefaultState = {
  items: {}
};


export default reducer(DefaultState, {
  'things/update-item': (state, {item})=> ({
    ...state,
    items: {
      ...state.items,
      [item.id]: item
    }
  })
});
