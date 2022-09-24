import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
import TasksContextProvider from "./store/task-context";

function App() {
  return (
    <TasksContextProvider>
      <NewTask />
      <Tasks />
    </TasksContextProvider>
  );
}

export default App;
