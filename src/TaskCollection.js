class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  log() {
    console.dir(this.tasks);
  }
}

export default TaskCollection;
