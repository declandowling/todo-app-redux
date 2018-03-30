import { combineReducers } from 'redux';

export default function getRootReducer(nav) {
  return combineReducers({
    nav,
  });
}
