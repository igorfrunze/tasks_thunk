import { setSearchTask } from '../actions';

export const handleSearchChange = (dispatch, value) => {
  dispatch(setSearchTask(value));
};
