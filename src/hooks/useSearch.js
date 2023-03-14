import { useEffect, useState } from 'react';

const useSearch = (initialArray, sectionTitle, setSectionTitle) => {
  const [filteredMotions, setFilteredMotions] = useState(initialArray);
  const [alreadySearched, setAlreadySearched] = useState(false);
  const [defaultTitle, setDefaultTitle] = useState(sectionTitle);

  useEffect(() => {
    console.log(initialArray);
    setFilteredMotions(initialArray);
  }, [initialArray]);

  const searchHandler = (value) => {
    if (value.trim().length > 0) {
      const motions = initialArray.filter((motion) =>
        motion.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMotions(motions);
      setSectionTitle(`Found ${motions.length} results for '${value}'`);
      setAlreadySearched(true);
    } else {
      console.log('run');
      console.log(defaultTitle);
      setFilteredMotions(initialArray);
      setSectionTitle(defaultTitle);
      setAlreadySearched(false);
    }
  };

  return {
    filteredMotions: filteredMotions,
    searchHandler: searchHandler,
    alreadySearch: alreadySearched,
  };
};

export default useSearch;
