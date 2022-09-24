import React, { useRef } from "react";

const NewTask: React.FC<{ onAddTask: (text: string) => void }> = (props) => {
  const taskTextInputRef = useRef<HTMLInputElement>(null);

  const { onAddTask } = props;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = taskTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    onAddTask(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Task text</label>
      <input id="text" type="text" ref={taskTextInputRef} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTask;
