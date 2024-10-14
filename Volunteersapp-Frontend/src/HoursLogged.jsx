// src/HoursLogged.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HoursLogged = () => {
    const [hours, setHours] = useState([]);
    const [hoursValue, setHoursValue] = useState('');
    const [hoursId, setHoursId] = useState(null);

    const fetchHours = async () => {
        const response = await axios.get('http://localhost:3000/hours-logged');
        setHours(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (hoursId) {
            await axios.put(`http://localhost:3000/hours-logged/${hoursId}`, { hours: hoursValue });
        } else {
            await axios.post('http://localhost:3000/hours-logged', { hours: hoursValue });
        }
        setHoursValue('');
        setHoursId(null);
        fetchHours();
    };

    const handleEdit = (hour) => {
        setHoursId(hour.id);
        setHoursValue(hour.hours);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/hours-logged/${id}`);
        fetchHours();
    };

    useEffect(() => {
        fetchHours();
    }, []);

    return (
        <div>
            <h2>Hours Logged</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={hoursValue}
                    onChange={(e) => setHoursValue(e.target.value)}
                    placeholder="Hours"
                    required
                />
                <button type="submit">{hoursId ? 'Update' : 'Create'}</button>
            </form>
            <ul>
                {hours.map((hour) => (
                    <li key={hour.id}>
                        {hour.hours}
                        <button onClick={() => handleEdit(hour)}>Edit</button>
                        <button onClick={() => handleDelete(hour.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HoursLogged;
