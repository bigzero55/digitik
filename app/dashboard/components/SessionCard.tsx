import React from 'react';
import { Session } from '@/types/sessions';
import { useRouter } from 'next/router';

interface SessionCardProps {
  session: Session;
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/sessions/${session.id}`);
  };

  return (
    <div
      className="card w-80 bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={handleClick}
    >
      <h2 className="text-xl font-bold mb-2">{session.name}</h2>
      <p className="text-gray-600 mb-2">{session.desc}</p>
      <p className="text-gray-500">Unix Code: {session.unix}</p>
    </div>
  );
};

export default SessionCard;
