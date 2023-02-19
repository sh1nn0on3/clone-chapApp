import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Form from "./Form";

export default function Login() {
  const [emailInput, setEmailInput] = useState("");

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
        <div>
          <p className="">Hoặc đăng nhập với email và mật khẩu của bạn:</p>
          <div className="mt-5">
            <label className="p-3">Email :</label>
            <input
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
              placeholder="Email cua ban ..."
              className="border border-gray-400 w-full h-8 p-4 rounded-md focus:outline-none focus:border-emerald-400 "
              autoFocus
            />
          </div>
          <div className="mt-5">
            <label className="p-3">Password :</label>
            <input
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
              placeholder="Mat khau cua ban ..."
              className="border border-gray-400 w-full h-8 p-4 rounded-md focus:outline-none focus:border-emerald-400 "
              autoFocus
            />
          </div>
        </div>
      </Form>
    </>
  );
}
