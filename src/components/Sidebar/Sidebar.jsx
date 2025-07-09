import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
import { DiGoogleAnalytics } from "react-icons/di";
import { CiBullhorn } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { RiQuestionnaireLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>BetterTasks</h1>
        <MdKeyboardDoubleArrowLeft />
      </div>
      <div className="sidebar-main-menu">
        <h3>MAIN MENU</h3>
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
      <div className="sidebar-lists">
        <div className="sidebar-lists-top">
          <h3>LISTS</h3>
          <AiFillPlusCircle />
        </div>
      </div>
      <div className="sidebar-extra-options">
        <button>
          <IoPaperPlaneOutline />
          Invites
        </button>
        <button>
          <RiQuestionnaireLine />
          FAQs
        </button>
      </div>
      <div className="sidebar-profile"></div>
    </div>
  );
};

export default Sidebar;
