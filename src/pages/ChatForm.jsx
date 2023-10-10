// ChatForm.jsx
import React, { useState, useEffect } from 'react';

function ChatForm({ selectedUser, chatHistory, setChatHistory }) {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '') {
      return;
    }

    const newMessage = {
      user: "Rudy Griffin",
      text: message,
    };

    // Actualiza el historial de mensajes solo para el usuario seleccionado
    setChatHistory((prevChatHistories) => ({
      ...prevChatHistories,
      [selectedUser]: [...prevChatHistories[selectedUser], newMessage],
    }));
    setMessage('');
  };

  // Extrae el historial de chat del usuario seleccionado
  const selectedUserChatHistory = chatHistory || [];

  useEffect(() => {
    // Guardar el historial de chats en localStorage cada vez que cambie
    localStorage.setItem('chatHistories', JSON.stringify(chatHistory));
  }, [chatHistory]);

  return (
    <div className="chat-form">
      <h2>Chat con {selectedUser}</h2>
      <div className="chat-messages">
        {selectedUserChatHistory.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ChatForm;
