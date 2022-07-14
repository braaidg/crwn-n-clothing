import { useState, useContext } from 'react'

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import { UserContext } from '../../contexts/user.context';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';


import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext)

    // console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };


    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
            setCurrentUser(user)
            resetFormFields();

        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    }

  return (
    <div className='sign-up-container' >
        <h2>Already have an account? </h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>

            <FormInput required
                   label='Email' 
                   name='email'
                   type='email' 
                   onChange={handleChange} 
                   value={email} />
            
            <FormInput required
                   label='Password' 
                   name='password' 
                   type='password' 
                   onChange={handleChange} 
                   value={password} />
            
            <div className='buttons-container'>
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType='google' onClick={signInWithGoogle} >Google sign in</Button>
            </div>

        </form>
    </div>
  )
}

export default SignInForm;