import React, { useState } from "react";
import "./TaskCard.css";
import { CgMathPlus } from "react-icons/cg";

const TaskkCard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

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

  const handleToggleComplete = (id) => {};
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

          {/* <button type="submit">Finish</button> */}
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
              <span
                className={`priority-tag ${task.completed ? "completed" : ""}`}
              >
                {task.title}
              </span>
              <span className={`priority-tag ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
              {/* <button className="finish-btn">Finish</button> */}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskkCard;
