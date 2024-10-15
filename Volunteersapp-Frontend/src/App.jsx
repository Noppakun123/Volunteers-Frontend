import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <header>Volunteer Website</header>
                
                <nav>
                    <ul className="navbar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<ProjectForm />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
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

// Home component
const Home = () => {
    return <h2>Welcome to the Volunteer Website</h2>;
};

// Project Form component
const ProjectForm = () => {
    return (
        <div className="project-form">
            <div className="form-group">
                <label>Events</label>
                <input type="text" placeholder="Event Name" />
            </div>
            <div className="form-group">
                <label>Hours Logged</label>
                <input type="text" placeholder="Hours" />
            </div>
            <div className="form-group">
                <label>Tasks</label>
                <input type="text" placeholder="Task Name" />
            </div>
            <div className="form-group">
                <label>Volunteers</label>
                <input type="text" placeholder="Volunteer Name" />
            </div>
            <button>Create</button>
        </div>
    );
};

// About component
const About = () => {
    return <h2>About Us</h2>;
};

// Contact component
const Contact = () => {
    return <h2>Contact Us</h2>;
};

// Login component
const Login = () => {
    return (
        <div>
            {/* <h2>Login Page</h2> */}
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label>Volunteer Number</label>
                    <input type="text" placeholder="Enter your volunteer number" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default App;
