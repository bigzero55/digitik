
export type Event = {
  id: number;
  user_id: number;
  title: string;
  unix: string;
  description?: string; // Nullable field
  date: string; // Date format
  price: number;
  capacity: number;
  location?: string; // Nullable field
  created_at: string; // Datetime format
};
