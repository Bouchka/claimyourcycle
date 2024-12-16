import { Chapter } from '../../types/meditation';

interface Props {
  chapter: Chapter;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ChapterCard({ chapter, isExpanded, onToggle }: Props) {
  // Convert "THE WARRIOR" to "warrior"
  const chapterName = chapter.title.toLowerCase().replace('the ', '').trim();

  return (
    <button className="w-full text-left" onClick={onToggle}>
      <div
        className="p-4 rounded-xl"
        style={{ backgroundColor: chapter.color }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 mr-3">
              <img
                src={`/icons/chapters/${chapterName}.png`}
                alt={`${chapter.title} Icon`}
                className="w-full h-full object-contain"
                loading="eager"
                onError={(e) => {
                  console.error(
                    `Failed to load image: /icons/chapters/${chapterName}.png`
                  );
                  e.currentTarget.style.display = 'none'; // Hides broken image
                }}
              />
            </div>
            <h2 className="text-xl font-sans text-primary">{chapter.title}</h2>
          </div>
          <span className="text-xl text-primary">{isExpanded ? '▼' : '▶'}</span>
        </div>
      </div>
    </button>
  );
}
