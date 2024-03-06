import { createSlice } from "@reduxjs/toolkit";
//Random ID
import { v4 as uuid } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: uuid(), title: "Отметьте первый элемент", completed: false , tooltip:"Нажать1"},
    { id: uuid(), title: "Отметьте второй элемент", completed: false,tooltip:"Нажать2" },
    {id: uuid(), title: "Отметьте третьи элемент", completed: false,tooltip:"Нажать3"},
    {id: uuid(), title: "Отметьте четвертый элемент", completed: false,tooltip:"Нажать4"},
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        title: action.payload.title,
        tooltip:action.payload.tooltip,
        completed: false,
      };
      state.push(todo);
    },
    markComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteItem: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, markComplete, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
