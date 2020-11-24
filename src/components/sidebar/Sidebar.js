import React from "react";
import "./Sidebar.css";

export default function Sidebar({ tabs, handleContent }) {
  const companies = tabs.map((tab) => ({
    company: tab.company,
    id: tab.id,
  }));
  return (
    <div className="sidebar">
      {companies.map(({ company, id }) => (
        <button className="btn" key={id} onClick={() => handleContent(id)}>
          {company}
        </button>
      ))}
    </div>
  );
}
