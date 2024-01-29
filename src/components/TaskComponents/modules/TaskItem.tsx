"use client";
import React, { FC } from "react";
import { TaskInterface } from "../types/typesTaskData";
import taskS from "./taskComponents.module.scss";
import { useDispatch } from "@/lib/store";
import { deleteTask } from "../helpers/TaskHelpers";

interface TaskItemProps {
  taskInfo: TaskInterface;
}

const TaskComponent: FC<TaskItemProps> = ({ taskInfo }) => {
  const dispatch = useDispatch();

  const onclickDel = (TaskIndex: string) => {
    dispatch(deleteTask(TaskIndex));
  };

  return (
    <div key={taskInfo.index} className={taskS.task}>
      <div>{taskInfo.task}</div>
      <div onClick={() => onclickDel(taskInfo.index)}>Del</div>
    </div>
  );
};

export default React.memo(TaskComponent);
