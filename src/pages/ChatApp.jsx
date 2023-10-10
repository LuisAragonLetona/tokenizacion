// ChatApp.jsx
import React, { useState, useEffect } from 'react';
import ChatForm from './ChatForm';

function ChatApp() {
  const [selectedUser, setSelectedUser] = useState(null);

  // Cargar historial de chats desde localStorage al inicio
  const initialChatHistories = JSON.parse(localStorage.getItem('chatHistories')) || {
    'Madai': [],
    'Carlos': [],
    'Luis': [],
    'Raúl': [],
    'Juan': [],
  };
  const [chatHistories, setChatHistories] = useState(initialChatHistories);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    // Guardar historial de chats en localStorage cuando cambie
    localStorage.setItem('chatHistories', JSON.stringify(chatHistories));
  }, [chatHistories]);

  return (
    <div className="chat-area">
      <div className="chat-card chat-app">
        <div className="user-list">
          <h2>Usuarios seguidos</h2>
          <ul>
            <li onClick={() => handleUserSelect('Madai')}>Madai Pérez</li>
            <li onClick={() => handleUserSelect('Carlos')}>Carlos Gómez</li>
            <li onClick={() => handleUserSelect('Luis')}>Luis Aragón</li>
            <li onClick={() => handleUserSelect('Raúl')}>Raúl Hernández</li>
            <li onClick={() => handleUserSelect('Juan')}>Juan Granados</li>
          </ul>
        </div>
      </div>
      <div className="chat-card chat-container">
        {selectedUser ? (
          <ChatForm
            selectedUser={selectedUser}
            chatHistory={chatHistories[selectedUser]}
            setChatHistory={setChatHistories}
          />
        ) : (
          <p>Selecciona un usuario para chatear</p>
        )}
      </div>
    </div>
  );
}

export default ChatApp;
