'use client';

import { useGLTF } from '@react-three/drei';
import {
  DOMINUM_ISLAND_MODEL_PATH,
} from './Scene.constants';

// ========== GLB-модель острова Dominum ==========
const DominumIslandModel = ({ model }) => {
  const { scene } = useGLTF(DOMINUM_ISLAND_MODEL_PATH);

  return (
    <primitive
      object={scene}
      scale={model.scale}
      position={model.position}
      rotation={model.rotation}
    />
  );
};

useGLTF.preload(DOMINUM_ISLAND_MODEL_PATH);

export default DominumIslandModel;