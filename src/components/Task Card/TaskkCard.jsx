import React from "react";
import "./TaskCard.css";
import { CgMathPlus } from "react-icons/cg";

const TaskkCard = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="taskcard">
      <div className="taskcard-head">
        <h1>Todays Task.</h1>
      </div>
      <div className="taskcard-tasks">
        <form>
          <input type="text" placeholder="What are your plans?" />

          <button>Finish</button>
          <button>
            <CgMathPlus /> Add task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskkCard;
