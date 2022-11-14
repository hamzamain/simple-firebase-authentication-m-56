import "./App.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "./firebase/firebase.init.js";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();

  const handlerGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error is:", error);
      });
  };

  const handlerGithubSignIn = () => {
    signInWithPopup(auth, githubprovider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };

  const handlerSignOut = () => {
    signOut(auth).then(setUser({})).catch(setUser({}));
  };

  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handlerSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handlerGoogleSignIn}>Google Sign In</button>
          <button onClick={handlerGithubSignIn}>Github Sign In</button>
        </>
      )}
      {user.uid && (
        <div>
          <h3>Name: {user.displayName}</h3>
          <p>
            <i>Email: {user.email}</i>
          </p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
