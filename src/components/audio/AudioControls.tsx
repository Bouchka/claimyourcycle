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
}: Props) {
  return (
    <div className="space-y-8">
      <div className="flex justify-center items-center space-x-8">
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="gradient-icon-button w-12 h-12 sm:w-16 sm:h-16"
        >
          <LeftDoubleArrow className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Play/Pause Button */}
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

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="gradient-icon-button w-12 h-12 sm:w-16 sm:h-16"
        >
          <RightDoubleArrow className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      <div>
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-200"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}

