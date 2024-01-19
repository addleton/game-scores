import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import db from "../../firebaseConfig";
import Game from "../types/Types";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const getGames = async () => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "games"), orderBy("enjoyment", "desc"))
    );
    const data: Game[] = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() } as Game;
    });
    setGames(data);
  } catch (err) {
    console.log(err);
  }
};

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
    await createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    );
    await addDoc(collection(db, "users"), {
      first_name: userDetails.firstName,
      last_name: userDetails.lastName,
      username: userDetails.username,
    });
  } catch (err) {
    console.error(err);
    return false;
  }
};
