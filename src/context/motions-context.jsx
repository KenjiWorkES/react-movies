import { createContext, useState } from 'react';

const defaultValue = {
  motions: [],
};

export const MotionPictureContext = createContext(defaultValue);

const MotionPictureContextProvider = ({ children }) => {
  const [motions, setMotions] = useState([]);

  const contextValue = {
    motions: motions,
  };

  return (
    <MotionPictureContext.Provider value={contextValue}>
      {children}
    </MotionPictureContext.Provider>
  );
};

export default MotionPictureContextProvider;
