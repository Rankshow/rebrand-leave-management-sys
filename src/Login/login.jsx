import React, { useState } from "react";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin =  (e) => {
    e.preventDefault();

    //Authenticating a user
    if(document.activeElement.name  === "Login"){
      try {
        signInWithEmailAndPassword(auth, email, password);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);
            Swal.fire({
              icon: "success",
              title: "Successfully logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch(error) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Incorrect email or password.",
              showConfirmButton: true,
            });
          },
        });
      }
    } else if(document.activeElement.name === "Register") { 
      try {
        createUserWithEmailAndPassword(auth, email, password)
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);
            Swal.fire({
              icon: "success",
              title: "Successfully register and logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (error) {
        console.log(error)
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Incorrect email or password.",
              showConfirmButton: true,
            });
          },
        });
      }
    }   
  };

  // rendering to the Dom
  return (
    <div className=" max-w-3xl h-screen flex items-center justify-center mx-auto">
      <form className="md:w-[50vw] w-[380px] text-center shadow-slate-800 rounded-se-md flex justify-center flex-col items-center h-[500px] bg-black">
        <h1 className="text-2xl md:text-2xl font-medium text-white mb-3">
          Login to Leave management Account
        </h1>
        {/* Email */}
        <label className="ml-[-17em] font-bold mb-1" htmlFor="username">
          Email
        </label>
        <input
          onClick={(e) => setEmail(e.target.value)}
          className="w-80 py-2 rounded-md pl-3 mb-5 outline-none"
          type="text"
          placeholder="enter your email"
        />
        {/* password */}
        <label className="ml-[-15em] font-bold" htmlFor="username">
          Password
        </label>
        <input
          onClick={(e) => setPassword(e.target.value)}
          className="w-80 py-2 rounded-md pl-3 outline-none"
          type="password"
          placeholder="enter your password"
        />
        {/*Login*/}
        <div>
        <button
          onClick={handleLogin}
          className="bg-blue-800 tracking-wide py-2 px-2 mt-3 mr-6 font-bold text-white rounded-md hover:opacity-[.7]"
          name="Login"
        >
          Login
        </button>
        <button
          onClick={handleLogin}
          className="bg-green-500 py-2 px-2 mt-3 font-bold text-white rounded-md hover:opacity-[.7]"
          name="Register"
        >
          Register
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
