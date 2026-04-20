'use client';

import { IVideo } from '@/@types/video';
import { getMe } from '@/service/auth/me';
import { getVideos } from '@/service/videos/videosservice';
import {
  Children,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface VideosContextType {
  videos: IVideo[];
  videoCount: number;
  videoLimit: number;
  isLoadingVideos: boolean;
  loadVideos: () => Promise<void>;
  refreshVideos: () => Promise<void>;
}

const VideosContext = createContext<VideosContextType>({
  videos: [],
  videoCount: 0,
  videoLimit: 0,
  isLoadingVideos: false,
  loadVideos: async () => {},
  refreshVideos: async () => {},
});

const VideosProvider = ({ children }: { children: React.ReactNode }) => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [videoCount, setVideoCount] = useState<number>(0);
  const [videoLimit, setVideoLimit] = useState<number>(0);
  const [isLoadingVideos, setIsLoadingVideos] = useState<boolean>(false);

  const loadVideos = useCallback(async () => {
    setIsLoadingVideos(true);

    try {
      const [videosResponse, meResponse] = await Promise.all([
        getVideos(),
        getMe(),
      ]);

      if (Array.isArray(videosResponse)) {
        setVideos(videosResponse);
        setVideoCount(videosResponse.length);
      } else {
        setVideos([]);
        setVideoCount(0);
      }

      if (meResponse && 'USER' in meResponse && meResponse.USER?.PLAN) {
        if (meResponse.USER.STRIPE_SUBSCRIPTION_STATUS === 'trialing') {
          setVideoLimit(10);
        } else if (meResponse.USER.PLAN.VIDEO_LIMIT) {
          setVideoLimit(meResponse.USER.PLAN.VIDEO_LIMIT);
        } else {          
          setVideoLimit(0);
        }
      } else {
        setVideoLimit(0);
      }
    } catch (error) {
      console.error('Erro ao carregar vídeos:', error);
      setVideos([]);
      setVideoCount(0);
      setVideoLimit(0);
    } finally {
      setIsLoadingVideos(false);
    }
  }, []);

  const refreshVideos = useCallback(async () => {
    await loadVideos();
  }, [loadVideos]);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  const value = useMemo(
    () => ({
      videos,
      videoCount,
      videoLimit,
      isLoadingVideos,
      loadVideos,
      refreshVideos,
    }),
    [videos, videoCount, videoLimit, isLoadingVideos, loadVideos, refreshVideos]
  );

  return (
    <VideosContext.Provider value={value}>{children}</VideosContext.Provider>
  );
};

export { VideosContext, VideosProvider };
export type { VideosContextType };

export const useVideos = () => {
  const context = useContext(VideosContext);
  if (!context) {
    throw new Error('useVideos must be used within VideosProvider');
  }
  return context;
};
