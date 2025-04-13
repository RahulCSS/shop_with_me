import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { hideWindow } from '../../Store/ChatSlice';

const ChatWindow = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [];
  });

  const chatRef = useRef(null);
  const handleCloseWindow = () => {
    dispatch(hideWindow());
  };
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text) => {
    const newMsg = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' ,second: '2-digit'}),
    };
    setMessages((prev) => [...prev, newMsg]);

    const randomResponse = () => {
      const replies = [
        "Thanks for reaching out!",
        "We'll get back to you shortly.",
        "How can I assist you today?",
        "Appreciate your message!",
        "Let me check on that for you.",
      ];
      
      const randomIndex = Math.floor(Math.random() * replies.length);
      return replies[randomIndex];
    };

    
    // Simulate a bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        id: Date.now() + 1,
        text: randomResponse(),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second: '2-digit' }),
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className='flex items-center justify-between bg-blue-600  border-b'>
        <p className=" p-2 text-white text-lg font-semibold">Chat with us</p>
        <span className="cursor-pointer" onClick={() => handleCloseWindow()}>
          <img className="w-[3rem] h-[3rem]"src="./down-arrow.png"/>
        </span>
      </div>
      <div ref={chatRef} className="flex-grow overflow-y-auto p-4 bg-gray-100">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} {...msg} />
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;