'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TiLocationArrowOutline } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

import Button from './Button';

import {
  NAVBAR_CLASSES,
  NAVBAR_HOME_LINK,
  NAVBAR_ICON_LINKS,
  NAVBAR_PRODUCTS_LINK,
  NAVBAR_SOUNDTRACK,
} from '@/components/Allodium/constants/navbar.constants';

const getActiveClass = (isActive) => {
  return isActive ? NAVBAR_CLASSES.iconActive : '';
};

const NavbarIconLink = ({ item, pathname }) => {
  const isActive = !item.isExternal && pathname === item.href;

  const image = (
    <img
      src={item.icon}
      alt={item.label}
      className={`${NAVBAR_CLASSES.iconImage} ${getActiveClass(isActive)}`}
    />
  );

  if (item.isExternal) {
    return (
      <a
        className={NAVBAR_CLASSES.iconLink}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
      >
        {image}
      </a>
    );
  }

  return (
    <Link
      className={NAVBAR_CLASSES.iconLink}
      href={item.href}
      aria-label={item.label}
    >
      {image}
    </Link>
  );
};

const Navbar = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const isMutedRef = useRef(isMuted);
  const unlockListenersScheduledRef = useRef(false);

  const pathname = usePathname();
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const navElement = navContainerRef.current;

    if (!navElement) {
      return;
    }

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navElement.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navElement.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navElement.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (!navContainerRef.current) {
      return;
    }

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleSoundtrackMute = () => {
    const audioElement = audioElementRef.current;

    setIsMuted((previousValue) => {
      const nextValue = !previousValue;

      if (audioElement) {
        audioElement.muted = nextValue;

        if (!nextValue) {
          void audioElement.play().catch(() => {});
        }
      }

      return nextValue;
    });
  };

  useEffect(() => {
    const audioElement = audioElementRef.current;

    if (!audioElement) {
      return;
    }

    audioElement.muted = isMuted;

    const tryPlaySoundtrack = () => {
      audioElement.muted = isMutedRef.current;

      return audioElement.play();
    };

    tryPlaySoundtrack().catch(() => {
      if (unlockListenersScheduledRef.current) {
        return;
      }

      unlockListenersScheduledRef.current = true;

      const unlockSoundtrack = () => {
        const currentAudioElement = audioElementRef.current;

        if (!currentAudioElement) {
          return;
        }

        currentAudioElement.muted = isMutedRef.current;
        void currentAudioElement.play().catch(() => {});
      };

      window.addEventListener('pointerdown', unlockSoundtrack, {
        capture: true,
        once: true,
      });

      window.addEventListener('keydown', unlockSoundtrack, {
        capture: true,
        once: true,
      });
    });
  }, [isMuted]);

  const isHomeActive = pathname === NAVBAR_HOME_LINK.href;

  return (
    <div
      className={NAVBAR_CLASSES.root}
      ref={navContainerRef}
    >
      <header className={NAVBAR_CLASSES.header}>
        <nav className={NAVBAR_CLASSES.nav}>
          <div className={NAVBAR_CLASSES.leftGroup}>
            <Link
              href={NAVBAR_HOME_LINK.href}
              aria-label={NAVBAR_HOME_LINK.label}
            >
              <img
                className={`${NAVBAR_CLASSES.logo} ${
                  isHomeActive ? NAVBAR_CLASSES.logoActive : ''
                }`}
                src={NAVBAR_HOME_LINK.icon}
                alt={NAVBAR_HOME_LINK.label}
              />
            </Link>

            <Button
              id="product-button"
              containerClass={NAVBAR_CLASSES.productsDesktop}
              title={NAVBAR_PRODUCTS_LINK.label}
              rightIcon={<TiLocationArrowOutline />}
              onClick={() => window.open(NAVBAR_PRODUCTS_LINK.href, '_blank')}
            />

            <Button
  id="product-button-mobile"
  containerClass={NAVBAR_CLASSES.productsMobile}
  title={NAVBAR_PRODUCTS_LINK.label}
  onClick={() => window.open(NAVBAR_PRODUCTS_LINK.href, '_blank')}
/>
          </div>

          <div className={NAVBAR_CLASSES.rightGroup}>
            {NAVBAR_ICON_LINKS.map((item) => (
              <NavbarIconLink
                key={item.id}
                item={item}
                pathname={pathname}
              />
            ))}

            <button
              type="button"
              className={`${NAVBAR_CLASSES.musicButton} ${
                isMuted
                  ? NAVBAR_CLASSES.musicMuted
                  : NAVBAR_CLASSES.musicSoundOn
              }`}
              onClick={toggleSoundtrackMute}
              title={
                isMuted
                  ? NAVBAR_SOUNDTRACK.unmuteTitle
                  : NAVBAR_SOUNDTRACK.muteTitle
              }
              aria-label={
                isMuted
                  ? NAVBAR_SOUNDTRACK.unmuteLabel
                  : NAVBAR_SOUNDTRACK.muteLabel
              }
            >
              <audio
                className={NAVBAR_CLASSES.musicAudio}
                ref={audioElementRef}
                src={NAVBAR_SOUNDTRACK.src}
                loop
                preload="auto"
              />

              <span className={NAVBAR_CLASSES.musicIconWrap}>
                <img
                  className={NAVBAR_CLASSES.musicIcon}
                  src={NAVBAR_SOUNDTRACK.icon}
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