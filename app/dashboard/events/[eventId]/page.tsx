import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
}

export default function EventDetailsPage({
  params,
}: {
  params: { eventId: string };
}) {
  const { eventId } = params;

  return <div>ini event{eventId}</div>;
}
