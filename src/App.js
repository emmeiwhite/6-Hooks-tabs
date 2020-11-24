import "./App.css";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Experience from "./components/experience/Experience";
import Sidebar from "./components/sidebar/Sidebar";
const url = "https://course-api.com/react-tabs-project";

function App() {
  return (
    <main className="main-wrapper">
      <Sidebar />
      <Experience />
    </main>
  );
}

export default App;
