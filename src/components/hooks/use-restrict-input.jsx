import { useState } from 'react';
import { MAX_NUMBER_LENGTH } from '../../constants';

export const useRestrictInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value.slice(0, MAX_NUMBER_LENGTH).trim());
  return { value, onChange };
}