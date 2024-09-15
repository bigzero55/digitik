import { useState, useEffect } from 'react';
import { fetchFromAPI } from '@/utils/apiHelper'; 

function useFetch<T>(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', body?: any): [T | null, boolean, Error | null] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFromAPI<T>(url, method, body);
        setData(result);
      } catch (err) {
        setError(err as Error); 
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, [url, method, body]); 

  return [data, loading, error]; 
}

export default useFetch;