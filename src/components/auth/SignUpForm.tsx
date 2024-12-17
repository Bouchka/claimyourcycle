import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { AuthError } from './AuthError';

export function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, loading, error } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await signUp(email, password);
    if (success) {
      const from = (location.state as any)?.from?.pathname || '/meditations'; // Redirect to list page
      navigate(from, { replace: true });
    }
  };  

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AuthError error={error} />
      
      <div className="space-y-4">
        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="gradient-button w-full mt-6 disabled:opacity-50"
      >
        {loading ? 'Creating Account...' : 'Sign Up'}
      </button>

    </form>
  );
}