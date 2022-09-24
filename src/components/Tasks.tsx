import Task from "../models/task";

import React from "react";
import TaskItem from "./TaskItem";

import classes from "./Tasks.module.css";

const Tasks: React.FC<{ items: Task[] }> = (props) => {
  const { items } = props;
  return (
    <ul className={classes.tasks}>
      {items.map((item) => (
        <TaskItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Tasks;
