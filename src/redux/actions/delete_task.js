export const deleteTask = (id) => (dispatch) =>
  fetch(`http://localhost:3003/todos/${id}`, {
    method: 'DELETE',
  }).then(() => dispatch({ type: 'DELETE_TASK', payload: id }));
