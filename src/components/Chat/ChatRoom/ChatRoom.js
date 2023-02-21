import React from "react";
import ChatWindow from "./chatwindow/ChatWindow";
import Sidebar from "./sidebar/Sidebar";

export default function ChatRoom() {
  return (
    <div className="w-full flex h-[100vh] ">
      <div className="w-[40%] border-r border-slate-300">
        <Sidebar />
      </div>
      <div className="w-[60%] ">
        <ChatWindow />
      </div>
    </div>
  );
}
