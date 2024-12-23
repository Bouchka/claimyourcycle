import { Chapter } from '../types/meditation';
import { ChapterCard } from './cards/ChapterCard';

interface Props {
  chapters: Chapter[];
}

export function ChapterList({ chapters }: Props) {
  return (
    <div className="flex flex-col gap-2"> {/* Controlled spacing */}
      {chapters.map((chapter) => (
        <ChapterCard
          key={chapter.id}
          chapter={chapter}
          isExpanded={false}
          onToggle={() => {}}
        />
      ))}
    </div>
  );
}
