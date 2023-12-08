import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';
import Login from './components/Login';
import TicketSubmit from './components/TicketSubmit';
import ViewTicket from './components/ViewTicket';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/submit-ticket" element={<TicketSubmit />} />
          <Route path="/view-tickets" element={<ViewTicket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
