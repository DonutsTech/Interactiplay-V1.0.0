
export const formatVideoName = (videoName: string): string => {
  if (!videoName) return '';

  // Remover a extensão do nome do vídeo
  const nameWithoutExtension = videoName.replace(/\.[^/.]+$/, '');

  const formatted = nameWithoutExtension.replace(/[_-]/g, ' ').trim();

  return formatted;
};

export const formatDuration = (seconds: number): string => {
  if (!seconds || seconds < 0) return '0:00';

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const formatFileSize = (bytes: number): string => {
  if (!bytes || bytes < 0) return '0 B';
  if (bytes < 0) return `Invalid`;
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
};

