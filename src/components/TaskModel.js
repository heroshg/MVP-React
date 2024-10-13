class Task {
    constructor(title) {
        this.title = title;
        this.completed = false;
    }

    markCompleted() {
        this.completed = true;
    }
}

export default class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(title) {
        const task = new Task(title);
        this.tasks.push(task);
    }

    removeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    }

    markTaskCompleted(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].markCompleted();
        }
    }

    getTasks() {
        return this.tasks;
    }
}