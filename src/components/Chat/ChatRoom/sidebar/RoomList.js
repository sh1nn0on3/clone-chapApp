import React from "react";

export default function RoomList() {
  return (
    <div className="overflow-auto ">
      <div className="p-3 bg-slate-100 m-3 rounded-lg flex gap-2 ">
        <div className="mr-3">
          <img
            alt="avt"
            src="https://i.pinimg.com/474x/3d/b7/9e/3db79e59b9052890ea1ffbef0f3970cc.jpg"
            className="w-12 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">Global Chat ^^</h2>
          <p className="font-line text-[0.75rem] ">
            Bạn : đã tham gia Sateline 00:08
          </p>
        </div>
      </div>
    </div>
  );
}
