import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>BetterTasks</h1>
        <MdKeyboardDoubleArrowLeft />
      </div>
      <div className="sidebar-main-menu">
        <p>MAIN MENU</p>
        <button>To-Do</button>
        <button>Share My Impact</button>
        <button>Analytics</button>
        <button>Leaderboard</button>
      </div>
      <div className="sidebar-lists"></div>
      <div className="sidebar-extra-options"></div>
      <div className="sidebar-profile"></div>
    </div>
  );
};

export default Sidebar;
