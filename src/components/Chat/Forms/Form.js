import React from "react";

export default function Form({ children }) {
  return (
    <form>
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center ">
        <h2 className="">Đăng Nhập vào ChatApp</h2>
        <ul className="flex ">
          <li className="p-2 border border-red-500 rounded-full hover:bg-slate-400 transition-all ">
            <img
              alt=""
              src="https://www.xuanphuc.space/static/media/google.cadee8cdb0c0afb1a713.png"
              className="w-12"
            />
          </li>
          <li className="p-2 border border-red-500 rounded-full hover:bg-slate-400 transition-all translate-x-4 ">
            <img
              alt=""
              src="https://www.xuanphuc.space/static/media/facebook.01a470d813915c298403.png"
              className="w-12"
            />
          </li>
        </ul>
        {children}
      </div>
    </form>
  );
}
