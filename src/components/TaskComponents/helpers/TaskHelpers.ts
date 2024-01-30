import { Dispatch } from "redux";
import {
  CreateTaskByUsername,
  DeleteTaskById,
  FetchTaskByUsername,
  completeTaskById,
} from "../services/fetchTaskData";
import { TaskSlice } from "@/lib/reducers/TaskSlice";

const GetTasks = (dispatch: Dispatch) => {
  try {
    setTimeout(() => {
      FetchTaskByUsername("Knifer").then((data) =>
        dispatch(TaskSlice.actions.setTasksList(data))
      );
    }, 1000);
  } catch (error) {}
};

export const RevalidateTasks = () => {
  return async (dispatch: Dispatch) => {
    try {
      GetTasks(dispatch);
    } catch (error) {}
  };
};

export const AddNewTaskHelper = (inputValue: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(TaskSlice.actions.addTasksInList(inputValue));
      CreateTaskByUsername("Knifer", inputValue);
      GetTasks(dispatch);
    } catch (error) {}
  };
};

export const deleteTask = (TaskIndex: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(TaskSlice.actions.deleteTasksInList(TaskIndex));
      DeleteTaskById("Knifer", TaskIndex);
      GetTasks(dispatch);
    } catch (error) {}
  };
};

export const completeTask = (TaskIndex: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(TaskSlice.actions.completeTaskInList(TaskIndex));
      completeTaskById("Knifer", TaskIndex);
      GetTasks(dispatch);
    } catch (error) {}
  };
};
