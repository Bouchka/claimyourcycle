import { useRef } from 'react';
import ReactPlayer from 'react-player';
import { useParams, useNavigate } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { usePlayerStore } from '../store/usePlayerStore';
import { useProgressStore } from '../store/useProgressStore';
import { AudioPlayer } from './audio/AudioPlayer';
import { AudioControls } from './audio/AudioControls';
import { useAudioNavigation } from '../hooks/useAudioNavigation';
import { MeditationHeader } from './meditation/MeditationHeader';
import { CompleteButton } from './meditation/CompleteButton';
import { getMediaUrl } from '../utils/cloudinary';


export function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const playerRef = useRef<ReactPlayer>(null); // Ref for ReactPlayer

  const meditation = chapters
    .flatMap((c) => c.meditations)
    .find((m) => m.id === id);

  const chapter = chapters.find((c) => c.id === meditation?.chapter);

  const { isPlaying, currentTime, duration, togglePlay } = usePlayerStore();
  const { markMeditationComplete } = useProgressStore();
  const { hasPrevious, hasNext, previousMeditation, nextMeditation } =
    useAudioNavigation(id || '');

  if (!meditation || !chapter) return null;

  const dayNumber =
    chapter.meditations.findIndex((m) => m.id === meditation.id) + 1;
  const imageUrl = getMediaUrl('image', chapter.id, dayNumber);
  const audioUrl = getMediaUrl('audio', chapter.id, dayNumber);

  const handlePrevious = () => {
    if (previousMeditation) {
      navigate(`/meditation/${previousMeditation.id}`);
    }
  };

  const handleNext = () => {
    if (nextMeditation) {
      navigate(`/meditation/${nextMeditation.id}`);
    }
  };

  const handleSeek = (time: number) => {
    // Update playback position using the ReactPlayer instance
    if (playerRef.current) {
      playerRef.current.seekTo(time, 'seconds');
    }
  };

  const handleComplete = () => {
    markMeditationComplete(meditation.id);
    navigate('/meditations');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Back Button */}
      <MeditationHeader />

      {/* Image Section */}
      <div className="p-6 max-w-2xl mx-auto w-full">
        <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
          <img
            src={imageUrl}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            onError={(e) => {
              console.error('Image failed to load:', imageUrl);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Chapter Name and Meditation Title */}
      <div className="p-6 max-w-2xl mx-auto w-full">
        <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
          {chapter.title}
        </p>
        <h1 className="text-4xl font-serif text-primary mt-1">
          {meditation.title}
        </h1>
      </div>

      {/* Player Controls & Content */}
      <div className="flex-1 p-6 max-w-2xl mx-auto w-full">
        {/* Audio Controls */}
        <AudioControls
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onPlayPause={togglePlay}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          onSeek={handleSeek}
        />

        {/* Audio Player */}
        <AudioPlayer audioUrl={audioUrl} ref={playerRef} />

        {/* Meditation Content */}
        <div className="space-y-4 text-gray-600 leading-relaxed">
          {meditation.content.map((block, index) => {
            switch (block.type) {
              case 'text':
                return <p key={index}>{block.content}</p>;
              case 'quote':
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 border-primary pl-4 italic"
                  >
                    {block.content}
                  </blockquote>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Complete Button */}
        <div className="mt-8">
          <CompleteButton onComplete={handleComplete} />
        </div>
      </div>
    </div>
  );
}
