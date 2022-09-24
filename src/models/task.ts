class Task {
  id: string;
  text: string;

  constructor(taskText: string) {
    this.text = taskText;
    this.id = new Date().toISOString() + Math.floor(Math.random() * 100);
  }
}

export default Task;
