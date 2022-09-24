import { useState } from "react";

import Task from "./models/task";

import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTaskHandler = (taskText: string) => {
    const newTask = new Task(taskText);

    setTasks((previousTask) => {
      return previousTask.concat(newTask);
    });
  };

  const removeTaskHandler = (taskId: string) => {
    setTasks((previousTask) => {
      return previousTask.filter((task) => task.id !== taskId);
    });
  };

  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={tasks} onRemoveTask={removeTaskHandler} />
    </div>
  );
}

export default App;
