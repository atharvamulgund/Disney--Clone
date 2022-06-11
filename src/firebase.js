import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDAkwBlLrzLBYIb5y5fa1s_mZMJH0xNRak",
    authDomain: "disneyplus-clone-f88f4.firebaseapp.com",
    databaseURL: "https://disneyplus-clone-f88f4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "disneyplus-clone-f88f4",
    storageBucket: "disneyplus-clone-f88f4.appspot.com",
    messagingSenderId: "51239196458",
    appId: "1:51239196458:web:dab4cc5c15354633623053",
    measurementId: "G-7SD90ZY8Q0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logout,
};