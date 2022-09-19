import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Item from "interfaces/Item";

const initialState = [
  {id: 1, title: "title1", createdDate: "2022-09-19", category: "Task", description: "description1", isArchived: false},
  {id: 2, title: "title2", createdDate: "2022-09-19", category: "Idea", description: "description2", isArchived: false},
  {id: 3, title: "title3", createdDate: "2022-09-19", category: "Random Thought", description: "description3 2000-20-20", isArchived: false},
  {id: 4, title: "title4", createdDate: "2022-09-19", category: "Idea", description: "description4", isArchived: false},
  {id: 5, title: "title5", createdDate: "2022-09-19", category: "Idea", description: "description5", isArchived: false},
  {id: 6, title: "title6", createdDate: "2022-09-19", category: "Task", description: "description6 2000-10-10 and 2020-20-20", isArchived: false},
  {id: 7, title: "title7", createdDate: "2022-09-19", category: "Random Thought", description: "description7", isArchived: false},
];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state: Item[], action: PayloadAction<Item>) => {
      state.push(action.payload);
      return state;
    },

    removeTodos: (state: Item[], action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },

    archiveTodos: (state: Item[], action: PayloadAction<number>) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isArchived: !item.isArchived,
          };
        }
        return item;
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
