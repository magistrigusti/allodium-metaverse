'use client';

import { OrbitControls } from '@react-three/drei';

import { DOMINUM_ISLAND_CONTROLS } from './Scene.constants';

// ========== Управление островом: включается только после нужной точки скролла ==========
const DominumIslandControls = ({ isEnabled }) => {
  return (
    <OrbitControls
      enabled={isEnabled}
      enableZoom={DOMINUM_ISLAND_CONTROLS.enableZoom}
      enablePan={DOMINUM_ISLAND_CONTROLS.enablePan}
      minAzimuthAngle={DOMINUM_ISLAND_CONTROLS.minAzimuthAngle}
      maxAzimuthAngle={DOMINUM_ISLAND_CONTROLS.maxAzimuthAngle}
      minPolarAngle={DOMINUM_ISLAND_CONTROLS.minPolarAngle}
      maxPolarAngle={DOMINUM_ISLAND_CONTROLS.maxPolarAngle}
    />
  );
};

export default DominumIslandControls;