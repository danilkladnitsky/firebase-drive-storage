import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase";
import FileItem from "./FileItem";
import "../../styles/FilesView.css";
import FileCard from "./FileCard";

import Slider from "react-slick";
const FilesView = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    db.collection("myFiles").onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="fileView">
      <div className="fileView__row">
          {files.slice(0, 5).map(({ id, item }) => (
            <FileCard key={id} name={item.caption} fileUrl={item.fileUrl} timestamp={item.timestamp} />
          ))}
      </div>
      <div className="filesView__titles">
        <div className="fileView__titles--left">
          <p>Name</p>
        </div>
        <div className="fileView__titles--right">
          <p>File info</p>
        </div>
      </div>
      {files.map(({ id, item }) => (
        <FileItem
          key={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
        />
      ))}
    </div>
  );
};

export default FilesView;
