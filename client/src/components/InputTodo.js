import React, { useState } from 'react';

// const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

const InputTodo = () => {
  const [todo, setTodo] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
          const response = await fetch(`http://localhost:5000/todo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description: todo }),
        });

        if (!response.ok) {
            throw new Error('Failed to add todo');
        }

    } catch (error) {
        console.error(error.message);
    }
    
    setTodo('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="todo-input"
      style={{
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Add a Todo</h2>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your TODO"
          style={{
            flex: 1,
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default InputTodo;
