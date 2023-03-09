import React, { useState } from 'react';

export const useInput = (initialValue: string | number | readonly string[] | undefined) => {
  const [value, setValue] = useState(initialValue);

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  return { value, handleSetValue };
};
