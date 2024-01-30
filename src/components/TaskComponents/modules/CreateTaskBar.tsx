"use client";
import React, { useState } from "react";
import taskS from "./taskComponents.module.scss";
import { useDispatch } from "@/lib/store";
import { AddNewTaskHelper } from "../helpers/TaskHelpers";

export default function CreateTaskBar() {
  const [inputValue, SetInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const onclickAddTask = () => {
    dispatch(AddNewTaskHelper(inputValue));
    SetInputValue("");
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetInputValue(e.target.value);
  };

  return (
    <div className={taskS.component}>
      <div className={taskS.taskInput}>
        <input
          className={taskS.inputField}
          type="text"
          placeholder="Добавить новую задачу..."
          onChange={(e) => onChangeInput(e)}
          value={inputValue}
        />
        <button className={taskS.button} onClick={onclickAddTask}>
          Добавить
        </button>
      </div>
    </div>
  );
}
