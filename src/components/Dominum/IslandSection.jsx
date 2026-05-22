'use client';

import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import DominumIslandScene from './scena/Scene';

gsap.registerPlugin(ScrollTrigger);

const DominumIslandSection = () => {
    const [isIslandControlsEnabled, setIsIslandControlsEnabled] = useState(false);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '#dominum-island-scene',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            onUpdate: (self) => {
                setIsIslandControlsEnabled(self.progress >= 0.5);
            },
        });
    });

    return (
        <section
            id="dominum-island-scene"
            className="relative h-[68dvh] w-screen overflow-hidden bg-black md:h-dvh"
        >
            <DominumIslandScene 
                isControlsEnabled={isIslandControlsEnabled}
            />
        </section>
    )
}

export default DominumIslandSection;