import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Building own component library</h1>
      <Button type="primary">Click me</Button>
      <br />
      <Button type="disabled">Disabled button</Button>
    </div>
  );
}

export default App;
