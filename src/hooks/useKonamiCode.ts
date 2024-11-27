import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

export const useKonamiCode = () => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const requiredKey = KONAMI_CODE[count].toLowerCase();

      if (key === requiredKey) {
        const nextCount = count + 1;
        setCount(nextCount);
        
        if (nextCount === KONAMI_CODE.length) {
          setSuccess(true);
          setCount(0);
        }
      } else {
        setCount(0);
      }
    };

    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  }, [count]);

  return success;
};
