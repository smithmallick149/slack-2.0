// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBh5xWhLL065T2A9eUIwHQNoPWHKAJxTaY',
	authDomain: 'slack-clone-smith.firebaseapp.com',
	projectId: 'slack-clone-smith',
	storageBucket: 'slack-clone-smith.appspot.com',
	messagingSenderId: '969882437184',
	appId: '1:969882437184:web:e83bf75356f547e4aa41a5',
	measurementId: 'G-PLVCL1HN0Q',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
