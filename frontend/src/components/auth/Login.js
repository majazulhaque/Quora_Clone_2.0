import React from "react";
import "./Login.css";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { auth1, provider1 } from "../../fb";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Close } from "@material-ui/icons";
import { useState } from "react";
function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Closes = <Close />;

  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebook = () => {
    const auth = getAuth();
    signInWithPopup(auth1, provider1)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  return (
    <div className="main-container">
      <div className="Auth-container">
        <div className="heading-container">
          {/* <h1>Quora</h1> */}
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-dc1b777005095235798e5dbdb6b710dd"
            alt="Quora logo"
          />
          <p>A place to share knowledge and better understand the world</p>
        </div>
        <div className="Auth-main-container">
          <div className="social-container">
            <p>
              By continuing you indicate that you agree to Quora’s{" "}
              <span>Terms of Service</span> and <span>Privacy Policy</span>.
            </p>
            <div onClick={handleSubmit} className="google-div">
              <img
                src="https://img.icons8.com/?size=512&id=17949&format=png"
                alt=""
              />
              <p>Continue with Google</p>
            </div>
            <div onClick={handleFacebook} className="fb-div">
              <img
                src="https://img.icons8.com/?size=512&id=118497&format=png"
                alt=""
              />
              <p>Continue with Facebook</p>
            </div>
            <div onClick={() => setIsModalOpen(true)} className="sign-up-email">
              Sign up with email
            </div>

            <Modal
              open={isModalOpen}
              closeIcon={Closes}
              onClose={() => setIsModalOpen(false)}
              closeOnEsc
              center
              closeOnOverlayClick={false}
              styles={{
                overlay: {
                  height: "auto",
                },
              }}
            >
              <h2 className="sign-up-header">Sign Up</h2>
              <div className="fill-form">
                <form className="sign-up-form" action="">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="What would you like to be called?"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                  />
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Your confirm password"
                  />
                  <button className="sign-up-btn">Sign Up</button>
                </form>
                <div className="sign-up-content">
                  <p>
                    By continuing you indicate that you agree to Quora’s{" "}
                    <span>Terms of Service</span> and{" "}
                    <span>Privacy Policy</span>.
                  </p>
                </div>
              </div>
            </Modal>
          </div>
          <div className="login-container">
            <p>Login</p>
            <form className="login-form" action="">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
              />
              <div className="forgot-pass">
                <span>Forgot password?</span>
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="language">
          <span>हिन्दी </span>
          <i style={{ color: "gray" }} class="fa-solid fa-greater-than"></i>
        </div>
        <div className="footer">
          <span>About </span>
          <span>• </span>
          <span> Privacy </span>
          <span>• </span>
          <span> Careers </span>
          <span>• </span>
          <span> Terms </span>
          <span>• </span>
          <span> Contact </span>
          <span>• </span>
          <span> Languages </span>
          <span>• </span>
          <span> Your Ad Choices </span>
          <span>• </span>
          <span> Press </span>
          <span>• </span>
          <span> © Quora, Inc. 2023 </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
