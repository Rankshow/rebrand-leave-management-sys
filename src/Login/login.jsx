import React, { useState } from "react";
import Swal from "sweetalert2";

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = "uwaomaobinna20@gmail.com";
  const adminPassword = "rankshow20";

  const [email, setEmail] = useState("uwaomaobinna20@gmail.com");
  const [password, setPassword] = useState("rankshow20");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem("is_authenticated", true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: "success",
            title: "Successfully logged in!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
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
  };
  return (
    <div className="bg-slate-400 max-w-3xl h-screen flex items-center justify-center mx-auto">
      <form className="flex justify-center flex-col items-center ">
        <h1 className="text-2xl md:text-2xl font-medium text-red-800 mb-3">
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
          value={email}
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
          value={password}
          placeholder="enter your password"
        />
        {/*Login*/}
        <button
          onClick={handleLogin}
          className="bg-blue-800 py-2 px-2 mt-3 font-bold text-white rounded-md hover:opacity-[.7]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
