import React, { useCallback, useState } from 'react';

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handleSetValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  // return { value, handleSetValue };
  return [value, handleSetValue, setValue];
};
