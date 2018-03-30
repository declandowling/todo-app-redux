import * as actionTypes from '../actions/actionTypes';

export function addTodoContainer(name, color) {
  return {
    type: actionTypes.TODO_CONTAINER_ADD,
    name,
    color,
  };
}

export function removeTodoContainer(todoContainerId) {
  return {
    type: actionTypes.TODO_CONTAINER_REMOVE,
    todoContainerId,
  };
}
