import React, { useCallback, useState } from 'react';
import {
  LoginSocialGoogle
} from 'reactjs-social-login'
import Loading from "./loading";

const CLIENT_ID = '80846055020-t2ktehe284s1uab1jt1219f0b2r9v7kc.apps.googleusercontent.com'

const SocialSignUpButton = (props) => {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState(null)

  const onLoginStart = useCallback(() => {
    //alert('login start')
  }, [])

  const onLogoutFailure = useCallback(() => {
    //alert('login failure')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    //alert('logout success')
  }, [])
  return (
    <LoginSocialGoogle
      client_id={CLIENT_ID}
      onLogoutFailure={onLogoutFailure}
      onLogoutSuccess={onLogoutSuccess}
      onLoginStart={onLoginStart}
      onResolve={props.handleResolve}
      onReject={(err) => {
        console.log(err)
      }}
    >
      <button className={props.className} >
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
    </LoginSocialGoogle>
  )
}

export default SocialSignUpButton;