import React from "react";
import { FaTablets } from "react-icons/fa";
import "./Content.css";

export default function Experience({ tab }) {
  console.log(tab);

  return (
    <section>
      {" "}
      <div className="main-content" key={tab.id}>
        <p className="designation"> Full Stack Web Developer</p>
        <button className="company">{tab.company}</button>
        <p>{tab.dates}</p>
        <div>
          <FaTablets />
          <p>{tab.duties}</p>
        </div>
      </div>
    </section>
  );
}
