import React from "react";
import taskS from "./taskComponents.module.scss";

export default function TaskFilterBar() {
  return (
    <div className={taskS.component}>
      <div className={taskS.filterOptions}>
        <span>Все</span>
        <span>Активные</span>
        <span>Выполненные</span>
      </div>
    </div>
  );
}
