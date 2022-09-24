import React from "react";

import classes from "./TaskItem.module.css";

const TaskItem: React.FC<{ text: string }> = (props) => {
  const { text } = props;
  return <li className={classes.item}>{text}</li>;
};

export default TaskItem;
