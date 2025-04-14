import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <InputTodo />
            <ListTodo />
          </>
        } />
        <Route path="/todo/:id" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
