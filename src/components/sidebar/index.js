import React from "react";
import NewFile from "./NewFile";
import "../../styles/sidebar.css"
const index = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__itemsContainer">
        <NewFile user={props.user} />
      </div>
    </div>
  );
};

export default index;
