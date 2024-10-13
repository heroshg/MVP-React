// src/components/TaskView.js

import React from 'react';

const TaskView = ({ tasks, onAddTask, onRemoveTask, onCompleteTask }) => {
    const [taskInput, setTaskInput] = React.useState('');

    const handleAddTask = () => {
        if (taskInput) {
            onAddTask(taskInput);
            setTaskInput('');
        }
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Digite uma nova tarefa"
            />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.title}
                        </span>
                        <button onClick={() => onCompleteTask(index)}>
                            {task.completed ? 'Desmarcar' : 'Concluir'}
                        </button>
                        <button onClick={() => onRemoveTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskView;