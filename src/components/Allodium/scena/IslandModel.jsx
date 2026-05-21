'use client';

import { useGLTF } from '@react-three/drei';

import {
  ALLODIUM_FLOATING_OASIS_MODEL,
  ALLODIUM_FLOATING_OASIS_MODEL_PATH,
} from './Scene.constants';

// ========== GLB-модель летающего аллода ==========
const AllodiumIslandModel = () => {
  const { scene } = useGLTF(ALLODIUM_FLOATING_OASIS_MODEL_PATH);

  return (
    <primitive
      object={scene}
      scale={ALLODIUM_FLOATING_OASIS_MODEL.scale}
      position={ALLODIUM_FLOATING_OASIS_MODEL.position}
      rotation={ALLODIUM_FLOATING_OASIS_MODEL.rotation}
    />
  );
};

useGLTF.preload(ALLODIUM_FLOATING_OASIS_MODEL_PATH);

export default AllodiumIslandModel;