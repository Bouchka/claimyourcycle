interface Props {
  onComplete: () => void;
  className?: string; // Optional additional className
}

export function CompleteButton({ onComplete, className = "" }: Props) {
  return (
    <button
      onClick={onComplete}
      className={`gradient-button w-full ${className}`}
    >
      MARK AS COMPLETE
    </button>
  );
}
