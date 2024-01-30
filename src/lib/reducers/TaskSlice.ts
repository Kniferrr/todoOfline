"use client";
import { CreateIdTask } from "@/components/TaskComponents/helpers/CreateIdTask";
import { TaskInterface } from "@/components/TaskComponents/types/typesTaskData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface taskSlice {
  tasksList: TaskInterface[];
}

const initialState: taskSlice = {
  tasksList: [],
};

export const TaskSlice = createSlice({
  name: "TaskSlice",
  initialState,
  reducers: {
    setTasksList: (state, action: PayloadAction<TaskInterface[]>) => {
      state.tasksList = action.payload;
      localStorage.setItem("TaskReducer", JSON.stringify(state));
    },
    addTasksInList: (state, action: PayloadAction<string>) => {
      const newId = CreateIdTask(state.tasksList);
      state.tasksList = [
        ...state.tasksList,
        {
          task: action.payload,
          completed: false,
          index: newId,
        },
      ];
      localStorage.setItem("TaskReducer", JSON.stringify(state));
    },
    deleteTasksInList: (state, action: PayloadAction<string>) => {
      state.tasksList = state.tasksList.filter(
        (task: TaskInterface) => task.index !== action.payload
      );
      localStorage.setItem("TaskReducer", JSON.stringify(state));
    },
    completeTaskInList: (state, action: PayloadAction<string>) => {
      const indexToArray = state.tasksList.findIndex(
        (task: TaskInterface) => task.index === action.payload
      );
      state.tasksList[indexToArray].completed =
        !state.tasksList[indexToArray].completed;
      localStorage.setItem("TaskReducer", JSON.stringify(state));
    },
  },
});
