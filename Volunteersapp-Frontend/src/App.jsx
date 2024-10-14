// src/App.jsx --
import React from 'react';
import Events from './Events';
import HoursLogged from './HoursLogged';
import Tasks from './Tasks';
import Volunteers from './Volunteers';

const App = () => {
    return (
        <div>
            <h1>Volunteer Management System</h1>
            <Events />
            <HoursLogged />
            <Tasks />
            <Volunteers />
        </div>
    );
};

export default App;
