import React, { useState, useEffect } from 'react';

const UseStorage = () => {
  const [value, setValue] = useState('');

  
  useEffect(() => {
    const storedValue = localStorage.getItem('newvalue');
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem('newvalue', JSON.stringify(newValue));
    sessionStorage.setItem('newvalueSession', JSON.stringify(newValue));
  };

  return (
    <>
      <input
        value={value}
        onChange={handleChange}
        style={{ width: '200px', height: '30px' }}
        type="text"
        placeholder="Enter something to store"
      />
    </>
  );
};

export default UseStorage;
