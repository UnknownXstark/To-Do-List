import React, { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
import { DiGoogleAnalytics } from "react-icons/di";
import { CiBullhorn } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";
import { Fa500Px } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  IoPaperPlaneOutline,
  IoSunnySharp,
  IoMoonSharp,
} from "react-icons/io5";
import { RiQuestionnaireLine } from "react-icons/ri";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(fasle);
  const [theme, setTheme] = useState("light");

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleThemeChange = () => {
    setTheme(selectedTheme);
  };

  useEffect(() => {
    document.boddy.className = theme;
  }, [theme]);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h1>BetterTasks</h1>
        <MdKeyboardDoubleArrowLeft />
      </div>
      <div className="sidebar-main-menu">
        <h3>MAIN MENU</h3>
        <button className="menu-item">
          <GoChecklist />
          To-Do
        </button>
        <button className="menu-item">
          <CiBullhorn />
          Share My Impact
        </button>
        <button className="menu-item">
          <DiGoogleAnalytics />
          Analytics
        </button>
        <button className="menu-item">
          <BiBarChartAlt2 />
          Leaderboard
        </button>
      </div>
      <div className="sidebar-lists">
        <div className="sidebar-lists-header">
          <h3>LISTS</h3>
          <AiFillPlusCircle />
        </div>
        <div className="sidebar-lists-projects"></div>
      </div>
      <div className="sidebar-extra-options">
        <button className="extra-item">
          <IoPaperPlaneOutline />
          Invites
        </button>
        <button className="extra-item">
          <RiQuestionnaireLine />
          FAQs
        </button>
        <div className="sidebar-theme-options">
          <button>
            <IoSunnySharp />
            Light
          </button>
          <button>
            <IoMoonSharp />
            Dark
          </button>
        </div>
      </div>
      <div className="sidebar-profile"></div>
    </div>
  );
};

export default Sidebar;
