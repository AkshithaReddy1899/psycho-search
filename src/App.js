import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import List from './components/List';
import ListItem from './components/ListItem';
import Disclamer from './components/Disclamer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/person" element={<ListItem />} />
          <Route path="/disclamer" element={<Disclamer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
