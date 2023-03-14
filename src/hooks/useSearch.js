import { useEffect, useState } from 'react';

const useSearch = (initialArray, sectionTitle, setSectionTitle) => {
  const [filteredMotions, setFilteredMotions] = useState(initialArray);
  const [alreadySearched, setAlreadySearched] = useState(false);
  const title = sectionTitle;

  useEffect(() => {
    setFilteredMotions(initialArray);
  }, [initialArray]);

  const searchHandler = (value) => {
    if (value.trim().length > 0) {
      const motions = initialArray.value.filter((motion) =>
        motion.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMotions(motions);
      setSectionTitle(
        `Found ${filteredMotions.value.length} results for '${value}'`
      );
      setAlreadySearched(true);
    } else {
      setFilteredMotions(initialArray);
      setSectionTitle(title);
      setAlreadySearched(false);
    }
  };

  return {
    filteredMotions: filteredMotions,
    searchHandler: searchHandler,
    alreadySearch: alreadySearched,
  };
};
