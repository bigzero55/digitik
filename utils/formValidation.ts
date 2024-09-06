export const validateEventForm = (data: any) => {
  const errors: string[] = [];
  if (!data.title) errors.push('Title is required');
  if (!data.date) errors.push('Date is required');
  if (!data.capacity) errors.push('Capacity is required');
  return errors;
};
