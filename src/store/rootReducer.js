import {
  addtodo,
  completetodo,
  deletetodo,
  checkboxtodo,
  clearCompletedTodo,
} from "./contant";
import storage from "../untils/storage";
const initState = {
  fill: "all",
  todo: storage.get().todo || [],
};
console.log(storage.get(), "storage.get()");
const rootReducer = (state = initState, actions) => {
  switch (actions.type) {
    case addtodo:
      const dataAdd = {
        ...state,
        todo: [...state.todo, actions.payload],
      };
      storage.set("TODOS", dataAdd);
      return dataAdd;
    case completetodo:
      const data = state.todo.map((el, idx) => {
        if (idx === actions.payload.index) {
          return {
            ...el,
            complete: actions.payload.value,
          };
        } else return el;
      });
      const completeData = {
        ...state,
        todo: data,
      };
      storage.set("TODOS", completeData);
      return completeData;

    case deletetodo:
      const result =
        state &&
        state.todo &&
        Array.isArray(state.todo) &&
        state.todo.filter((todo) => todo.id !== actions.payload);
      const deleteData = {
        ...state,
        todo: result,
      };
      storage.set("TODOS", deleteData);
      return deleteData;
    case checkboxtodo:
      return {
        ...state,
        fill: actions.payload,
      };
    case clearCompletedTodo:
      console.log(actions.payload);
      const dataClear = {
        ...state,
        todo: actions.payload,
      };
      storage.set("TODOS", dataClear);
      return dataClear;
    default:
      return state;
  }
};
export default rootReducer;
