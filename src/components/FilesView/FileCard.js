import React from "react";
import "../../styles/FileCard.css";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const FileCard = ({ name, fileUrl}) => {
  console.log(fileUrl);
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
