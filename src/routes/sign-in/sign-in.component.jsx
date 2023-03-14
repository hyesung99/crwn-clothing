import {  sighInwithGooglePopup, 
          createUserDocumentFromAuth,
          signInWithGoogleRedirect,
          auth,
} from '../../utils/firebase/firebase.utils'


import SignUpFrom from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await sighInwithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
}


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
      <SignUpFrom/>
    </div>
  )
}

export default SignIn