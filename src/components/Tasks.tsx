import React from "react";
import Task from "../models/task";
import TaskItem from "./TaskItem";

const Tasks: React.FC<{ items: Task[] }> = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <TaskItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Tasks;
