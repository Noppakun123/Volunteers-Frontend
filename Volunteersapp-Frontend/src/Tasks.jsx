import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskId, setTaskId] = useState(null);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:3000/tasks');
        setTasks(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (taskId) {
            await axios.put(`http://localhost:3000/tasks/${taskId}`, { name: taskName });
        } else {
            await axios.post('http://localhost:3000/tasks', { name: taskName });
        }
        setTaskName('');
        setTaskId(null);
        fetchTasks();
    };

    const handleEdit = (task) => {
        setTaskId(task.id);
        setTaskName(task.name);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/tasks/${id}`);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Tasks</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Task Name"
                    required
                />
                <button type="submit">{taskId ? 'Update' : 'Create'}</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.name}
                        <button onClick={() => handleEdit(task)}>Edit</button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
