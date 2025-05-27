import ToDoItem from './ToDoItem';

function ToDoList({ tasks, deleteTask, toggleComplete, startEdit }) {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          startEdit={startEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
