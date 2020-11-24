import "./App.css";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";

const url = "https://course-api.com/react-tabs-project";

function App() {
  return (
    <main className="main-wrapper">
      <h1 className="main-heading">Experience</h1>
      <section className="content-wrapper">
        <Sidebar />
        <Content />
      </section>
    </main>
  );
}

export default App;
