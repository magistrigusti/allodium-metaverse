'use client';

import { useRef, useState } from 'react';

// ========== Картинка блока More coming soon с мягким 3D-наклоном ==========
const ComingSoonImage = () => {
  const frameRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');

  const handleMouseMove = (event) => {
    if (!frameRef.current) {
      return;
    }

    const { left, top, width, height } =
      frameRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const rotateX = (relativeY - 0.5) * -8;
    const rotateY = (relativeX - 0.5) * 8;

    setTransformStyle(`
      perspective(700px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(0.98, 0.98, 0.98)
    `);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  };

  return (
    <img
  ref={frameRef}
  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 ease-out"
  src="/allodium/img/card-bg.png"
  alt="entrance"
  style={{ transform: transformStyle }}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  onMouseUp={handleMouseLeave}
  onMouseEnter={handleMouseLeave}
/>
  );
};

export default ComingSoonImage;