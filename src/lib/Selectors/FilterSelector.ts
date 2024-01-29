import { createSelector } from "reselect";
import { ReduxState } from "../store";
import { filterTasks } from "@/components/TaskComponents/helpers/FilterHelper";
import { TaskInterface } from "@/components/TaskComponents/types/typesTaskData";
import { filterType } from "@/components/TaskComponents/types/typesFilter";

const filterSelector = (state: ReduxState) => state.FilterSlice.filter;
const tasksListSelector = (state: ReduxState) => state.TaskSlice.tasksList;

export const filteredTasksSelector = createSelector(
  [filterSelector, tasksListSelector],
  (filter: filterType, tasksList: TaskInterface[]) => {
    const filterOption = filterTasks(filter);
    return tasksList.filter(
      (task: TaskInterface) => task.completed !== filterOption
    );
  }
);
