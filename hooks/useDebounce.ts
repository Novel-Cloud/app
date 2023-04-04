import { useState, useEffect } from "react";

interface DebounceProps<T> {
  value: T;
  delay: number;
}

function useDebounce<T>({ value, delay }: DebounceProps<T>): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
