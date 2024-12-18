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
    <button className="w-full text-left group" onClick={onToggle}>
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

            {/* Chapter Title with Gradient Hover */}
            <h2
              className="
                text-xl font-sans text-primary transition-all duration-300
                hover:text-transparent hover:bg-clip-text 
                hover:bg-gradient-to-b from-[#0F2D32] via-[#0F2D32] to-[#99D2CC]
                hover:from-10% hover:via-30% hover:to-90%
              "
            >
              {chapter.title}
            </h2>
          </div>

          {/* Arrow with Gradient Hover/Active States */}
          <span
            className="
              text-xl text-transparent bg-clip-text 
              bg-gradient-to-b from-[#0F2D32] via-[#0F2D32] to-[#99D2CC]
              from-10% via-30% to-90%
              hover:from-[#E05E5F] hover:to-[#0F2D32]
              transition-all duration-300
            "
          >
            {isExpanded ? '▼' : '▶'}
          </span>
        </div>
      </div>
    </button>
  );
}
