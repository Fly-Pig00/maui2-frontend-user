import React, { useCallback, useRef, useState } from "react";
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter
} from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton
} from "react-social-login-buttons";

const REDIRECT_URI = "http://localhost:3000/account/login";

const SocialButtons = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const amazonRef = useRef();
  const instagramRef = useRef();
  const googleRef = useRef();
  const facebookRef = useRef();
  const microsoftRef = useRef();
  const linkedinRef = useRef();
  const githubRef = useRef();
  const pinterestRef = useRef();
  const twitterRef = useRef();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutFailure = useCallback(() => {
    alert("logout fail");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  return (
    <>
      <div className={`App ${provider && profile ? "hide" : ""}`}>
        <h1 className="title">ReactJS Social Login</h1>
        <LoginSocialGoogle
          client_id="1024616921919-hns9m0q39jb21qrp4kpb57kti2sd5t1n.apps.googleusercontent.com"
          onLogoutFailure={onLogoutFailure}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            console.log(data, "data");
            console.log(provider, "provider");
          }}
          onReject={(err) => {
            console.log("hbhbdhd", err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      </div>
    </>
  );
};

export default SocialButtons;
