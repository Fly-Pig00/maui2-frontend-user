import React, { useCallback, useState } from 'react';
import {
  LoginSocialGoogle
} from 'reactjs-social-login'

// CUSTOMIZE ANY UI BUTTON
import {
  GoogleLoginButton
} from 'react-social-login-buttons'

const CLIENT_ID = '730784824589-ggsc9gjsravfs3r52h4hu3sirbfs47si.apps.googleusercontent.com'

const SocialButton = ({ handleResolve }) => {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState(null)

  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])

  const onLogoutFailure = useCallback(() => {
    alert('login failure')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])
  return (
    <LoginSocialGoogle
      client_id={CLIENT_ID}
      onLogoutFailure={onLogoutFailure}
      onLogoutSuccess={onLogoutSuccess}
      onLoginStart={onLoginStart}
      onResolve={(res) => {
        //setProvider(provider);
        console.log("gdata", res);
       // setProfile(data);
        //console.log(err)
      }}
      fetch_basic_profile={true}
      onReject={(err) => {
        console.log(err)
      }}
    >
      <GoogleLoginButton />
    </LoginSocialGoogle>
  )
}

export default SocialButton;