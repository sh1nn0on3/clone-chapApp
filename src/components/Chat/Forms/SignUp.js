import { signOut } from "@firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { addDocument } from "../../../firebase/service";
import Form from "./Form";

export default function SignUp() {
  const [nameInput, setNameInput] = useState("");

  const [emailInput, setEmailInput] = useState("");

  const [passwordInput, setPasswordInput] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    // loại bỏ thuộc tính mặc định của button 
    e.preventDefault();

    // create user = user/pass 
    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        console.log("signup success");
        const user = userCredential.user;

        // 
        addDocument("users", {
          displayName: nameInput,
          email: emailInput,
          photoURL: "",
          fullPath: "",
          uid: user.uid,
          providerId: user.providerId,
          stickers: [],
          active: serverTimestamp(),
        });

        // Clear input
        setNameInput("");
        setEmailInput("");
        setPasswordInput("");
      })
      .catch((error) => {
        console.log("🚀 ~ file: SignUp.js:43 ~ handleBtn ~ error:", error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Đăng nhập vào ChatApp - Ứng dụng nhắn tin</title>
        <meta
          name="description"
          content="Ứng dụng nhắn tin với giao diện được thiết kế theo phong cách tối giản"
        />
      </Helmet>
      <Form>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="text-center text-sm">
            Hoặc đăng nhập với email và mật khẩu của bạn:
          </p>
          <div className="w-full flex flex-col gap-4 max-w-4xl">
            <input
              className="h-8 p-5 mt-4 w-full border border-gray-400 rounded-2xl outline-none bg-gray-50 "
              placeholder="Họ và tên của bạn ..."
              type="text"
              onChange={(e) => {
                setNameInput(e.target.value);
              }}
              value={nameInput}
            />
            <input
              className="h-8 p-5 w-full border border-gray-400 rounded-2xl outline-none bg-gray-50 "
              placeholder="Email của bạn ..."
              type="text"
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
              value={emailInput}
            />
            <input
              className="h-8 p-5 w-full border border-gray-400 rounded-2xl outline-none  bg-gray-50"
              placeholder="Mật khẩu của bạn ..."
              type="password"
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }}
              value={passwordInput}
            />
          </div>
          <div className="w-full flex gap-2 justify-center items-center mt-4 max-w-2xl ">
            <button
              className="w-full border border-red-500 bg-red-500 text-white font-bold p-4 rounded-full"
              onClick={handleSubmit}
            >
              Đăng ký
            </button>
            <button
              className="w-full border border-red-500 text-red-500 font-bold p-4 rounded-full"
              onClick={() => {
                navigate("/login");
              }}
            >
              Đăng nhập
            </button>
          </div>
          <button className="text-center mt-5 font-bold text-red-500 hover:underline">
            Quên mật khẩu ?
          </button>
          <p className="text-center font-mono text-sm">
            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{" "}
            <span className="text-red-500">Điều khoản sử dụng</span> của chúng
            tôi.
          </p>
        </div>
      </Form>
    </>
  );
}
