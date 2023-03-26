import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameHudTester from './GameHud/GameHudTester';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameHudTester/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
