import { combineReducers } from 'redux';
import todo from '../reducers/todoReducer';

export default function getRootReducer(nav) {
  return combineReducers({
    nav,
    todo,
  });
}
