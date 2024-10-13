import React, { useState, useEffect } from 'react';
import TaskView from './components/TaskView';
import TaskPresenter from './components/TaskPresenter';

const App = () => {
    const presenter = new TaskPresenter();
    const [tasks, setTasks] = useState(presenter.getTasks());

    useEffect(() => {
        setTasks(presenter.getTasks());
    }, []);

    const handleAddTask = (title) => {
        presenter.addTask(title);
        setTasks(presenter.getTasks());
    };

    const handleRemoveTask = (index) => {
        presenter.removeTask(index);
        setTasks(presenter.getTasks());
    };

    const handleCompleteTask = (index) => {
        presenter.markTaskCompleted(index);
        setTasks(presenter.getTasks());
    };

    return (
        <TaskView
            tasks={tasks}
            onAddTask={handleAddTask}
            onRemoveTask={handleRemoveTask}
            onCompleteTask={handleCompleteTask}
        />
    );
};

export default App;