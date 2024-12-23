import { Link } from 'react-router-dom';
import { chapters } from '../../data/chapters';
import { useProgressStore } from '../../store/useProgressStore';

export function ChapterList() {
  const { completedMeditations } = useProgressStore();

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-center text-primary">
          28 days program<br />
          to <span className="text-primary">#claimyourcycle</span>
        </h1>
      </div>

      <div className="flex flex-col gap-2"> {/* Controlled spacing */}
        {chapters.map((chapter) => {
          const completedCount = chapter.meditations.filter(
            (m) => completedMeditations.includes(m.id)
          ).length;

          const chapterColors: Record<string, string> = {
            warrior: 'bg-warrior',
            mother: 'bg-mother',
            magician: 'bg-magician',
            oracle: 'bg-oracle',
          };

          const chapterColorClass = chapterColors[chapter.id] || 'bg-gray-100';

          return (
            <Link key={chapter.id} to={`/chapter/${chapter.id}`}>
              <div
                className={`p-3 rounded-lg transition-all duration-300 ease-in-out ${chapterColorClass}`}
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 mr-3">
                    <img
                      src={`/icons/chapters/${chapter.id}.png`}
                      alt={`${chapter.title.toUpperCase()} Icon`}
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                  </div>
                  <h2 className="text-lg font-sans text-primary transition-all duration-300">
                    {chapter.title.toUpperCase()}
                  </h2>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{
                        width: `${(completedCount / chapter.meditations.length) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="ml-3 text-sm text-primary/70">
                    {completedCount}/{chapter.meditations.length}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
