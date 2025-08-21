import './globals.css';
import { AppProvider } from '../contexts/AppContext';

export const metadata = {
  title: 'Nguyen Van A | Portfolio',
  description: 'Fresher Software Engineer Portfolio Website',
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
