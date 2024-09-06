import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Event {
    id: number;
    name: string;
    description: string;
    date: string;
}

export default function EventDetailsPage() {
    const router = useRouter();
    const { eventId } = router.query;
    const [event, setEvent] = useState<Event | null>(null);

    useEffect(() => {
        if (eventId) {
            // Fetch detail event berdasarkan ID
            fetch(`/api/events/${eventId}`)
                .then((response) => response.json())
                .then((data) => setEvent(data))
                .catch((error) => console.error('Error fetching event:', error));
        }
    }, [eventId]);

    if (!event) {
        return <p>Loading event details...</p>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <p className="text-gray-500 mb-4">
                Date: {new Date(event.date).toLocaleDateString()}
            </p>
            <button className="btn btn-primary">Register for Event</button>
        </div>
    );
}
