'use client';

import Dominum from '@/components/Dominum/Dominum';
import About from '@/components/Dominum/About';
// import DominumIslandSection from '@/components/Dominum/DominumIslandSection';

const DominumPage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Dominum />
      
      {/* <DominumIslandSection /> */}
      <About />
    </main>
  );
};

export default DominumPage;