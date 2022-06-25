import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import ListItem from './components/ListItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/person" element={<ListItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
