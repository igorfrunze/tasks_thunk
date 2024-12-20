export const editTask = (id, value) => (dispatch) => {
  fetch(`http://localhost:3003/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application.json' },
    body: JSON.stringify({
      id: id,
      title: value,
      status: false,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: 'EDIT_TASK',
        payload: {
          data, id
        }
      });
    })
    .catch((err) => console.log(err));
};
