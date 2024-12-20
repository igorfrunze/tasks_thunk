export const initialTodosState = [];

export const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case 'SET_TODOS': {
      return action.payload;
    }
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK': {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case 'EDIT_TASK': {
      const { data, id } = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, ...data } : todo
      );
    }
    case 'SORT_TASKS': {
      return action.payload;
    }
    default:
      return state;
  }
};
