'use client';

import EventCard from '../components/EventCard';
import { useEffect, useState } from 'react';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Fetch data dari API
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="">
      <h1 className="text-xl ">Events</h1>
      <div></div>
    </div>
  );
}
