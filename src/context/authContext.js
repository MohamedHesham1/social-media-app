import { createContext, useState, useEffect } from 'react';
import avatar from '../assets/undraw_male_avatar_g98d.svg';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = () => {
    // pending
    setCurrentUser({
      id: 1,
      name: 'John Doe ',
      profilePic: avatar,
    });
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
