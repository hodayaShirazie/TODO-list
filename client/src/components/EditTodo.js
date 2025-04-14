import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditTodo.css';

// const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';


const EditTodo = () => {
  const { id } = useParams(); 
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  // Fetch the todo details based on the id
  useEffect(() => {
    axios
      .get(`http://localhost:5000/todo/${id}`)
      .then((res) => setDescription(res.data.description))
      .catch((err) => console.error('Failed to fetch todo:', err));
  }, [id]);

  const handleUpdate = () => {
    if (!description.trim()) return;

    // Update the todo in the database
    axios
      .put(`http://localhost:5000/todo/${id}`, { description })
      .then(() => navigate('/'))  // Redirect to the main page after update
      .catch((err) => console.error('Failed to update todo:', err));
  };

  return (
    <div className="edit-container">
      <h2>Edit Todo</h2>
      <textarea
        className="edit-textbox"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
      />
      <button className="edit-button" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default EditTodo;
