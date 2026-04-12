'use client';

import Dominum from '../components/Dominum/Dominum';
import About from '../components/Dominum/About';

// Navbar рендерится один раз в layout.jsx — дубликат давал бы два саундтрека

const DominumPage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Dominum />
      <About />
    </main>
  );
};

export default DominumPage
