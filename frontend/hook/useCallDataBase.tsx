import { ErrorMessage } from '@/@types/error';
import { useError } from '@/context/ErrorContext'; // ✅ Importar o hook
import { getToken } from '@/service/token';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface ConfigRequest {
  axiosInstance: AxiosInstance;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  url: string;
  config?: AxiosRequestConfig<any>;
  uuid?: string;
}

const useCallDataBase = <T,>({
  axiosInstance,
  method,
  url,
  config = {},
  uuid = undefined,
}: ConfigRequest): [
  data: T,
  loading: boolean,
  error: ErrorMessage | undefined,
  fetchData: () => void,
] => {
  const [data, setData] = useState<T>({} as T);
  const [error, setError] = useState<ErrorMessage | undefined>(undefined);
  const [start, setStart] = useState<boolean>(false);
  const [id, setId] = useState<string | undefined>(undefined);

  // ✅ Usar o contexto de erro global
  const { isLoading: globalLoading, setIsLoading, showError } = useError();

  useEffect(() => {
    if (uuid !== id) {
      setId(uuid);
      setStart(true);
    }
  }, [uuid]);

  const fetchDataCallBack = useCallback(async () => {
    try {
      setIsLoading(true); // ✅ Usar loading global
      const token = getToken();

      const { data } = await axiosInstance[method](`${url}${id ? id : ''}`, {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
          ...config.headers,
        },
      });

      if (!data) {
        throw MESSEGE_VALIDITY;
      }

      setData(data);
      setError(undefined);
    } catch (error: ErrorMessage | unknown) {
      const errorMessage = messageError(error) as ErrorMessage;
      setError(errorMessage);
      showError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [axiosInstance, method, url, config, id, setIsLoading, showError]);

  const fetchData = () => {
    setError(undefined);
    fetchDataCallBack();
  };

  useEffect(() => {
    if (start && id !== undefined) {
      fetchDataCallBack();
    }
  }, [fetchDataCallBack, start]);

  return [data, globalLoading, error, fetchData]; // ✅ Retornar loading global
};

export { useCallDataBase };
