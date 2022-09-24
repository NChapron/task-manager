import React, { useEffect, useState } from "react";

import Task from "../models/task";

const DUMMY_TASKS = [
  new Task("First Task"),
  new Task("Second Task"),
  new Task("Third Task"),
];

type TasksContextObj = {
  items: Task[];
  addTask: (taskText: string) => void;
  removeTask: (id: string) => void;
};

export const TasksContext = React.createContext<TasksContextObj>({
  items: [],
  addTask: () => {},
  removeTask: (id: string) => {},
});

const TasksContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { children } = props;

  useEffect(() => {
    setTasks(DUMMY_TASKS);
  }, []);

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

  const contextValue: TasksContextObj = {
    items: tasks,
    addTask: addTaskHandler,
    removeTask: removeTaskHandler,
  };

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
