
"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Session } from '@/types/sessions';

const SessionDetailPage: React.FC = () => {
  const router = useRouter();
  const { sessionId } = router.query;
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/sessions/${sessionId}`)
        .then(res => res.json())
        .then(data => setSession(data))
        .catch(error => console.error(error));
    }
  }, [sessionId]);

  if (!session) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{session.name}</h1>
      <p>{session.desc}</p>
      <p>Unix Code: {session.unix}</p>
    </div>
  );
};

export default SessionDetailPage;
