const POSTS_URL = import.meta.env.VITE_POSTS_URL;

export const getMotions = async () => {
  const response = await fetch(POSTS_URL);
  const motions = await response.json();
  console.log(motions);
  return motions;
};
