import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#222' }}>
      <div style={{ background: '#222', padding: 32, borderRadius: 12, boxShadow: '0 2px 16px #0004' }}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
