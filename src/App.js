import { useState } from "react";
import "./App.css";
import FilesView from "./components/FilesView/FilesView";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { auth, provider } from "./firebase";

function App() {
  const [user, setUser] = useState();
  const handleLogin = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (user) {
      auth
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((err) => alert(err.message));
    }
  };
  return (
    <div className="app__main">
      {user ? (
        <>
          <Header userPhoto={user.photoURL} setUser={setUser} />
          <Sidebar user={user} />
          <FilesView />
        </>
      ) : (
        <div className="app__login">
          <img src="logo.png" alt="Firebase Storage" />
          <button onClick={handleLogin}>Log in to Catbase Storage</button>
        </div>
      )}
    </div>
  );
}

export default App;
