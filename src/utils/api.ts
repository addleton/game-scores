import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
    OrderByDirection,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import axios from "axios";
import { getRandomGames, totalScore } from "./utils";
import {
    FirebaseGame,
    FirebaseUserGame,
    RawgGame,
    User,
    UserSignUp,
} from "../types/Types";

export const checkUsernames = async (username: string) => {
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

export const createUser = async (userDetails: UserSignUp) => {
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
        const userData = userDoc.data();
        const user = {
            uid,
            ...userData,
        };
        console.log(user);
        return user;
    } catch (err) {
        console.error("Unable to sign in:", err);
        return null;
    }
};

export const getSignedInUserInfo = async (uid: string) => {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        const userData = userDoc.data();
        const user = {
            uid,
            ...userData,
        };
        return user;
    } catch (err) {
        console.error("Error getting signed in user info:", err);
    }
};

export const signOutUser = async () => {
    try {
        const auth = getAuth();
        await signOut(auth);
    } catch (err) {
        console.error("Error signing out user:", err);
    }
};

export const searchGames = async (game: string) => {
    const apiKey = import.meta.env.VITE_REACT_APP_RAWG_KEY;
    try {
        const {
            data: { results },
        } = await axios.get(
            `https://api.rawg.io/api/games?key=${apiKey}&search=${game}&page_size=18`
        );
        return results;
    } catch (err) {
        console.error("Error retrieving game", err);
    }
};

export const checkFirestoreGames = async (id: number) => {
    try {
        const q = query(collection(db, "games"), where("id", "==", id));
        const data = await getDocs(q);
        const game = data.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        if (game.length === 0) {
            return false;
        } else {
            return true;
        }
    } catch (err) {
        console.error("Error checking firestore games:", err);
    }
};

export const getSingleGame = async (id: number) => {
    const apiKey = import.meta.env.VITE_REACT_APP_RAWG_KEY;
    try {
        const { data } = await axios.get(
            `https://api.rawg.io/api/games/${id.toString()}?key=${apiKey}`
        );
        return data;
    } catch (err) {
        console.error("Could not get single game:", err);
    }
};

export const addGame = async (
    game: RawgGame,
    user: any,
    gameplay: number,
    narrative: number,
    soundtrack: number,
    artDirection: number,
    enjoyment: number
) => {
    const finalScore = totalScore(
        gameplay,
        narrative,
        soundtrack,
        artDirection,
        enjoyment
    );

    try {
        await addDoc(collection(db, "games"), {
            id: game.id,
            name: game.name,
            img: game.background_image,
            alt_img: game.background_image_additional,
            developers: game.developers,
            description: game.description_raw,
            esrb_rating: game.esrb_rating,
            genres: game.genres,
            metacritic: game.metacritic,
            platforms: game.platforms,
            publishers: game.publishers,
            released: game.released,
            avg_gameplay: gameplay,
            avg_narrative: narrative,
            avg_soundtrack: soundtrack,
            avg_art_direction: artDirection,
            avg_enjoyment: enjoyment,
            avg_final_score: finalScore,
            total_scores: 1,
        });

        await addDoc(collection(db, "userScores"), {
            user_id: user.uid,
            username: user.username,
            game_id: game.id,
            gameplay: gameplay,
            narrative: narrative,
            soundtrack: soundtrack,
            art_direction: artDirection,
            enjoyment: enjoyment,
            final_score: finalScore,
            name: game.name,
            background_image: game.background_image,
            timestamp: serverTimestamp(),
        });
        return true;
    } catch (err) {
        console.error("Error adding game:", err);
        return false;
    }
};

export const getGameFromFirestore = async (gameId: string) => {
    try {
        const querySnapshot = await getDocs(
            query(collection(db, "games"), where("id", "==", Number(gameId)))
        );
        const data = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return data[0];
    } catch (err) {
        console.error("Error retrieving games from Firestore:", err);
    }
};

