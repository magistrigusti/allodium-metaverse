'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import DominumIslandControls from './Controls';
import DominumIslandModel from './IslandModel';

import {
  DOMINUM_ISLAND_CAMERA,
  DOMINUM_ISLAND_LIGHT,
  DOMINUM_SKY_CUBEMAP_FILES,
  DOMINUM_SKY_CUBEMAP_PATH,
} from './Scene.constants';

const DominumIslandScene = ({ isControlsEnabled }) => {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <Canvas camera={DOMINUM_ISLAND_CAMERA}>
        <ambientLight intensity={DOMINUM_ISLAND_LIGHT.ambientIntensity} />

        <directionalLight
          position={DOMINUM_ISLAND_LIGHT.directionalPosition}
          intensity={DOMINUM_ISLAND_LIGHT.directionalIntensity}
        />

        <Suspense fallback={null}>
          <Environment
            background
            files={DOMINUM_SKY_CUBEMAP_FILES}
            path={DOMINUM_SKY_CUBEMAP_PATH}
          />

          <DominumIslandModel />
        </Suspense>

        <DominumIslandControls isEnabled={isControlsEnabled} />
      </Canvas>
    </div>
  );
};

export default DominumIslandScene;