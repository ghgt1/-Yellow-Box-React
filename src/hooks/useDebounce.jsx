import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // useEffect를 사용한후는 settimeout자체가 사이드이펙트... 언마운트될때 제거해주기위해서인듯?

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  console.log(debouncedValue);
  return debouncedValue;
};
