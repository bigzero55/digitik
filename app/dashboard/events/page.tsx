'use client';

import { useEffect, useState } from 'react';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const url: string = process.env.NEXT_PUBLIC_BE_URL + 'api/events';

  useEffect(() => {
    // Fetch data dari API
    fetch(url)
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return <div className="">ini macam macam events</div>;
}
