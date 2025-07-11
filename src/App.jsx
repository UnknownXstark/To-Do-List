import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskkCard from "./components/Task Card/TaskkCard";

function App() {
  return (
    <>
      <Sidebar />
      <TaskkCard />
    </>
  );
}

export default App;
