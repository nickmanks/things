
import reducer from '../utils/reducer';

const DefaultState = {
  open: false
};

export default reducer(DefaultState, {
  'menu/set-open': (state, {isOpen})=> ({
    ...state,
    open: isOpen
  })
});
