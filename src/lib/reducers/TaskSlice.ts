import { TaskInterface } from "@/components/TaskComponents/types/typesTaskData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInitialStateFromLocalStorage = () => {
  const savedState = localStorage.getItem("TaskReducer");
  return savedState ? JSON.parse(savedState) : initialState;
};

interface taskSlice {
  tasksList: TaskInterface[];
}

const initialState: taskSlice = {
  tasksList: [],
};

export const TaskSlice = createSlice({
  name: "TaskSlice",
  initialState,
  ...getInitialStateFromLocalStorage,
  reducers: {
    setTasksList: (state, action: PayloadAction<any>) => {
      state.tasksList = action.payload;
      localStorage.setItem("TaskReducer", JSON.stringify(state));
    },
    addTasksInList: (state, action: PayloadAction<any>) => {
      state.tasksList = [...state.tasksList, action.payload];
      localStorage.setItem("TaskReducer", JSON.stringify(state));
    },
  },
});
