import React, { useState, useEffect } from "react";
import "./Sidebar.css";

export default function Sidebar({ tabs, handleContent }) {
  const [activeTab, setActiveTab] = useState();

  const companies = tabs.map((tab) => ({
    company: tab.company,
    id: tab.id,
  }));

  useEffect(() => {
    setActiveTab(companies[0].id);
  }, []);
  // handleBtnClick | Will also manage active state here and use handleContent props as well
  const handleBtnClick = (id) => {
    handleContent(id);
    setActiveTab(id);
  };
  return (
    <div className="sidebar">
      {companies.map(({ company, id }) => (
        <button
          className={`btn  ${id === activeTab ? "btn-active" : ""}`}
          key={id}
          onClick={() => handleBtnClick(id)}
        >
          {company}
        </button>
      ))}
    </div>
  );
}
