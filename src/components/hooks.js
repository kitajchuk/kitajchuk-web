import { useEffect } from 'react';

export function useDarkMode() {
  useEffect(() => {
    document.body.classList.add('is-dark-mode');

    return () => {
      document.body.classList.remove('is-dark-mode');
    };
  });

  return null;
}