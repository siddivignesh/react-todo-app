import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEdit = (id, text) => {
    setEditTaskId(id);
    setInput(text);
  };

  const editTask = () => {
    setTasks(tasks.map(task =>
      task.id === editTaskId ? { ...task, text: input } : task
    ));
    setEditTaskId(null);
    setInput("");
  };

  return (
    <div className="app">
      <Header />
      <div className="input-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={editTaskId ? editTask : addTask}>
          {editTaskId ? "Update" : "Add"}
        </button>
      </div>
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;
