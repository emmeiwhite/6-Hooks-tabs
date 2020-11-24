import "./App.css";
import React, { useState, useEffect } from "react";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState({});

  const getTabs = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setLoading(false);
      setTabs(data);
      setActiveTab(data[0]);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getTabs();
  }, []);

  // handleContent
  const handleContent = (id) => {
    const activeTab = tabs.filter((tab) => tab.id === id);
    setActiveTab(activeTab[0]);
  };

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading ...</h1>;
  }

  if (error) {
    return <p>Error ...</p>;
  }

  return (
    <main className="main-wrapper">
      <div class="main-heading">
        <h1 className="main-heading-text">Experience</h1>
      </div>

      {tabs.length > 0 && (
        <section className="content-wrapper">
          <Sidebar tabs={tabs} handleContent={handleContent} />
          <Content tab={activeTab} />
        </section>
      )}
    </main>
  );
}

export default App;
