// ========== Константы сцены летающего аллода ==========

export const ALLODIUM_FLOATING_OASIS_MODEL_PATH =
  '/allodium/models/Floating_Oasis.glb';

export const ALLODIUM_FLOATING_OASIS_CAMERA = {
  position: [0, 1.1, 4.2],
  fov: 46,
};

export const ALLODIUM_FLOATING_OASIS_MODEL = {
  scale: 1,
  position: [0, 0.05, 0],
  rotation: [-0.08, -0.5, 0],
};  

export const ALLODIUM_FLOATING_OASIS_LIGHT = {
  ambientIntensity: 1.6,
  directionalIntensity: 2.4,
  directionalPosition: [4, 5, 3],
};

export const ALLODIUM_FLOATING_OASIS_CONTROLS = {
  enableZoom: false,
  enablePan: false,

  minAzimuthAngle: -0.55,
  maxAzimuthAngle: 0.55,

  minPolarAngle: 1.02,
  maxPolarAngle: 1.36,
};