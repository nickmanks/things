import reducer from '../utils/reducer';
import uuidV4 from 'uuid/v4';


const DefaultState = {
  queued: [],
  processing: [],
  done: [],
  errors: [],
  loaded: false
};


export default reducer(DefaultState, {
  /* FROM OUTSIDE ACTIONS */
  // Listen to the update item action
  'things/update-item': (state, {item})=> ({
    ...state,
    queued: [...state.queued, {
      id: uuidV4(),
      type: 'update',
      item
    }]
  }),

  'things/delete-item': (state, {item})=> ({
    ...state,
    queued: [...state.queued, {
      id: uuidV4(),
      type: 'delete',
      item
    }]
  }),

  /* FROM INSIDE ACTIONS */

  'persistence/set-processing': (state, {id})=> ({
    ...state,
    queued: [...state.queued.filter(({id: updateId})=> updateId !== id)],
    processing: [...state.queued.filter(({id: updateId})=> updateId === id)]
  }),

  'persistence/set-done': (state, {id})=> ({
    ...state,
    processing: [
      ...state.processing.filter(({id: updateId})=> updateId !== id)
    ],
    done: [...state.processing.filter(({id: updateId})=> updateId === id)]
  }),

  'persistence/set-error': (state, {error})=> ({
    ...state,
    errors: [...state.errors, error]
  }),

  'persistence/set-loaded': (state)=> ({
    ...state,
    loaded: true
  }),

  'persistence/clear-error': (state)=> ({
    ...state,
    errors: []
  })
});
