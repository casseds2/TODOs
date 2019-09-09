import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDc-4usCbUIU6Ib1dj3X-vneJubIg2rzO8",
	authDomain: "svelte-todo-aa2c1.firebaseapp.com",
	databaseURL: "https://svelte-todo-aa2c1.firebaseio.com",
	projectId: "svelte-todo-aa2c1",
	storageBucket: "",
	messagingSenderId: "435471437908",
	appId: "1:435471437908:web:6281f12cee4b5810fa1dc1",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
