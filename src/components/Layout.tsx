import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">{children}</div>
      
      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Endolina. All rights reserved.
      </footer>
    </div>
  );
}