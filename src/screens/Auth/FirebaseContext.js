import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from "../../../firebase";

const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
  };

  return (
    <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>
  );
};