import * as actionTypes from '../actions/actionTypes';

const initialState = {
  lastTodoContainerId: 0,
  lastTodoItemId: 0,
  containers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_CONTAINER_ADD:
    {
      const lastTodoContainerId = state.lastTodoContainerId + 1;

      return {
        ...state,
        lastTodoContainerId,
        containers: [
          ...state.containers,
          {
            id: lastTodoContainerId,
            name: action.name,
            color: action.color,
            items: [],
          },
        ],
      };
    }

    case actionTypes.TODO_CONTAINER_REMOVE:
      return {
        ...state.containers.filter(todoContainer => todoContainer.id !== action.todoContainerId),
      };

    default:
      return state;
  }
};
