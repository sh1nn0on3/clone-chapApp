import React from "react";
import { Helmet } from "react-helmet-async";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Đăng nhập vào ChatApp - Ứng dụng nhắn tin</title>
        <meta
          name="description"
          content="Ứng dụng nhắn tin với giao diện được thiết kế theo phong cách tối giản"
        />
      </Helmet>
      <form className="min-h-screen flex flex-col gap-3 items-center justify-center ">
        <h2 className="">Đăng Nhập vào ChatApp</h2>
        <ul className="flex ">
          <li className="p-2 border border-red-500 rounded-full">
            <img
              alt=""
              src="https://www.xuanphuc.space/static/media/google.cadee8cdb0c0afb1a713.png"
              className="w-12 "
            />
          </li>
          <li className="p-2 border border-red-500 rounded-full">
            <img
              alt=""
              src="https://www.xuanphuc.space/static/media/facebook.01a470d813915c298403.png"
              className="w-12"
            />
          </li>
        </ul>
        <p></p>
      </form>
    </>
  );
}
