
// Type untuk tabel payments
export type Payment = {
  id: number;
  user_id: number;
  reservation_id: number;
  payment_date: string; // Datetime format
  amount: number; // Decimal type handled as number in TypeScript
  status: string;
  created_at: string; // Datetime format
};
