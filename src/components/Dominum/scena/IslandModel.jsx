'use client';

import { useGLTF } from '@react-three/drei';

import {
  DOMINUM_ISLAND_MODEL,
  DOMINUM_ISLAND_MODEL_PATH,
} from './Scene.constants';

// ========== GLB-модель острова Dominum ==========
const DominumIslandModel = () => {
  const { scene } = useGLTF(DOMINUM_ISLAND_MODEL_PATH);

  return (
    <primitive
      object={scene}
      scale={DOMINUM_ISLAND_MODEL.scale}
      position={DOMINUM_ISLAND_MODEL.position}
      rotation={DOMINUM_ISLAND_MODEL.rotation}
    />
  );
};

useGLTF.preload(DOMINUM_ISLAND_MODEL_PATH);

export default DominumIslandModel;