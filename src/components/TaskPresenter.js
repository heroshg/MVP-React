// src/components/TaskPresenter.js

import TaskModel from './TaskModel';

export default class TaskPresenter {
    constructor() {
        this.model = new TaskModel();
    }

    addTask(title) {
        this.model.addTask(title);
    }

    removeTask(index) {
        this.model.removeTask(index);
    }

    markTaskCompleted(index) {
        this.model.markTaskCompleted(index);
    }

    getTasks() {
        return this.model.getTasks();
    }
}
