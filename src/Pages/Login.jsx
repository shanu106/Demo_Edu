import React from "react";
import Signup from "./Signup";

const Login = ({ isLoginFormOpen,isSignUpFormOpen, setSignUpFormOpen, setLoginFormOpen }) => {
  return (
    <div
      className={`${
        isLoginFormOpen ? "fixed" : "hidden"
      } md:w-1/3 right-0 md:h-auto w-3/4 pb-2 bg-[#dee2e6] shadow-2xl shadow-black rounded-2xl`}
    >
      <div className="flex flex-wrap justify-center">
        <h2 className="w-full text-center mt-3 text-2xl font-bold font-serif text-[#212529]">
          Login
        </h2>

        <div className="p-8 flex w-full flex-col justify-between gap-8">
          <input
            type="email"
            placeholder="Email"
            className="placeholder:text-[#212529] outline-0 stroke-1 border-b-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="placeholder:text-[#212529] outline-0 stroke-1 border-b-2 w-full"
          />
        </div>

        <button className="bg-[#212529] px-4 py-2 text-[#e9ecef] rounded-lg mb-4">
          Login
        </button>

        <div className="w-full text-center mb-4">
          <p className="text-[#495057]">
            Don't have an account?{" "}
            <button
              onClick={()=>{
                setSignUpFormOpen(!isSignUpFormOpen);
                setLoginFormOpen(!isLoginFormOpen);
              }}
              className="text-[#212529] font-semibold underline hover:text-[#343a40]"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
