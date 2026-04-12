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
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_USER;
    }

    const userTemp = localStorage.getItem('userTemp');
    if (!userTemp) {
      return DEFAULT_USER;
    }

    try {
      return JSON.parse(userTemp) as UserData;
    } catch {
      return DEFAULT_USER;
    }
  });

  useEffect(() => {
    localStorage.setItem('userTemp', JSON.stringify(user));
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
