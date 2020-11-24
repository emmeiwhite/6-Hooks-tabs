import React from "react";
import { FaTablets } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./Content.css";

export default function Experience({ tab }) {
  console.log("TAB");
  console.log(tab);
  return (
    <section>
      {" "}
      {Object.keys(tab).length > 0 && (
        <div className="main-content" key={tab.id}>
          <p className="designation"> Full Stack Web Developer</p>
          <button className="company">{tab.company}</button>
          <p className="date">{tab.dates}</p>
          {tab.duties.map((duty, index) => (
            <div className="duties-wrapper" key={index}>
              <FaAngleDoubleRight className="bullets" />

              <p className="duties">{duty}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
