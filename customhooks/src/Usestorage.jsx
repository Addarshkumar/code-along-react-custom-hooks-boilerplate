import { useState } from 'react';

const useStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key)) || initialValue);

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
};

export default useStorage;