import Tasks from "./components/Tasks";
import Task from "./models/task";

function App() {
  const tasks = [
    new Task("Task One"),
    new Task("Task Two"),
    new Task("Task Three"),
  ];

  return (
    <div>
      <Tasks items={tasks} />
    </div>
  );
}

export default App;
