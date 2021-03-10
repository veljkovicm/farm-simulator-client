import { combineReducers } from 'redux';
import buildings from './buildings/reducer';
import farms from './farms/reducer';

const rootReducer = combineReducers({
  farms,
  buildings,
});

export default rootReducer;
