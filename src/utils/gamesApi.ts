import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db, storage } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import axios from "axios";

// export const getGames = async () => {
//   try {
//     const querySnapshot = await getDocs(
//       query(collection(db, "games"), orderBy("enjoyment", "desc"))
//     );
//     const data: Game[] = querySnapshot.docs.map((doc) => {
//       return { id: doc.id, ...doc.data() } as Game;
//     });
//     setGames(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const checkUsernames = async (username) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "users"), where("username", "==", username))
    );
    const user = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    if (user.length === 0) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};

export const createUser = async (userDetails) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    );
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      first_name: userDetails.firstName,
      last_name: userDetails.lastName,
      username: userDetails.username,
      img_url: "",
    });
  } catch (err) {
    console.error("Error creating account:", err);
    return false;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const auth = getAuth();
    const {
      user: { uid },
    } = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, "users", uid));
    const user = userDoc.data();
    return user;
  } catch (err) {
    console.error("Unable to sign in:", err);
    return false;
  }
};

export const searchGames = async (game: string) => {
  const apiKey = import.meta.env.VITE_REACT_APP_RAWG_KEY;
  try {
    const {data: {results}} = await axios.get(
      `https://api.rawg.io/api/games?key=${apiKey}&search=${game}`
    );
    return results
  } catch (err) {
    console.error("Error retrieving game", err);
  }
};
