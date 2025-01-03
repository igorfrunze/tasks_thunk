
import { sortTasks } from '../actions';

export function handleSortTasks(todos, dispatch) {
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  });
  dispatch(sortTasks(sortedTodos));
}