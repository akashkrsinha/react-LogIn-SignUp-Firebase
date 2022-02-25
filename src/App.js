import React from "react";
import "./style.css";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBYb0S8eS0EUj2eZwYwfxgjlA9tVmH_P6M",
  authDomain: "test-b82ef.firebaseapp.com",
  projectId: "test-b82ef",
  storageBucket: "test-b82ef.appspot.com",
  messagingSenderId: "1063697304869",
  appId: "1:1063697304869:web:d4aba07eb26110c0dc1ecc"
};

const app = initializeApp(firebaseConfig);

export default function App() {

  const signUpEmail = React.useRef();
  const signUpPassword = React.useRef();

  const loginEmail = React.useRef();
  const loginPassword = React.useRef();


  function handelSignUp(){
 
    const auth = getAuth();
createUserWithEmailAndPassword(auth, signUpEmail.current.value, signUpPassword.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    alert("Congrats SignUp SuccessFully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Unable to SignUp")
  });
  }



  function handelLogin(){
    const auth = getAuth();
signInWithEmailAndPassword(auth, loginEmail.current.value, loginPassword.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("LoGin Succesfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Unable to Login")
  });
  }

  return (
    <div>
      <h3>Register YourSelf</h3>
      <input placeholder="Enter Email"  ref={signUpEmail}/><br/><br/>
      <input placeholder="Enter Password"  ref={signUpPassword}/><br/><br/>

      <button onClick={handelSignUp}>SignUp</button>


      <h3>Login YourSelf</h3>
      <input placeholder="Enter Email"  ref={loginEmail}/><br/><br/>
      <input placeholder="Enter Password"  ref={loginPassword}/><br/><br/>

      <button onClick={handelLogin}>LogIn</button>
      
    </div>
  );
}
