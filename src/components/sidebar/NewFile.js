import React from "react";
import Add from "@material-ui/icons/Add";
import "../../styles/newFile.css";
import firebase from "firebase";
import { storage, db } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import { useState } from "react";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const NewFile = (props) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setUploading(true);

    storage
      .ref(`files/${file.name}`)
      .put(file)
      .then((snapshot) => {
        console.log(snapshot);
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("myFiles").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: file.name,
              size: snapshot._delegate.bytesTransferred,
              fileUrl: url,
              userAvatar: props.user.photoURL,
              userEmail: props.user.email,
              userName: props.user.displayName
            });

            setUploading(false);
            setOpen(false);
            setFile(null);
          });
      });
  };

  return (
    <div className="newFile" onClick={handleOpen}>
      <div className="newFile__container">
        <Add />
        <p>New Cat</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <p>Select files you want to upload!</p>
          {uploading ? (
            <p>Uploading...</p>
          ) : (
            <>
              <input type="file" onChange={handleChange} />
              <button onClick={handleUpload}>Upload</button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default NewFile;
