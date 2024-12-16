interface Props {
  onComplete: () => void;
  className?: string; // Add className as an optional prop
}

export function CompleteButton({ onComplete, className = "" }: Props) {
  return (
    <button
      onClick={onComplete}
      className={`w-full py-4 px-8 bg-primary text-white rounded-full 
                  text-center font-medium hover:bg-primary/90 transition-colors
                  mt-8 ${className}`} // Removed mx-6 for correct alignment
    >
      MARK AS COMPLETE
    </button>
  );
}
