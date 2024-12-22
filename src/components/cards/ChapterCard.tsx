import { Chapter } from '../../types/meditation';
import { ArrowDown } from '../icons/ArrowDown';
import { ArrowRight } from '../icons/ArrowRight';

interface Props {
  chapter: Chapter;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ChapterCard({ chapter, isExpanded, onToggle }: Props) {
  return (
    <button
      className="w-full text-left group"
      onClick={onToggle}
    >
      <div
        className="chapter-card p-4 rounded-xl transition-all duration-300 ease-in-out"
        style={{ backgroundColor: chapter.color }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 mr-3">
              <img
                src={`/icons/chapters/${chapter.title.toLowerCase().replace('the ', '').trim()}.png`}
                alt={`${chapter.title} Icon`}
                className="w-full h-full object-contain"
                loading="eager"
                onError={(e) => {
                  console.error(`Failed to load image: /icons/chapters/${chapter.title.toLowerCase()}.png`);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* Chapter Title */}
            <h2 className="text-xl font-sans text-primary transition-all duration-300">
              {chapter.title}
            </h2>
          </div>

          {/* Arrow Icons */}
          <span className="w-6 h-6">
            {isExpanded ? <ArrowDown /> : <ArrowRight />}
          </span>
        </div>
      </div>
    </button>
  );
}
