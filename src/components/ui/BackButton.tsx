import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/meditations')}
      className="text-primary hover:opacity-80"
    >
      ← Back
    </button>
  );
}
