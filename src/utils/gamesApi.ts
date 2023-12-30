import { collection, getDocs, orderBy, query } from "firebase/firestore";
import db from "../firebaseConfig";
import Game from '../types/Types'


const getGames = async () => {
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