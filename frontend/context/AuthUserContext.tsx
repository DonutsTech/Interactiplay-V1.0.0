'use client';

import {
  createContext,
  ReactNode,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { MeResponse } from '@/@types/auth';
import { ErrorMessage } from '@/@types/error';
import { hasToken, removeToken } from '@/service/token';
import { getMe } from '@/service/auth/me';

interface AuthUserContextType {
  authUser: MeResponse | null;
  setAuthUser: (userData: MeResponse | null) => void;
  loadAuthUser: () => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const AuthUserContext = createContext<AuthUserContextType>({
  authUser: null,
  setAuthUser: () => {},
  loadAuthUser: async () => false,
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
    return hasToken() && authUser !== null;
  }, [authUser]);

  // Função para definir usuário autenticado
  const setAuthUser = useCallback((userData: MeResponse | null) => {
    setAuthUserState(userData);
    setError(null);
  }, []);

  // Função para buscar usuário da API usando o token
  const loadAuthUser = useCallback(async (): Promise<boolean> => {
    if (!hasToken()) {
      setError('Token não encontrado');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await getMe();

      if ('STATUS' in response && 'MESSAGE' in response) {
        const errorResponse = response as ErrorMessage;
        setError(errorResponse.MESSAGE);
        setIsLoading(false);
        
        // Se o token for inválido, remove o usuário
        if (errorResponse.STATUS === 401) {
          setAuthUserState(null);
          removeToken();
        }
        
        return false;
      }

      setAuthUserState(response as MeResponse);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.error('Erro ao carregar usuário autenticado:', err);
      setError('Erro ao carregar dados do usuário.');
      setIsLoading(false);
      return false;
    }
  }, []);

  // Função para fazer logout (remove token e limpa dados)
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
    [authUser, setAuthUser, loadAuthUser, logout, isLoading, error, isAuthenticated]
  );

  return (
    <AuthUserContext.Provider value={value}>
      {children}
    </AuthUserContext.Provider>
  );
};

export { AuthUserContext, AuthUserProvider };
export type { AuthUserContextType };