export const addScore = async (
    user: User,
    gameplay: number,
    narrative: number,
    soundtrack: number,
    artDirection: number,
    enjoyment: number,
    id: number
) => {
    const finalScore = totalScore(
        gameplay,
        narrative,
        soundtrack,
        artDirection,
        enjoyment
    );

    try {
        const querySnapshot1 = await getDocs(
            query(collection(db, "games"), where("id", "==", id))
        );
        const [game] = querySnapshot1.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as FirebaseGame;
        });

        await addDoc(collection(db, "userScores"), {
            user_id: user.uid,
            username: user.username,
            game_id: Number(id),
            gameplay: Number(gameplay),
            narrative: Number(narrative),
            soundtrack: Number(soundtrack),
            art_direction: Number(artDirection),
            enjoyment: Number(enjoyment),
            final_score: finalScore,
            name: game.name,
            background_image: game.img,
            timestamp: serverTimestamp(),
        });
        const querySnapshot2 = await getDocs(
            query(collection(db, "userScores"), where("game_id", "==", id))
        );

        let currGameplay = 0;
        let currNarrative = 0;
        let currSoundtrack = 0;
        let currArtDirection = 0;
        let currEnjoyment = 0;
        let currFinalScore = 0;
        let docCount = 0;

        const allUserScores = querySnapshot2.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as FirebaseUserGame;
        });

        allUserScores.forEach((userScore) => {
            currGameplay += userScore.gameplay;
            currNarrative += userScore.narrative;
            currSoundtrack += userScore.soundtrack;
            currArtDirection += userScore.art_direction;
            currEnjoyment += userScore.enjoyment;
            currFinalScore += userScore.final_score;
            docCount++;
        });

        const newGameplay = currGameplay / docCount;
        const newNarrative = currNarrative / docCount;
        const newSoundtrack = currSoundtrack / docCount;
        const newArtDirection = currArtDirection / docCount;
        const newEnjoyment = currEnjoyment / docCount;
        const newFinalScore = currFinalScore / docCount;

        const gameDocs = await getDocs(
            query(collection(db, "games"), where("id", "==", id))
        );
        const gameDoc = gameDocs.docs[0].ref;

        await updateDoc(gameDoc, {
            avg_gameplay: Number(newGameplay.toFixed(1)),
            avg_narrative: Number(newNarrative.toFixed(1)),
            avg_soundtrack: Number(newSoundtrack.toFixed(1)),
            avg_art_direction: Number(newArtDirection.toFixed(1)),
            avg_enjoyment: Number(newEnjoyment.toFixed(1)),
            avg_final_score: Number(newFinalScore.toFixed(1)),
            total_scores: docCount,
        });

        return true;
    } catch (err) {
        console.error("Error adding game:", err);
        return false;
    }
};

export const checkUserScored = async (userId: string, gameId: string) => {
    try {
        const querySnapshot = await getDocs(
            query(
                collection(db, "userScores"),
                where("user_id", "==", userId),
                where("game_id", "==", Number(gameId))
            )
        );
        const data = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        console.log(data);
        if (data.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error("Error checking if user has scored game:", err);
    }
};

export const getAllFirestoreGames = async (
    sort: string,
    order: OrderByDirection
) => {
    try {
        const querySnapshot = await getDocs(
            query(collection(db, "games"), orderBy(sort, order))
        );
        const games = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as FirebaseGame;
        });
        return games;
    } catch (err) {
        console.error("Error getting all games from Firestore:", err);
    }
};

export const getAndStoreGames = async (variable: string) => {
    try {
        const querySnapshot = await getDocs(
            query(collection(db, "games"), where(`avg_${variable}`, "==", 5))
        );
        const data = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        const randomGames = getRandomGames(data, 5);
        const timestamp = Date.now();
        localStorage.setItem(
            `cached_${variable}`,
            JSON.stringify([...randomGames, timestamp])
        );
    } catch (err) {
        console.error("Error getting or storing games:", err);
    }
};

export const getCachedGames = (variable: string) => {
    const cachedGames = localStorage.getItem(`cached_${variable}`);
    if (cachedGames) {
        const data = JSON.parse(cachedGames);
        const cachedData = data.filter((entry: FirebaseGame) => {
            return typeof entry === "object";
        });
        const [cachedTimestamp] = data.filter((entry: FirebaseGame) => {
            return typeof entry === "number";
        });

        const currentTime = Date.now();

        if (currentTime - cachedTimestamp < 24 * 60 * 60 * 1000) {
            return cachedData;
        } else {
            return null;
        }
    }
};

export const writeGamesToLocal = async (games: FirebaseGame[]) => {
    try {
        localStorage.setItem(
            "cachedData",
            JSON.stringify({ games, timestamp: Date.now() })
        );
    } catch (err) {
        console.error("Error storing games locally:", err);
    }
};

export const fetchAndStoreGames = async () => {
    let gameplayData = await getCachedGames("gameplay");
    let narrativeData = await getCachedGames("narrative");
    let musicData = await getCachedGames("soundtrack");
    let artData = await getCachedGames("art_direction");
    if (!gameplayData || !narrativeData || !musicData || !artData) {
        await getAndStoreGames("gameplay");
        await getAndStoreGames("narrative");
        await getAndStoreGames("soundtrack");
        await getAndStoreGames("art_direction");
    }
    gameplayData = await getCachedGames("gameplay");
    narrativeData = await getCachedGames("narrative");
    musicData = await getCachedGames("soundtrack");
    artData = await getCachedGames("art_direction");

    return {
        gameplayGames: gameplayData,
        narrativeGames: narrativeData,
        musicGames: musicData,
        artGames: artData,
    };
};

export const getUserGames = async (username: string) => {
    try {
        const querySnapshot = await getDocs(
            query(
                collection(db, "userScores"),
                where("username", "==", username),
                orderBy("timestamp", "desc")
            )
        );
        const userData = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return userData;
    } catch (err) {
        console.error("Error getting user games:", err);
    }
};
