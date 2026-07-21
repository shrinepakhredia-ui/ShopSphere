import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import {
  auth,
  googleProvider,
} from "../layout/firebase/firebase";

import { saveUser } from "../services/firestore";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // Register

  async function register(name, email, password) {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    await updateProfile(
      userCredential.user,
      {
        displayName: name,
      }
    );

    await saveUser({

      uid: userCredential.user.uid,

      displayName: name,

      email: email,

      photoURL: userCredential.user.photoURL,

    });

    return userCredential;

  }

  // Email Login

  function login(email, password) {

    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  }

  // Google Login

  async function googleLogin() {

    const result =
      await signInWithPopup(
        auth,
        googleProvider
      );

    await saveUser(result.user);

    return result;

  }

  // Forgot Password

  function resetPassword(email) {

    return sendPasswordResetEmail(
      auth,
      email
    );

  }

  // Logout

  function logout() {

    return signOut(auth);

  }

  // Auth Listener

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(

        auth,

        (user) => {

          setCurrentUser(user);

          setLoading(false);

        }

      );

    return unsubscribe;

  }, []);

  return (

    <AuthContext.Provider

      value={{

        currentUser,

        register,

        login,

        googleLogin,

        resetPassword,

        logout,

      }}

    >

      {

        !loading && children

      }

    </AuthContext.Provider>

  );

}

export function useAuth() {

  return useContext(AuthContext);

}