"use client";

import { useEffect, useState } from "react";

const EventChat: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="border-2">
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      {/* <button onClick={sendMessage}>Send</button> */}
    </div>
  );
};

export default EventChat;
