import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
import { DiGoogleAnalytics } from "react-icons/di";
import { CiBullhorn } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>BetterTasks</h1>
        <MdKeyboardDoubleArrowLeft />
      </div>
      <div className="sidebar-main-menu">
        <p>MAIN MENU</p>
        <button>
          <GoChecklist />
          To-Do
        </button>
        <button>
          <CiBullhorn />
          Share My Impact
        </button>
        <button>
          <DiGoogleAnalytics />
          Analytics
        </button>
        <button>
          <BiBarChartAlt2 />
          Leaderboard
        </button>
      </div>
      <div className="sidebar-lists"></div>
      <div className="sidebar-extra-options"></div>
      <div className="sidebar-profile"></div>
    </div>
  );
};

export default Sidebar;
