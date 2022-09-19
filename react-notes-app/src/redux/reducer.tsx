import { createSlice } from "@reduxjs/toolkit";
import Item from "interfaces/Item";

const initialState = [] as Item[];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //completed
    archiveTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isArchived: !todo.isArchived,
          };
        }
        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  archiveTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
