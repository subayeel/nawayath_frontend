import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyA--rxZTHTpQeCe5Z0n407kSFjnIwGcZPU",
	authDomain: "nawayath-foundation-2c872.firebaseapp.com",
	projectId: "nawayath-foundation-2c872",
	storageBucket: "nawayath-foundation-2c872.appspot.com",
	messagingSenderId: "131961899038",
	appId: "1:131961899038:web:3f73efa188b79bc31a060f",
};

// Use this to initialize the firebase App
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);

export const authentication = getAuth(app)
