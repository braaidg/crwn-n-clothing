import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzeTZ-Yx6gdopq4Ll2BfciutUetVF8BLE",
  authDomain: "crown-clothing-db-8fe1d.firebaseapp.com",
  projectId: "crown-clothing-db-8fe1d",
  storageBucket: "crown-clothing-db-8fe1d.appspot.com",
  messagingSenderId: "910061581605",
  appId: "1:910061581605:web:b88369e07634ca45d496cc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch(e) {
      console.log("Error creating user", e.message);
    }

    return userDocRef;

  }

  //CHECK IF USER DATA EXISTS.
  
  // IF USERDATA DOESNT EXIST
  //CREATE / SET THE DOCUMENT WITH THE DATA FORM USERAUTH IN MY COLLECTION


  //RETURN USERDOCREF

};