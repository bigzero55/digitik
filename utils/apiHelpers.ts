export const API_BASE_URL = '/api';

export const fetchFromAPI = async <T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: any,
  headers: Record<string, string> = {}
): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorResponse = await response.json(); // Try to get error details
      throw new Error(
        `API request failed with status ${response.status}: ${errorResponse?.message}`
      );
    }

    return response.json();
  } catch (error: any) {
    console.error(`Error fetching data from API: ${error.message}`);
    throw error; // Re-throw to allow handling at a higher level
  }
};