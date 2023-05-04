import { useEffect, useState } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    setMatches(matchQueryList.matches);
    const handleChange = (e) => {
      setMatches(e.matches);
    };
    matchQueryList.addEventListener('change', handleChange);
    return () => {
      matchQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  return matches;
};
