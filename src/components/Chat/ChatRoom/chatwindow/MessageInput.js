import { faArrowRight, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function MessageInput() {
  return (
    <div className=" flex flex-col justify-end h-full ">
      {/* Phần trên Global Chat  */}
      <div className=" max-h-full overflow-y-auto overflow-x-hidden">
        <div className="flex gap-2 items-end p-2 ">
          <div className=" ">
            <img
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/chataap-34af1.appspot.com/o/user.png?alt=media&token=84085bd3-d19e-427a-84ed-c5d1d68a01a8"
              className="w-8"
            />
          </div>
          <div>
            <p className="text-[10px]">Nguyen Van A</p>
            <h2 className="p-1 px-2 bg-slate-300 rounded-full ">Abc</h2>
          </div>
        </div>
      </div>

      {/* Phần dưới messageList */}
      <div className="flex ">
        <button>
          <FontAwesomeIcon
            className="p-2 text-[20px] hover:bg-slate-200 text-red-500 rounded-full transition-all  "
            icon={faImage}
          />
        </button>
        <button>
          <FontAwesomeIcon
            className="p-2 text-[20px] hover:bg-slate-200 text-red-500 rounded-full transition-all  "
            icon={faImage}
          />
        </button>
        <button>
          <FontAwesomeIcon
            className="p-2 text-[20px] hover:bg-slate-200 text-red-500 rounded-full transition-all  "
            icon={faImage}
          />
        </button>
        <div className="w-full flex items-center justify-between bg-slate-100 rounded-full mb-2">
          <div className="w-full">
            <input
              className=" bg-slate-100 focus:outline-none p-2 w-full  rounded-full "
              placeholder="Aa"
              autoFocus
            />
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="mr-4 text-xl text-red-500"
          />
        </div>
      </div>
    </div>
  );
}
