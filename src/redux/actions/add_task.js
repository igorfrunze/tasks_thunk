export const addTask = (task) => (dispatch) =>
  fetch('http://localhost:3003/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  })
    .then((response) => response.json())
    .then((newTask) => {
      dispatch({
        type: 'ADD_TASK',
        payload: newTask,
      });
    })
    .catch((err) => console.log(err));
