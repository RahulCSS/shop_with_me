import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ChatWindow from "./ChatUI/ChatWindow";
import { showWindow } from "../store/ChatSlice";

const ChatBot = () => {
  const dispatch = useDispatch();
  const showChatWindow = useSelector(state => state.chat.showChat);
  const [showChatToolTip, setShowChatToolTip] = useState(false);
  const handleChatToolTipClick = () => {
    setShowChatToolTip(!showChatToolTip);
  };
  const handleShowChatWindow = () => {
    dispatch(showWindow());
  };
  
  return (
    <div className="fixed bottom-[6rem] right-[3rem] z-50 flex items-center gap-[0.75rem]">
      
      {/* Tooltip for chat icon */}
      <div className={`relative ${showChatToolTip ? "hidden" : ""}`}>
        <span className="text-gray-700 border-1 border-dotted  border-gray-400 rounded-full bg-gray-100 p-1">
          Chat with us
        </span>
        <span
          className="w-[1.75rem] h-[1.75rem] text-center text-gray-700 absolute -top-[1.25rem] -right-[0.8rem] 
                border-2 border-dotted border-gray-300 rounded-full bg-white cursor-pointer"
          onClick={() => handleChatToolTipClick()}
        >
          x
        </span>
      </div>

      {/* Chat icon */}
      <div className="w-[6rem] h-[6rem] ">
        <a onClick={() => handleShowChatWindow()}>
          <img
            className="w-[5rem] h-[5rem] cursor-pointer border-2 border-gray-300 rounded-full bg-white shadow-lg p-2 
                    hover:shadow-xl transition duration-300 ease-in-out"
            src="./chat.gif"
          />
        </a>
      </div>

      {/* Chat window */}
      <div
        className={`absolute bottom-[0] right-[0] w-[22rem] max-w-sm shadow-xl rounded-lg transition-all duration-500 ease-in-out overflow-hidden ${
          showChatWindow
            ? "h-[600px] opacity-300"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatBot;
