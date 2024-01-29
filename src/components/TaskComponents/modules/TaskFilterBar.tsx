"use client";
import React from "react";
import taskS from "./taskComponents.module.scss";
import { FilterSlice } from "@/lib/reducers/FilterSlice";
import { FilterStatus, filterType } from "../types/typesFilter";
import { useDispatch } from "@/lib/store";

export default function TaskFilterBar() {
  const dispatch = useDispatch();

  const onclickSetFilter = (filterStatus: filterType) => {
    dispatch(FilterSlice.actions.setFilter(filterStatus));
  };

  return (
    <div className={taskS.component}>
      <div className={taskS.filterOptions}>
        <span onClick={() => onclickSetFilter(FilterStatus.ALL)}>Все</span>
        <span onClick={() => onclickSetFilter(FilterStatus.UNCOMPLETED)}>
          Активные
        </span>
        <span onClick={() => onclickSetFilter(FilterStatus.COMPLETED)}>
          Выполненные
        </span>
      </div>
    </div>
  );
}
