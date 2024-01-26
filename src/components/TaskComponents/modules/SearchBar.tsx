import React from "react";
import taskS from "./taskComponents.module.scss";

export default function SearchBar() {
  return (
    <div className={taskS.component}>
      <div className={taskS.searchInput}>
        <input
          type="text"
          className={taskS.inputField}
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
}
