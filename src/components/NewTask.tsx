import React, { useContext, useRef } from "react";
import { TasksContext } from "../store/task-context";

import classes from "./NewTask.module.css";

const NewTask: React.FC = () => {
  const taskTextInputRef = useRef<HTMLInputElement>(null);

  const tasksCtx = useContext(TasksContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = taskTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    tasksCtx.addTask(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Task text</label>
      <input id="text" type="text" ref={taskTextInputRef} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTask;
