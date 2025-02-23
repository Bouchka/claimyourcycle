import { useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { AuthError } from './AuthError';

interface Props {
  onBack: () => void;
}

export function ForgotPasswordForm({ onBack }: Props) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { resetPassword, loading, error } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await resetPassword(email);
    if (success) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-4">
        <h2 className="text-2xl font-serif text-primary mb-4">Check your email</h2>
        <p className="text-gray-600 mb-6">
          We've sent password reset instructions to {email}.
        </p>
        <button
          onClick={onBack}
          className="inline-flex items-center text-primary hover:underline transition-colors"
        >
          <span className="mr-2">&larr;</span> Back to Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-serif text-primary mb-4 text-center">
        Reset your password
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Enter your email address and we'll send you instructions to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthError error={error} />

        <div>
          <label htmlFor="reset-email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="reset-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="gradient-button flex-1 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Instructions'}
          </button>
        </div>
      </form>
    </div>
  );
}