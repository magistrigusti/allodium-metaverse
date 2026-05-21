// ========== Константы 3D-сцены острова Dominum ==========

export const DOMINUM_ISLAND_MODEL_PATH = '/dominum/models/Island.glb';
export const DOMINUM_SKY_CUBEMAP_PATH = '/sky_create_lord/sky_16_cubemap_2k/';

export const DOMINUM_SKY_CUBEMAP_FILES = [
  'px.png',
  'nx.png',
  'py.png',
  'ny.png',
  'pz.png',
  'nz.png',
];

export const DOMINUM_ISLAND_CAMERA = {
  position: [0, 1.15, 4.35],
  fov: 36,
};

export const DOMINUM_ISLAND_MODEL = {
  scale: 1.72,
  position: [0, -0.38, 0],
  rotation: [0.15, -0.35, 0],
};

export const DOMINUM_ISLAND_LIGHT = {
  ambientIntensity: 1.35,
  directionalIntensity: 2.2,
  directionalPosition: [4, 5, 3],
};

export const DOMINUM_ISLAND_CONTROLS = {
  enableZoom: false,
  enablePan: false,

  minAzimuthAngle: -0.55,
  maxAzimuthAngle: 0.55,

  minPolarAngle: 1.05,
  maxPolarAngle: 1.32,
};

export const DOMINUM_ISLAND_IDLE_ROTATION_SPEED = 0.002;

