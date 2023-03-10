import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { signOut } from "@firebase/auth";
import { auth } from "../../../../firebase/config";
import { AuthContext } from "../../../../Context/AuthProvider";
import Images from "../../../../assets/img/user.png";

export default function UserInfo() {
  const data = useContext(AuthContext);
  console.log("🚀 ~ file: UserInfo.js:14 ~ UserInfo ~ data:", data);

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div className="flex flex-col p-3 gap-2">
      {/* sidebar chat */}
      <div className="w-full flex justify-between items-center ">
        <div>
          <img
            alt="a"
            className="w-8 rounded-full hover:cursor-pointer "
            src="https://firebasestorage.googleapis.com/v0/b/chataap-34af1.appspot.com/o/user.png?alt=media&token=84085bd3-d19e-427a-84ed-c5d1d68a01a8"
            onClick={handleLogOut}
          />
        </div>
        <div className="font-bold">
          <h2>Chat</h2>
        </div>
        <div className="hover:cursor-pointer">
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
      </div>

      {/* input tìm tin nhắn */}
      <div className=" px-2 flex items-center bg-slate-100 rounded-full">
        <div>
          <p className="px-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </p>
        </div>
        <div className="w-full">
          <input
            className=" focus:outline-none w-full bg-slate-100 rounded-full p-2 font-mono "
            placeholder="Nhắn tin riêng tư "
          />
        </div>
      </div>
    </div>
  );
}
