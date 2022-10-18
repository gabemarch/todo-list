import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  status: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.entities.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.entities.filter((item) => item.id !== action.payload.id);
    },
    completeTask: (state, action) => {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      console.log(" ENTITY", todo);
      // todo.completed = !todo.completed;
    },
  },
});

export const { addTask, deleteTask, completeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
