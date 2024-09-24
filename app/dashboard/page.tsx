'use client';

import { useEffect, useState } from 'react';


export default function DashboardPage() {
  const [events, setEvents] = useState<Event[]>([]);

  return (
    <div className="">
      <h1 className="text-xl ">Dashboard</h1>
      <div></div>
    </div>
  );
}
