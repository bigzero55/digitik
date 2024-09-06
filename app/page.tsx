import React from 'react';

export default function Page() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-5">DIGITIK</h1>
          <h5 className="text-2xl font-bold">
            Solusi Cerdas untuk Mengelola Event Anda
          </h5>
          <p className="py-6">
            Kelola seminar, pelatihan, dan gathering dengan mudah menggunakan
            aplikasi reservasi online kami. Dari pendaftaran peserta hingga
            verifikasi dengan QR code, semuanya dalam satu platform! Tingkatkan
            efisiensi, pantau kehadiran, dan kirim notifikasi langsung ke
            WhatsApp peserta. Sesederhana itu.
          </p>
          <button className="btn btn-primary">Mulai</button>
        </div>
      </div>
    </div>
  );
}
