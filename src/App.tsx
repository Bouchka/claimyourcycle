import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthProvider';
import { SignInPage } from './components/auth/SignInPage';
import { SignUpPage } from './components/auth/SignUpPage';
import { MeditationList } from './components/MeditationList';
import { Player } from './components/Player';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { AccountSettings } from './components/account/AccountSettings';
import { PrivacyPolicy } from './components/account/PrivacyPolicy';
import './styles/index.css';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" replace />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/create-your-account" element={<SignUpPage />} />
          
          {/* Routes with Layout Wrapper */}
          <Route
            path="/meditations"
            element={
              <PrivateRoute>
                <Layout>
                  <MeditationList />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/meditation/:id"
            element={
              <PrivateRoute>
                <Layout>
                  <Player />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <Layout>
                  <AccountSettings />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PrivateRoute>
                <Layout>
                  <PrivacyPolicy />
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
