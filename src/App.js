import { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesApp/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
