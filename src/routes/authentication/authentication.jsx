import SignInForm from '../../components/sign-in-form/sign-in-form';
import SignUpForm from '../../components/sign-up-form/sign-up-form';
import './authentication.styles.scss';


function Authentication() {


  return (
    <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
}

export default Authentication;


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
