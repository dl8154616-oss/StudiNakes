import React, { useState } from 'react';


export default function Discussion() {
    const [messages, setMessages] = useState([
        { name: 'David', text: 'How can I access the project templates?' },
        { name: 'Maria', text: 'You can find them under the Resources tab!' },
]);

const [input, setInput] = useState('');


const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { name: 'You', text: input }]);
    setInput('');
};


return (
        <div>
            <h2 className="fw-bold mb-3">Discussion Forum</h2>
                <div className="mb-3 border rounded p-3 bg-light" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {messages.map((m, i) => (
                    <div key={i} className="mb-2">
                        <strong>{m.name}: </strong>
                        <span>{m.text}</span>
                    </div>
            ))}
                </div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)}
                />
             <button className="btn btn-primary" onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}