import { useRef, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos, addTask, deleteTask } from './redux/actions';
import {
  handleSearchChange,
  handleSortTasks,
  handleAreaChange
} from './redux/functions';

function maxIdInArray(arr) {
  return Math.max(...arr.map((el) => +el.id));
}

function App() {
  const searchTask = useSelector((state) => state.searchTask);
  const todos = useSelector((state) => state.todos);
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodos());
  }, [dispatch]);

  function handleTaskSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: todos.length === 0 ? '1' : +`${maxIdInArray(todos)}` + 1 + '',
      title: inputRef.current.value,
      status: false,
    };
    inputRef.current.value = '';
    dispatch(addTask(newTask));
  }

  function handleTaskDelete(id) {
    dispatch(deleteTask(id));
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTask.toLowerCase())
  );

  return (
    <main className="main">
      <h1>Your toDos</h1>
      <form onSubmit={handleTaskSubmit} className="form">
        <input ref={inputRef} type="text" placeholder="Enter your task" />
        <button>Add Task</button>
      </form>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a task"
          onChange={(e) => handleSearchChange(dispatch, e.target.value)}
        />
        <button className="searchBtn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button onClick={() => handleSortTasks(todos, dispatch)}>
          Sort tasks
        </button>
      </div>

      <div className="tasks">
        {filteredTodos.map((todo) => (
          <div className="task" key={todo.id}>
            <textarea
              value={todo.title}
              onChange={({ target }) =>
                handleAreaChange(todo.id, target, dispatch)
              }
            />
            <button onClick={() => handleTaskDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
