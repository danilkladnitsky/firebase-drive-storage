import React from "react";
import NewFile from "./NewFile";
import "../../styles/sidebar.css"
const index = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__itemsContainer">
        <NewFile />
      </div>
    </div>
  );
};

export default index;
