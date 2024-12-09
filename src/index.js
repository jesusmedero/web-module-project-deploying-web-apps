import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import './index.css';
import './reset.css';
import AppFunctional from './App';
import AppClass from './AppClass';


const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <h1>THE GRID</h1>
    <nav>
      <NavLink to="/">Functional</NavLink>
      <NavLink to="/class-based">Class-Based</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<AppFunctional className="functional" />} />
      <Route path="class-based" element={<AppClass className="class-based" />} />
    </Routes>
  </BrowserRouter>
)