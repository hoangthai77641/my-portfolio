import './globals.css';
import { AppProvider } from '../contexts/AppContext';

export const metadata = {
  title: 'Nguyen Hoang Thai | Fresher',
  description:
    'Fresh graduate seeking entry-level Software Engineer opportunities. Portfolio showcasing Full-Stack development skills with React, Node.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
