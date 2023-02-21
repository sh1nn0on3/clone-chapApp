import React from "react";
import { Emoji } from "emoji-picker-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  return (
    <div className="p-3 border-b border-slate-300 w-full flex justify-between items-center">
      <div className="flex gap-2">
        <div>
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/chataap-34af1.appspot.com/o/images%2Frooms_avatar%2Fpe0dBPnY8yAkOwdiCUDU%2F1666191758067_99085_fe7f3343-7ef2-428c-a290-fd18c860d712_thumbnail.png?alt=media&token=fb8b602b-7a9f-42e0-9214-fd371218cb21"
            className="w-10 h-10 rounded-full object-cover "
          />
        </div>
        <div className="">
          <h2 className="font-bold flex gap-1">
            Global chat <Emoji unified="1f423" size="25" />
          </h2>
          <p className="text-[10px] font-sans">Hoạt động 15p trước ...</p>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faEllipsis} className="text-red-500 text-2xl pr-2" />
      </div>
    </div>
  );
}
