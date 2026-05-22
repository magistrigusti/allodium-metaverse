'use client';
import Feature from '@/components/Dominum/Feature';
import Dominum from '@/components/Dominum/Dominum';
import About from '@/components/Dominum/About';


const DominumPage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Dominum />
      <About />
      <Feature />
    </main>
  );
};

export default DominumPage;