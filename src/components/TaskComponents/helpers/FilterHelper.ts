import { FilterStatus, filterType } from "../types/typesFilter";

export function filterTasks(filter: filterType) {
  if (filter === FilterStatus.COMPLETED) {
    return false;
  }
  if (filter === FilterStatus.UNCOMPLETED) {
    return true;
  }
  return null;
}
