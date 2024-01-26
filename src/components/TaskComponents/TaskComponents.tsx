import CreateTaskBar from "./modules/CreateTaskBar";
import SearchBar from "./modules/SearchBar";
import TaskFilterBar from "./modules/TaskFilterBar";
import TaskList from "./modules/TaskList";

export default async function TaskComponents() {
  return (
    <>
      <SearchBar />
      <CreateTaskBar />
      <TaskFilterBar />
      <TaskList />
    </>
  );
}
