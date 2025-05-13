// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './app.css';  // Ensure your CSS file is still imported

// Sample Pages (Home, Profile, Messages)
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav>
            <Link to="/" className="header__link">Home</Link>
            <Link to="/profile" className="header__link">Profile</Link>
            <Link to="/messages" className="header__link">Messages</Link>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
