import { useEffect } from 'react';

const useInterval = (callback : () => void, ms : number) => {
  useEffect(() => {
    const timerId = setInterval(callback, ms);
    return () => clearInterval(timerId);
  });
};

export default useInterval;
