import { useEffect } from 'react';

export function useNFTs() {
  useEffect(() => {
    document.body.classList.add('is-nfts');

    return () => {
      document.body.classList.remove('is-nfts');
    };
  });

  return null;
}