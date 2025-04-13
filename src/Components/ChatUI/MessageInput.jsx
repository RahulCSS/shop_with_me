import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center p-4 border-t">
      <input
        type="text"
        className="flex-grow px-3 py-2 border rounded-md mr-2 focus:outline-none"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
    </div>
  );
};

export default MessageInput;
