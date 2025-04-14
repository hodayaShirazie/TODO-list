import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListTodo.css';
import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/todo`)
    .then((res) => res.json())
      .then((data) => {
        console.log('Fetched todos:', data);
        setTodos(data);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleEdit = (todo_id) => {
    console.log('Edit clicked for ID:', todo_id);
    // Navigate to the EditTodo component, passing the todo_id in the URL
    navigate(`/todo/${todo_id}`);
  };


  const handleDelete = (todo_id) => {
    console.log('Delete clicked for ID:', todo_id);

    // Send DELETE request to server
    axios
        .delete(`http://localhost:5000/todo/${todo_id}`)
        .then(() => {
            // Filter out the deleted todo from the state
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.todo_id !== todo_id));
            console.log('Todo deleted successfully');
        })
        .catch((err) => {
            console.error('Failed to delete todo:', err);
        });
  };

  return (
    <div className="todo-container">
      <table className="todo-table">
        <thead>
          <tr className="todo-header-row">
            <th className="todo-cell">Description</th>
            <th className="todo-cell">Edit</th>
            <th className="todo-cell">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}> {/* Use todo.todo_id instead of todo.id */}
              <td className="todo-cell">{todo.description}</td>
              <td className="todo-cell">
                <button className="todo-button" onClick={() => handleEdit(todo.todo_id)}>
                  Edit
                </button>
              </td>
              <td className="todo-cell">
                <button className="todo-button" onClick={() => handleDelete(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="todo-bottom-space"></div>
    </div>
  );
};

export default ListTodo;
