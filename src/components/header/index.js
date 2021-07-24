import React from "react";
import Search from "@material-ui/icons/Search";
import ExpandMore from "@material-ui/icons/ExpandMore";
import "../../styles/header.css";
import { auth, provider } from "../../firebase";
const index = (props) => {
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        props.setUser(null);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img src="logo.png" alt="Firebase Storage Logotype" />
        <span>Catbase Storage</span>
      </div>
      <div className="header__login">
        <img src={props.userPhoto} alt="User Profile" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default index;
