import { ErrorMessage } from '@/@types/error';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface ConfigRequest {
  axiosInstance: AxiosInstance;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  url: string;
  config?: AxiosRequestConfig<any>;
}

const useCallDataBase = <T,>({
  axiosInstance,
  method,
  url,
  config = {},
}: ConfigRequest): [
  data: T[],
  loading: boolean,
  error: ErrorMessage | undefined,
  fetchData: () => void,
] => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorMessage | undefined>(undefined);
  const [start, setStart] = useState<boolean>(false);

  const fetchDataCallBack = useCallback(async () => {
    try {
      const { data } = await axiosInstance[method](url, { ...config });

      if (!data) {
        throw MESSEGE_VALIDITY;
      }

      setData(data);
    } catch (error: ErrorMessage | unknown) {
      setError(messageError(error) as ErrorMessage);
    } finally {
      setLoading(false);
    }
  }, [axiosInstance, method, url, config]);

  const fetchData = () => {
    setError(undefined);
    setLoading(true);
    fetchDataCallBack();
  };

  useEffect(() => {
    if (start) {
      fetchDataCallBack();
    }
  }, [fetchDataCallBack, start]);

  return [data, loading, error, fetchData];
};

export { useCallDataBase };
