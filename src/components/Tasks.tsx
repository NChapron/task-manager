import Task from "../models/task";

import React from "react";
import TaskItem from "./TaskItem";

import classes from "./Tasks.module.css";

const Tasks: React.FC<{ items: Task[]; onRemoveTask: (id: string) => void }> = (
  props
) => {
  const { items, onRemoveTask } = props;

  return (
    <ul className={classes.tasks}>
      {items.map((item) => (
        <TaskItem
          key={item.id}
          text={item.text}
          onRemoveTask={onRemoveTask.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Tasks;
