import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCC-4zeRyi5Ho_AyLsm6h7HKZkk1vBgoHs",
  authDomain: "netflix-clone-9bc72.firebaseapp.com",
  projectId: "netflix-clone-9bc72",
  storageBucket: "netflix-clone-9bc72.appspot.com",
  messagingSenderId: "374727936738",
  appId: "1:374727936738:web:94ccf6915ae0fbed256cbb",
  measurementId: "G-HFHN6G623L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(
      collection(db, "user", {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      })
    );
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, db, login, signUp, logout };
