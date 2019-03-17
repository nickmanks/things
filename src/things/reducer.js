import reducer from '../utils/reducer';


const DefaultState = {
  items: {},
  selected: null,
  searchValue: null,
  sortType: null,
  sortOpen: false
};


export default reducer(DefaultState, {
  'things/update-item': (state, {item})=> ({
    ...state,
    items: {
      ...state.items,
      [item.id]: item
    }
  }),

  'things/set-item': (state, {item})=> ({
    ...state,
    items: {
      ...state.items,
      [item.id]: item
    }
  }),

  'things/delete-item': (state, {item})=> ({
    ...state,
    items: {
      ...state.items,
      [item.id]: undefined
    }
  }),

  'things/select-item': (state, {id})=> ({
    ...state,
    selected: id
  }),

  'things/set-search-value': (state, {value})=> ({
    ...state,
    searchValue: value
  }),

  'things/set-sort-type': (state, {sortType})=> ({
    ...state,
    sortType
  }),

  'things/set-sort-open': (state, {open})=> ({
    ...state,
    sortOpen: open
  })
});
