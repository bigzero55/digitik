export const fetchFromAPI = async <T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: any
): Promise<T> => {
  try {
    const response = await fetch(endpoint, {
      method,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        `API request failed with status ${response.status}: ${errorResponse?.message}`
      );
    }

    return response.json();
  } catch (error: any) {
    console.error(`Error fetching data from API: ${error.message}`);
    throw error;
  }
};
