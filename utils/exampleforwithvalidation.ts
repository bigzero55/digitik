import React, { useState } from 'react';
import { validateEventForm } from './path-to-your-validator';

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    capacity: '',
  });

  const [errors, setErrors] = useState<string[]>([]);

  // Menangani perubahan input form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Menangani submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateEventForm(formData); // Validasi form
    if (validationErrors.length > 0) {
      setErrors(validationErrors); // Tampilkan error jika ada
    } else {
      setErrors([]);
      // Kirim data form ke API atau lakukan tindakan lainnya
      console.log('Form is valid, submitting data:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Event Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="date">Event Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="capacity">Event Capacity:</label>
        <input
          type="number"
          id="capacity"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
        />
      </div>

      {/* Tampilkan pesan error jika ada */}
      {errors.length > 0 && (
        <div>
          <ul>
            {errors.map((error, index) => (
              <li key={index} style={{ color: 'red' }}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button type="submit">Submit Event</button>
    </form>
  );
};

export default EventForm;