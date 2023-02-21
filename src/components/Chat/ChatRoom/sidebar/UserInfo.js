import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function UserInfo() {
  return (
    <div className="flex flex-col p-3 gap-3">
      <div className="w-full flex justify-between items-center ">
        <div>
          <img
            alt="avt"
            className="w-8 hover:cursor-pointer "
            src="https://firebasestorage.googleapis.com/v0/b/chataap-34af1.appspot.com/o/user.png?alt=media&token=84085bd3-d19e-427a-84ed-c5d1d68a01a8"
          />
        </div>
        <div className="font-bold">
          <h2>Chat</h2>
        </div>
        <div className="hover:cursor-pointer">
          {/* <i class="fa-light fa-magnifying-glass"></i> */}
          <FontAwesomeIcon icon={faUserGroup} />
        </div>
      </div>
      <div className="mb-4 px-2 flex items-center bg-slate-100 rounded-full">
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
