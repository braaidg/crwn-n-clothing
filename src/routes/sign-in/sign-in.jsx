import SignUpForm from '../../components/sign-up-form/sign-up-form';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';


function SignIn() {


  const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    

  return (
    <div>
        <h1>Sign in Page</h1>
        <button onClick={logGoogleUser}>
            Sign in with google Popup
        </button>
        <SignUpForm/>
    </div>
  )
}

export default SignIn;


// import { useEffect } from 'react';

// import { getRedirectResult } from 'firebase/auth';
// import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';

  // useEffect( () => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   })()
  // }, []);

  //  <button onClick={signInWithGoogleRedirect}>
  //     Sign in with google Redirect
  // </button> 
