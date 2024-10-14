import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [volunteerName, setVolunteerName] = useState('');
    const [volunteerId, setVolunteerId] = useState(null);

    const fetchVolunteers = async () => {
        const response = await axios.get('http://localhost:3000/volunteers');
        setVolunteers(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (volunteerId) {
            await axios.put(`http://localhost:3000/volunteers/${volunteerId}`, { name: volunteerName });
        } else {
            await axios.post('http://localhost:3000/volunteers', { name: volunteerName });
        }
        setVolunteerName('');
        setVolunteerId(null);
        fetchVolunteers();
    };

    const handleEdit = (volunteer) => {
        setVolunteerId(volunteer.id);
        setVolunteerName(volunteer.name);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/volunteers/${id}`);
        fetchVolunteers();
    };

    useEffect(() => {
        fetchVolunteers();
    }, []);

    return (
        <div>
            <h2>Volunteers</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={volunteerName}
                    onChange={(e) => setVolunteerName(e.target.value)}
                    placeholder="Volunteer Name"
                    required
                />
                <button type="submit">{volunteerId ? 'Update' : 'Create'}</button>
            </form>
            <ul>
                {volunteers.map((volunteer) => (
                    <li key={volunteer.id}>
                        {volunteer.name}
                        <button onClick={() => handleEdit(volunteer)}>Edit</button>
                        <button onClick={() => handleDelete(volunteer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Volunteers;
