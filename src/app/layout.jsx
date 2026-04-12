import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Allodium™',
  description:
    'Allodium™ — цифровая метавселенная с живыми ИИ и игровым токеном Dominum™',
  icons: { icon: '/allodium.svg' },
};

// ========== Корневой layout Next.js: навигация + контент + подвал ==========
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
