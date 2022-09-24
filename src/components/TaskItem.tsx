import React from "react";

import classes from "./TaskItem.module.css";

const TaskItem: React.FC<{ text: string; onRemoveTask: () => void }> = (props) => {
  const { text, onRemoveTask } = props;
  
  return (
    <li onClick={onRemoveTask} className={classes.item}>
      {text}
    </li>
  );
};

export default TaskItem;
