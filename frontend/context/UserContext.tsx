'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';


export interface UserData {
  id: string;
  name: string;
  email: string;
  selectedPlan: string;
}

interface UserContextType {
  user: UserData;
  setUser: Dispatch<SetStateAction<UserData>>;
  setUserState: (userData: UserData) => void;
}

const DEFAULT_USER: UserData = {
  id: '',
  name: '',
  email: '',
  selectedPlan: '',
};

const UserContext = createContext<UserContextType>({
  user: DEFAULT_USER,
  setUser: () => {},
  setUserState: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData>(DEFAULT_USER);

  useEffect(() => {
    const userTemp = localStorage.getItem('userTemp');
    if (userTemp) {
      setUser(JSON.parse(userTemp));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userTemp', JSON.stringify(user));
    console.log('User state updated:', user);
  }, [user]);

  const setUserState = (userData: UserData) => {
    setUser(userData);
    localStorage.setItem('userTemp', JSON.stringify(userData));
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      setUserState,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };