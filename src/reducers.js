import {combineReducers} from 'redux';
import {createResponsiveStateReducer} from 'redux-responsive';
import focus from 'refocus/reducer';
import device from './device-info/reducer';
import menu from './menu/reducer';
import things from './things/reducer';


const browser = createResponsiveStateReducer(
  {extraSmall: 480, small: 767, medium: 992, large: 1450}
);

export default combineReducers({
  focus,
  browser,
  device,
  menu,
  things
  // ... add more reducers
});
