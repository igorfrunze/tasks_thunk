import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { todosReducer, searchTaskReducer } from './reducers';

const reducer = combineReducers({
  
  todos: todosReducer,
  searchTask: searchTaskReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
