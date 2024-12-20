export const initialSearchState = '';

export const searchTaskReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TASK': {
      return action.payload;
    }

    default:
      return state;
  }
};
