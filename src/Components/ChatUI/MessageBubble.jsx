import React from 'react';

const MessageBubble = ({ text, timestamp, sender }) => {
    const isUser = sender === 'user';
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
        <div className={`max-w-xs px-4 py-2 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
          <p className="text-sm">{text}</p>
          <span className="text-xs block mt-1 text-right opacity-70">{timestamp}</span>
        </div>
      </div>
    );
  };
  export default MessageBubble;
  