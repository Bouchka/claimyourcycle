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
  hasNext
}: Props) {
  return (
    <div className="space-y-8">
      <div className="flex justify-center items-center space-x-8">
        {/* Previous Button with Gradient Text */}
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#E15E5F] to-[#99D2CC] disabled:opacity-50"
        >
          ⏮
        </button>

        {/* Play/Pause Button with Gradient Circle */}
        <button
          onClick={onPlayPause}
          className="w-16 h-16 text-3xl gradient-button rounded-full flex items-center justify-center"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        {/* Next Button with Gradient Text */}
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#E15E5F] to-[#99D2CC] disabled:opacity-50"
        >
          ⏭
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
