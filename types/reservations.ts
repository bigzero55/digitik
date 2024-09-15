
export type Reservation = {
  id: number;
  user_id: number;
  participant_id: number;
  event_id: number;
  status: string;
  booking_code: string;
  created_at: string; // Datetime format
};
