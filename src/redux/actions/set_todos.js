const todosFromServer = () => {
  return fetch('http://localhost:3003/todos').then((data) => data.json());
};

export const setTodos = () => (dispatch) =>
  todosFromServer().then((data) => {
    dispatch({
      type: 'SET_TODOS',
      payload: data,
    });
  });
