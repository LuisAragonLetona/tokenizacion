import React, { useState } from 'react';
import ChatForm from './ChatForm';

function ChatApp() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [chatHistories, setChatHistories] = useState({
        'Madai': [],
        'Carlos': [],
        'Luis': [],
        'Raúl': [],
        'Juan': [],
    });

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

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
                    <ChatForm selectedUser={selectedUser} chatHistory={chatHistories[selectedUser]} setChatHistory={setChatHistories} />
                ) : (
                    <p>Selecciona un usuario para chatear</p>
                )}
            </div>
        </div>
    );
}

export default ChatApp;
