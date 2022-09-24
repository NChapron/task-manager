import React, { useContext } from "react";

import { TasksContext } from "../store/task-context";
import TaskItem from "./TaskItem";

import classes from "./Tasks.module.css";

const Tasks: React.FC = () => {
  const tasksCtx = useContext(TasksContext);

  return (
    <ul className={classes.tasks}>
      {tasksCtx.items.map((item) => (
        <TaskItem
          key={item.id}
          text={item.text}
          onRemoveTask={tasksCtx.removeTask.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Tasks;
