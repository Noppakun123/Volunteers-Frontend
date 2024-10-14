import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [eventName, setEventName] = useState('');
    const [eventId, setEventId] = useState(null);

    const fetchEvents = async () => {
        const response = await axios.get('http://localhost:3000/events');
        setEvents(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (eventId) {
            await axios.put(`http://localhost:3000/events/${eventId}`, { name: eventName });
        } else {
            await axios.post('http://localhost:3000/events', { name: eventName });
        }
        setEventName('');
        setEventId(null);
        fetchEvents();
    };

    const handleEdit = (event) => {
        setEventId(event.id);
        setEventName(event.name);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/events/${id}`);
        fetchEvents();
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Events</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="Event Name"
                    required
                />
                <button type="submit">{eventId ? 'Update' : 'Create'}</button>
            </form>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        {event.name}
                        <div>
                            <button onClick={() => handleEdit(event)}>Edit</button>
                            <button onClick={() => handleDelete(event.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
