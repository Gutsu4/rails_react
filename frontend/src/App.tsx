import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface Task {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/tasks');
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rails + React Practice App</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <h2>Tasks</h2>
          {tasks.length === 0 ? (
            <p>No tasks found</p>
          ) : (
            <ul style={{ textAlign: 'left' }}>
              {tasks.map(task => (
                <li key={task.id}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
