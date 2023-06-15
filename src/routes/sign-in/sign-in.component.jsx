import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // this useEffect is only run on mount
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocReference = await createUserDocumentFromAuth(
          response.user
        );
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocReference = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
    </div>
  );
};
export default SignIn;
