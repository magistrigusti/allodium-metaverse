import { ALLODIUM_PROJECT_SITE } from '@/constants/allodiumLinks';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL(ALLODIUM_PROJECT_SITE),
  title: 'Allodium™',
  description:
    'Allodium™ — цифровая метавселенная с живыми ИИ и игровым токеном Dominum™',
  // ========== Иконка вкладки: public/favicon.ico (замени файл при смене бренда) ==========
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    shortcut: '/favicon.ico',
  },
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
