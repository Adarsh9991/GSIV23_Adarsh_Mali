export const setSelectedItem = (item) => {
  return {
    type: "SET_SELECTED_MOVIE",
    payload: item,
  };
};

export const setSelectedSearch = (item) => {
  return {
    type: "SET_SELECTED_SEARCH",
    payload: item,
  };
};
