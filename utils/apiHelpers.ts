export const API_BASE_URL = '/api';

export const fetchFromAPI = async (endpoint: string, method: 'GET' | 'POST' = 'GET', body?: any) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
