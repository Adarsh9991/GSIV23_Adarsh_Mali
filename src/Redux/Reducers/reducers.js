
const initialState = null;

export const selectedItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_MOVIE':
      return action.payload;
    default:
      return state;
  }
};



export const selectedSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_SEARCH':
      return action.payload;
    default:
      return state;
  }
};







