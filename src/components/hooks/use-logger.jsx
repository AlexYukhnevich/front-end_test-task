import { useEffect } from 'react';

export const useLogger = (value) => {
  useEffect(() => {
    console.log('Value changed: ', value);
  }, [value])
} 