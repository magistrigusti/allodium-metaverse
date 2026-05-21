'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import RoundedCorners from '../RoundedCorners';

import AllodiumIslandControls from './Controls';
import AllodiumIslandModel from './IslandModel';

import {
  ALLODIUM_FLOATING_OASIS_CAMERA,
  ALLODIUM_FLOATING_OASIS_LIGHT,
} from './Scene.constants';

// ========== Готовый блок сцены для секции Story ==========
const AllodiumIslandScene = () => {
  return (
    <div className="story-img-container">
      <div className="story-img-mask">
        <div className="story-img-content">
          <Canvas camera={ALLODIUM_FLOATING_OASIS_CAMERA}>
            <ambientLight
              intensity={ALLODIUM_FLOATING_OASIS_LIGHT.ambientIntensity}
            />

            <directionalLight
              position={ALLODIUM_FLOATING_OASIS_LIGHT.directionalPosition}
              intensity={ALLODIUM_FLOATING_OASIS_LIGHT.directionalIntensity}
            />

            <Suspense fallback={null}>
              <AllodiumIslandModel />
              <Environment preset="night" />
            </Suspense>

            <AllodiumIslandControls />
          </Canvas>
        </div>
      </div>

      <RoundedCorners />
    </div>
  );
};

export default AllodiumIslandScene;