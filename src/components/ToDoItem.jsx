function ToDoItem({ task, deleteTask, toggleComplete, startEdit }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      <button onClick={() => toggleComplete(task.id)}>✔️</button>
      <button onClick={() => startEdit(task.id, task.text)}>✏️</button>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default ToDoItem;
