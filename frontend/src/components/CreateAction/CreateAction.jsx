import React, { useState } from "react";
import "./CreateAction.css";

const CreateAction = () => {
  const [activeTab, setActiveTab] = useState("task");

  return (
    <section className="create-action">
      <h2 className="create-action__title">Create Action</h2>
      <div className="create-action__divider" />

      <div className="create-action__inner">
        <div className="create-action__tabs">
          <button
            type="button"
            className={`create-action__tab ${
              activeTab === "task" ? "active" : ""
            }`}
            onClick={() => setActiveTab("task")}
          >
            Add Task
          </button>

          <button
            type="button"
            className={`create-action__tab ${
              activeTab === "announcement" ? "active" : ""
            }`}
            onClick={() => setActiveTab("announcement")}
          >
            Add Announcement
          </button>
        </div>

        <input
          type="text"
          className="create-action__input"
          placeholder="Add task / announcement..."
        />

        <input
          type="text"
          className="create-action__input"
          placeholder="Assign to (FE/SE/Club)"
        />

        <div className="create-action__button-wrap">
          <button className="create-action__button">Create</button>
        </div>
      </div>
    </section>
  );
};

export default CreateAction;
