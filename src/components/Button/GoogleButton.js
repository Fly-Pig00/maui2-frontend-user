import React from "react";
import { toast } from "react-toastify";
import { useGoogleLogin } from "react-google-login";
import Loading from "./loading";

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';
//'908533985359-qlbvs483vkpr3i1g3jktroc5pd6ve8u3.apps.googleusercontent.com';

const GoogleButton = (props) => {

  const onFailure = (res) => {
    toast.error("Failed in google login.");
  };

  const { signIn } = useGoogleLogin({
    onSuccess: props.onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline',
  });

  return (
    <button onClick={signIn} className={props.className} >
      {props.isLoading ? (<div className="flex flex-col items-center">
        <Loading width={24} height={24} fill="#FFF" />
      </div>)
        :
        (<>
            <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            {props.children}
          </>
      )}
    </button>
  );
}

export default GoogleButton;