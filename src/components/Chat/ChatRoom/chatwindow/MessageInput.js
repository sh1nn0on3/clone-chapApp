import {
  faArrowDown,
  faArrowRight,
  faCheck,
  faG,
  faGift,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function MessageInput() {
  return (
    <div className="p-2 flex flex-col justify-end h-full ">
      <div></div>
      <div className="flex">
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
          <FontAwesomeIcon icon={faArrowRight} className="mr-4 text-xl text-red-500" />
        </div>
      </div>
    </div>
  );
}
