import { forwardRef } from 'react';
import ReactPlayer from 'react-player';
import { usePlayerStore } from '../../store/usePlayerStore';

interface Props {
  audioUrl: string;
}

export const AudioPlayer = forwardRef<ReactPlayer, Props>(({ audioUrl }, ref) => {
  const { isPlaying, setCurrentTime, setDuration } = usePlayerStore();

  const handleProgress = (progress: { playedSeconds: number }) => {
    setCurrentTime(progress.playedSeconds);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  return (
    <ReactPlayer
      ref={ref}
      url={audioUrl}
      playing={isPlaying}
      controls={false}
      onProgress={handleProgress}
      onDuration={handleDuration}
      onError={(e) => console.error('Error playing audio:', e)}
      width="0"
      height="0"
    />
  );
});
