import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Quiz App',
  description: 'A simple quiz app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <main className="grid min-h-screen">
          <Toaster />
          {children}
        </main>
      </body>
    </html>
  );
}
