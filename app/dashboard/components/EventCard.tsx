import Link from "next/link";

interface EventProps {
  event: {
    id: number;
    name: string;
    description: string;
    date: string;
  };
}

export default function EventCard({ event }: EventProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <p className="text-gray-500 mb-4">
        Date: {new Date(event.date).toLocaleDateString()}
      </p>
      <Link
        href={`/events/${event.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
