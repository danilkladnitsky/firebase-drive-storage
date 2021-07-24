import React from "react";
import "../../styles/FileCard.css";
const FileCard = ({ name, fileUrl}) => {
  return (
    <div className="fileCard">
      <a href={fileUrl} target="_blank">
        <div
          className="fileCard--top"
          style={{
            backgroundImage: `url(${fileUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        </div>
        <div className="fileCard--bottom">
          <p>{name}</p>
        </div>
      </a>
    </div>
  );
};

export default FileCard;
