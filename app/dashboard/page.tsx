'use client';

import EventCard from './components/EventCard';
import { useEffect, useState } from 'react';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
}

export default function DashboardPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Fetch event data from API
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="">
      <h1 className="text-xl ">Dashboard</h1>
      <div></div>
    </div>
  );
}
