"use client";
import React, { useEffect } from "react";
import taskS from "./taskComponents.module.scss";
import { useDispatch, useSelector } from "@/lib/store";
import TaskItem from "./TaskItem";
import { TaskInterface } from "../types/typesTaskData";
import { RevalidateTasks } from "../helpers/TaskHelpers";
import { filteredTasksSelector } from "@/lib/Selectors/FilterSelector";

function TaskList() {
  const dispatch = useDispatch();
  const FilteredTasksList: TaskInterface[] = useSelector(filteredTasksSelector);

  useEffect(() => {
    dispatch(RevalidateTasks());
  }, []);

  return (
    <div className={taskS.component}>
      {FilteredTasksList.map((t) => (
        <TaskItem taskInfo={t} key={t.index} />
      ))}
    </div>
  );
}

export default TaskList;
