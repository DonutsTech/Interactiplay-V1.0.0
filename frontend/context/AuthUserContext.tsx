'use client';

import { MeResponse } from '@/@types/auth';
import { ErrorMessage } from '@/@types/error';
import { getMe } from '@/service/auth/me';
import { hasToken, removeToken } from '@/service/token';
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface AuthUserContextType {
  authUser: MeResponse | null;
  setAuthUser: (userData: MeResponse | null) => void;
  loadAuthUser: () => Promise<MeResponse | null>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const AuthUserContext = createContext<AuthUserContextType>({
  authUser: null,
  setAuthUser: () => {},
  loadAuthUser: async () => null,
  logout: () => {},
  isLoading: false,
  error: null,
  isAuthenticated: false,
});

const AuthUserProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUserState] = useState<MeResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = useMemo(() => {
    // console.log('Usuario Altenticado:', authUser);
    return hasToken() && authUser !== null;
  }, [authUser]);

  // Função para definir usuário autenticado
  const setAuthUser = useCallback((userData: MeResponse | null) => {
    setAuthUserState(userData);
    setError(null);
  }, []);
  const loadAuthUser = useCallback(async (): Promise<MeResponse | null> => {
    if (!hasToken()) {
      setError('Token não encontrado');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await getMe();

      if ('STATUS' in response && 'MESSAGE' in response) {
        const errorResponse = response as ErrorMessage;
        setError(errorResponse.MESSAGE);
        setIsLoading(false);

        if (errorResponse.STATUS === 401) {
          setAuthUserState(null);
          removeToken();
        }

        return null;
      }

      const authenticatedUser = response as MeResponse;
      setAuthUserState(authenticatedUser);
      setIsLoading(false);
      return authenticatedUser;
    } catch (err) {
      console.error('Erro ao carregar usuário autenticado:', err);
      setError('Erro ao carregar dados do usuário.');
      setIsLoading(false);
      return null;
    }
  }, []);

  const logout = useCallback(() => {
    setAuthUserState(null);
    setError(null);
    removeToken();
  }, []);

  // Carrega usuário automaticamente se tiver token ao montar
  useEffect(() => {
    if (hasToken() && !authUser) {
      loadAuthUser();
    }
  }, []);

  const value = useMemo(
    () => ({
      authUser,
      setAuthUser,
      loadAuthUser,
      logout,
      isLoading,
      error,
      isAuthenticated,
    }),
    [
      authUser,
      setAuthUser,
      loadAuthUser,
      logout,
      isLoading,
      error,
      isAuthenticated,
    ]
  );

  return (
    <AuthUserContext.Provider value={value}>
      {children}
    </AuthUserContext.Provider>
  );
};

export { AuthUserContext, AuthUserProvider };
export type { AuthUserContextType };
