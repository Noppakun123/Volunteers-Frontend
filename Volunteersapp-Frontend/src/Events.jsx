// src/components/Events.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: '', date: '' });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events'); // URL ของ API
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/events', newEvent);
      setEvents([...events, response.data]);  // เพิ่มกิจกรรมใหม่ลงในลิสต์
      setNewEvent({ name: '', date: '' });    // รีเซ็ตฟอร์ม
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div>
      <h2>กิจกรรม</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name} - {event.date}</li>
        ))}
      </ul>

      <form onSubmit={handleAddEvent}>
        <input
          type="text"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          placeholder="ชื่อกิจกรรม"
          required
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          required
        />
        <button type="submit">เพิ่มกิจกรรม</button>
      </form>
    </div>
  );
};

export default Events;
