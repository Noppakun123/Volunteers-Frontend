import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login'; // นำเข้าคอมโพเนนต์ Login

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <header>Volunteer Website</header>
                <nav>
                    <ul className="navbar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        {/* ลิงก์อื่น ๆ */}
                    </ul>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={<div>Welcome to the Volunteer Website!</div>} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
                <footer>
                    <p>© 2024 Volunteer Organization. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;

