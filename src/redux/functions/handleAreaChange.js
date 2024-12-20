import { editTask } from "../actions";

export  function handleAreaChange(id, target, dispatch) {
    const value = target.value;
    dispatch(editTask(id, value));
  }