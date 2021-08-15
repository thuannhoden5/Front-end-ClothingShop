  
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCv9-4ppE-F2K8kN0O3XAd81Jgkcr_k75o",
  authDomain: "crown-streetwear-project.firebaseapp.com",
  databaseURL: "https://crown-streetwear-project.firebaseio.com",
  projectId: "crown-streetwear-project",
  storageBucket: "crown-streetwear-project.appspot.com",
  messagingSenderId: "1043183628230",
  appId: "1:1043183628230:web:f067a30c7e9475e6a0ccc7",
  measurementId: "G-88VVY7TZW3"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;