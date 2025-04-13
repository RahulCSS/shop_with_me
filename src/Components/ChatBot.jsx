import React,{useState} from 'react'

const ChatBot = () => {
    const [showChatToolTip, setShowChatToolTip] = useState(false);
    const [showChatWindow, setShowChatWindow] = useState(false);
    const handleChatToolTipClick = () => {
        setShowChatToolTip(!showChatToolTip);
    }
    console.log(showChatToolTip);
  return (
    <div className="fixed bottom-[6rem] right-[3rem] z-50 flex items-center gap-[0.75rem]">
        <div className={`relative ${showChatToolTip ? "hidden" : ""}`}>
            <span className='text-gray-700 border-1 border-dotted  border-gray-400 rounded-full bg-gray-100 p-1'>Chat with us</span>
            <span className='w-[1.75rem] h-[1.75rem] text-center text-gray-700 absolute -top-[1.25rem] -right-[0.8rem] border-2 border-dotted border-gray-300 rounded-full bg-white cursor-pointer'
                    onClick={()=> handleChatToolTipClick()}>x</span>
        </div>
        <div className="w-[6rem] h-[6rem]">
            <img className="w-[5rem] h-[5rem] cursor-pointer border-2 border-gray-300 rounded-full bg-white shadow-lg p-2 hover:shadow-xl transition duration-300 ease-in-out" src="./chat.gif"/>
        </div>
    </div>
  )
}

export default ChatBot