import React, { useState } from "react";
import "./TaskCard.css";
import { CgMathPlus } from "react-icons/cg";
import { MdDelete, MdModeEdit } from "react-icons/md";

const TaskkCard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false,
          priority: "Medium",
        },
      ]);
      setNewTask("");
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    setEditingTask(task.id);
    setEditText(task.title);
  };

  const handleSaveEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: editText } : task
      )
    );
    setEditingTask(null);
    setEditText("");
  };

  return (
    <div className="taskcard">
      <div className="taskcard-head">
        <h1>Todays Task.</h1>
      </div>
      <div className="taskcard-tasks">
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="What are your plans?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button type="submit">
            <CgMathPlus /> Add task
          </button>
        </form>
        <ul className="taskcard-list">
          {tasks.map((task) => (
            <div className="task-item" key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
              />
              {editingTask === task.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => handleSaveEdit(task.id)}
                  autoFocus
                />
              ) : (
                <span
                  className={`task-title ${task.completed ? "completed" : ""}`}
                >
                  {task.title}
                </span>
              )}
              <span
                className={`priority-tag ${task.completed ? "completed" : ""}`}
              >
                {task.title}
              </span>
              <span className={`priority-tag ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
              <button className="edit-btn" onClick={handleEditTask}>
                <MdModeEdit />
              </button>
              <button className="delete-btn" onClick={handleDeleteTask}>
                <MdDelete />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskkCard;
