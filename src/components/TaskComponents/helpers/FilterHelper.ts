import { FilterStatus, filterType } from "../types/typesFilter";

export function filterTasks(filter: filterType) {
  if (filter === FilterStatus.COMPLETED) {
    return true;
  }
  if (filter === FilterStatus.UNCOMPLETED) {
    return false;
  }
  return null;
}
