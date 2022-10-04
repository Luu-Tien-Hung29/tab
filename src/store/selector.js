export const todoListSelector = (state) => {
  if (state.fill === "all") {
    return state.todo;
  }
  return state.todo.filter((todo) => {
    console.log(state.todo);
    return state.fill === "completed" ? todo.complete : !todo.complete;
  });
};
export const todoListCheck = (state) => state.fill;
