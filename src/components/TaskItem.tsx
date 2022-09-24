import React from "react";
import Task from "../models/task";

const TaskItem: React.FC<{ text: string }> = (props) => {
  const { text } = props;
  return <li>{text}</li>;
};

export default TaskItem;
