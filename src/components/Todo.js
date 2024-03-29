import "./todo.css";
import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { // Check if the pressed key is "Enter"
      handleAddTask(); // Call the function to add a task
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h2>To-Do List</h2>
        <div className="row">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress} // Call handleKeyPress function on key press
            placeholder="Enter your task"
          />
          <button className="add" onClick={handleAddTask}>
            Add
          </button>
        </div>
        <ul id="list-container">
          {tasks.map((task) => (
            <li key={task.id} className="todo-item">

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompletion(task.id)}
              />
              <div
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </div>
              <button className="del" onClick={() => handleDeleteTask(task.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
