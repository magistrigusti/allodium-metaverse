'use client';

import { OrbitControls } from '@react-three/drei';

import { ALLODIUM_FLOATING_OASIS_CONTROLS } from './Scene.constants';

// ========== Управление аллодом: только мягкий поворот мышью/пальцем ==========
const AllodiumIslandControls = () => {
  return (
    <OrbitControls
      enableZoom={ALLODIUM_FLOATING_OASIS_CONTROLS.enableZoom}
      enablePan={ALLODIUM_FLOATING_OASIS_CONTROLS.enablePan}
      minAzimuthAngle={ALLODIUM_FLOATING_OASIS_CONTROLS.minAzimuthAngle}
      maxAzimuthAngle={ALLODIUM_FLOATING_OASIS_CONTROLS.maxAzimuthAngle}
      minPolarAngle={ALLODIUM_FLOATING_OASIS_CONTROLS.minPolarAngle}
      maxPolarAngle={ALLODIUM_FLOATING_OASIS_CONTROLS.maxPolarAngle}
    />
  );
};

export default AllodiumIslandControls;