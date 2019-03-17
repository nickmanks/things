import reducer from '../utils/reducer';
import uuidV4 from 'uuid/v4';


const DefaultState = {
  queued: [],
  processing: [],
  done: [],
  errors: []
};


export default reducer(DefaultState, {
  // Listen to the updat item action and update it
  'things/update-item': (state, {item})=> ({
    ...state,
    queued: [...state.queued, {
      id: uuidV4(),
      item
    }]
  }),

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
  })
});
