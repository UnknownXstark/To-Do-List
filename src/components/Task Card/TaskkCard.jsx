import React, { useEffect, useState } from "react";
import "./TaskCard.css";
import { CgMathPlus } from "react-icons/cg";
import { MdModeEdit } from "react-icons/md";
import { FiTrash } from "react-icons/fi";

const TaskkCard = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const updatedTasks = [
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false,
          priority: "Medium",
        },
      ];
      setTasks(updatedTasks);
      setNewTask("");
    }
    localStorage.setItem("task", JSON.stringify(tasks));
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEditTask = (task) => {
    setEditingTask(task.id);
    setEditText(task.title);
  };

  const handleSaveEdit = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: editText } : task
    );
    setTasks(updatedTasks);
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
              <span className={`priority-tag ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
              <button className="edit-btn" onClick={() => handleEditTask(task)}>
                <MdModeEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTask(task.id)}
              >
                <FiTrash />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskkCard;
