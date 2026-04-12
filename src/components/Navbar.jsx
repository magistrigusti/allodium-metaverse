'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TiLocationArrowOutline } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

import { ALLODIUM_TELEGRAM_MERCATOS_BOT } from '@/constants/allodiumLinks';
import Button from './Button';

const navItems = [
  { path: '/dominum', icon: '/allodium/icons/dom-link.png' },
  // { path: '/dominarium', icon: '/allodium/icons/allod-link.png' },
  // { path: '/magisterium', icon: '/allodium/icons/allod-link.png' },
  // { path: '/mercatus', icon: '/allodium/icons/allod-link.png' },
  // { path: '/portal', icon: '/allodium/icons/allod-link.png' },

];

const Navbar = () => {
  // ========== ФОНОВЫЙ САУНДТРЕК: по умолчанию звук ВКЛ, иконка показывает «выключить» ==========
  const [isMuted, setIsMuted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const pathname = usePathname();
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if(currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, []);

  const toggleSoundtrackMute = () => setIsMuted((m) => !m);

  useEffect(() => {
    const el = audioElementRef.current;
    if (!el) return;
    el.muted = isMuted;
    if (!isMuted) void el.play().catch(() => {});
  }, [isMuted]);


  return (
    <div className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      ref={navContainerRef}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Link href="/">
              <img
                className={`w-20 ${pathname === '/' ? 'animate-pulse brightness-125' : ''}`}
                src="/allodium/icons/allod_logo.png"
                alt="allod-logo"
              />
            </Link>


            <Button
              id="product-button"
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              title="Products"
              rightIcon={<TiLocationArrowOutline />}
              onClick={() => window.open(ALLODIUM_TELEGRAM_MERCATOS_BOT, '_blank')}
            />
            <Button
              id="product-button-mobile"
              containerClass="bg-blue-50 flex md:hidden items-center justify-center gap-1"
              title="Products"
              rightIcon={<TiLocationArrowOutline />}
              onClick={() => window.open(ALLODIUM_TELEGRAM_MERCATOS_BOT, '_blank')}
            />
          </div>

          <div className="flex h-full md:flex flex-row items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path} className="nav-hover-btn">
                  <img
                    src={item.icon}
                    alt="nav-icon"
                    className={`nav-hover-btn w-20 h-20 ${isActive ? 'animate-pulse brightness-125' : ''}`}
                  />
                </Link>
              )
            })}


            <button
              type="button"
              className={`music-nav-btn relative ml-10 flex items-center justify-center rounded-xl p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80 ${
                isMuted ? 'music-nav-btn--muted' : 'music-nav-btn--sound-on'
              }`}
              onClick={toggleSoundtrackMute}
              title={isMuted ? 'Turn on soundtrack' : 'Turn off soundtrack'}
              aria-label={isMuted ? 'Unmute site soundtrack' : 'Mute site soundtrack'}
            >
              <audio
                className="hidden"
                ref={audioElementRef}
                src="/audio/loop.mp3"
                loop
                preload="auto"
              />
              <span className="music-nav-btn__icon-wrap relative block">
                <img
                  className="music-nav-btn__icon pointer-events-none h-20 w-20 select-none"
                  src="/allodium/icons/music.png"
                  alt=""
                />
              </span>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;