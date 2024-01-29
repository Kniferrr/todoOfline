import { TaskInterface } from "../types/typesTaskData";

export const CreateIdTask = (task: TaskInterface[]) => {
  const newId = `${new Date()}`;
  const taskFilter = task.filter((t) => t.index !== newId);
  return taskFilter.length === task.length ? newId : `${newId}${Math.random()}`;
};
