import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterEventPage: React.FC = () => {
  const router = useRouter();
  const [eventId, setEventId] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId, name })
    })
      .then(res => res.json())
      .then(data => {
        // handle successful registration
        router.push(`/events/${eventId}`);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Register for Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          placeholder="Event ID"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default RegisterEventPage;
