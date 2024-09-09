'use client';
import React, { useState } from 'react';
import { generateRandomString } from 'ts-randomstring/lib';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BE_URL + 'api/events',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.token,
          },
          body: JSON.stringify({
            user_id: 1,
            unix: generateRandomString(),
            date: new Date().toISOString(),
            title,
            description,
            price,
            location,
            capacity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add event. Please try again.');
      }

      // Handle successful event creation
      alert('Event added successfully!');
      // Optionally, clear form fields
      setTitle('');
      setDescription('');
      setPrice('');
      setLocation('');
      setCapacity('');
    } catch (err: any) {
      setError(err.message);
      console.error('Error adding event:', err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="">
      <h1 className="text-2xl ">Events</h1>
      <label htmlFor="add_event" className="btn btn-primary">
        Tambah Event
      </label>
      {children}
      <label className="btn">open modal</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="add_event" className="modal-toggle hidden" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Tambah Event</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter event title"
                className="input input-bordered w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Enter event description"
                className="textarea textarea-bordered w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Ticket Price</span>
              </label>
              <input
                type="number"
                placeholder="Enter ticket price"
                className="input input-bordered w-full"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Enter event location"
                className="input input-bordered w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Capacity</span>
              </label>
              <input
                type="number"
                placeholder="Enter participant capacity"
                className="input input-bordered w-full"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <div className="form-control">
              <button
                type="submit"
                className={`btn btn-primary w-full`}
                disabled={loading}
              >
                {loading && (
                  <span className="loading loading-dots loading-xs"></span>
                )}
                {loading ? 'Adding Event...' : 'Add Event'}
              </button>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="add_event" className="btn">
              Batal
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
