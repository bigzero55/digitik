"use client"

import SessionCard from '../dashboard/components/SessionCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Session {
    id: number;
    name: string;
    desc: string;
    event_id: number;
}

export default function SessionsPage() {
    const router = useRouter();
    const { eventId } = router.query;
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        if (eventId) {
            // Fetch sessions for a specific event
            fetch(`/api/events/${eventId}/sessions`)
                .then((response) => response.json())
                .then((data) => setSessions(data))
                .catch((error) => console.error('Error fetching sessions:', error));
        }
    }, [eventId]);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Sessions for Event {eventId}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sessions.map((session) => (
                    <SessionCard key={session.id} session={session} />
                ))}
            </div>
        </div>
    );
}
