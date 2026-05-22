'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import DominumIslandControls from './Controls';
import DominumIslandModel from './IslandModel';

import {
  DOMINUM_ISLAND_DESKTOP_VIEW,
  DOMINUM_ISLAND_LIGHT,
  DOMINUM_ISLAND_MOBILE_VIEW,
  DOMINUM_SKY_CUBEMAP_FILES,
  DOMINUM_SKY_CUBEMAP_PATH,
} from './Scene.constants';

const getDominumIslandView = () => {
  if (typeof window === 'undefined') {
    return DOMINUM_ISLAND_DESKTOP_VIEW;
  }

  return window.matchMedia('(max-width: 767px)').matches
    ? DOMINUM_ISLAND_MOBILE_VIEW
    : DOMINUM_ISLAND_DESKTOP_VIEW;
};

const DominumIslandScene = ({ isControlsEnabled }) => {
  const [view, setView] = useState(getDominumIslandView);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateView = () => {
      setView(
        mediaQuery.matches
          ? DOMINUM_ISLAND_MOBILE_VIEW
          : DOMINUM_ISLAND_DESKTOP_VIEW
      );
    };

    updateView();

    mediaQuery.addEventListener('change', updateView);

    return () => {
      mediaQuery.removeEventListener('change', updateView);
    };
  }, []);

  const sceneKey = view === DOMINUM_ISLAND_MOBILE_VIEW
    ? 'mobile'
    : 'desktop';

  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <Canvas
        key={sceneKey}
        camera={view.camera}
      >
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

          <DominumIslandModel model={view.model} />
        </Suspense>

        <DominumIslandControls isEnabled={isControlsEnabled} />
      </Canvas>
    </div>
  );
};

export default DominumIslandScene;