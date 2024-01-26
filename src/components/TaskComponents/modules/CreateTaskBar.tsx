"use client";
import React, { useState } from "react";
import taskS from "./taskComponents.module.scss";
import { CreateTaskByUsername } from "../services/fetchTaskData";

export default function CreateTaskBar() {
  const [inputValue, SetInputValue] = useState<string>("");

  const onclickAddTask = () => {
    CreateTaskByUsername("Knifer", inputValue);
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
