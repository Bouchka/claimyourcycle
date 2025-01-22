import { PlayIcon } from '../icons/PlayIcon';
import { PauseIcon } from '../icons/PauseIcon';
import { LeftDoubleArrow } from '../icons/LeftDoubleArrow';
import { RightDoubleArrow } from '../icons/RightDoubleArrow';
import { formatTime } from '../../utils/timeFormat';

interface Props {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  onSeek: (time: number) => void;
}

export function AudioControls({
  isPlaying,
  currentTime,
  duration,
  onPlayPause,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  onSeek,
}: Props) {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSeek(Number(e.target.value));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center items-center space-x-8">
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="gradient-icon-button w-12 h-12 sm:w-16 sm:h-16"
        >
          <LeftDoubleArrow className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <button
          onClick={onPlayPause}
          className="circle-gradient-button w-12 h-12 sm:w-20 sm:h-20"
        >
          {isPlaying ? (
            <PauseIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          ) : (
            <PlayIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          )}
        </button>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="gradient-icon-button w-12 h-12 sm:w-16 sm:h-16"
        >
          <RightDoubleArrow className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            className="played"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSliderChange}
            className="slider"
          />
        </div>
        <div className="progress-bar-time">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
