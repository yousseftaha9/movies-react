import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    // return storedValue ? JSON.parse(storedValue) : initialState;
    return JSON.parse(storedValue);
    // i figured out that it is already working
    // whithout the need for the code above
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
