import { useState, useEffect }  from 'react';
import request from 'axios';

// used before when loading a page with projects. Not used
export const useDataFetching = (url) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await request.get(url);
          const { data } = response;
          if (data) {
            setResults(data);
          }
        } catch (err) {
          setError(err.message);
        }
      }
      fetchData();
    }, []);

    return { error, results };
}

export default useDataFetching;