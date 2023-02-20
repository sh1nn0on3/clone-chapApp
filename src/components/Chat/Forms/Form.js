import React from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// const fbProvider = firebase.auth

export default function Form({ children }) {
  // login fb
  const handleFacebookLogin = () => {
    FacebookAuthProvider()
  };

  return (
    <form>
      <div className="min-h-screen flex flex-col items-center p-12 gap-8">
        <div>
          <img
            alt="avt"
            src="https://www.xuanphuc.space/static/media/logo-full.9869b084c6f8eb254212.png"
            className="w-32"
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl text-center">
            Đăng nhập vào SateLLite
          </h1>
        </div>
        <div className="flex gap-4">
          <ul className="border-2 border-red-500 p-3 rounded-full cursor-pointer hover:bg-slate-200 transition-all ">
            <li>
              <img
                alt=""
                src="https://www.xuanphuc.space/static/media/google.cadee8cdb0c0afb1a713.png"
                className="w-8"
              />
            </li>
          </ul>
          <ul className="border-2 border-red-500 p-3  rounded-full cursor-pointer hover:bg-slate-200 transition-all ">
            <li>
              <img
                alt=""
                src="https://www.xuanphuc.space/static/media/facebook.01a470d813915c298403.png"
                className="w-8"
                onClick={handleFacebookLogin}
              />
            </li>
          </ul>
        </div>
        {children}
      </div>
    </form>
  );
}
