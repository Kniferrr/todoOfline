"use client";
import React, { useEffect, useState } from "react";
import taskS from "./taskComponents.module.scss";
import { FetchTaskByUsername } from "../services/fetchTaskData";
import { TaskInterface } from "../types/typesTaskData";
import { ReduxState, useDispatch, useSelector } from "@/lib/store";
import { TaskSlice } from "@/lib/reducers/TaskSlice";

export default function TaskList() {
  const [list, setList] = useState<TaskInterface[]>([]);
  const dispatch = useDispatch();
  const { tasksList } = useSelector((state: ReduxState) => state.TaskSlice);

  useEffect(() => {
    FetchTaskByUsername("Knifer").then((data) => {
      setList(data);
      dispatch(TaskSlice.actions.setTasksList(data));
    });
  }, []);

  return (
    <div className={taskS.component}>
      {tasksList.map((t) => (
        <div key={t.index}>{t.task}</div>
      ))}
    </div>
  );
}
