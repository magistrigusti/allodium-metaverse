import {
  ALLODIUM_GAME_WEB,
  ALLODIUM_PORTAL,
} from './allodiumLinks';

// ========== Главная иконка Allodium ==========
export const NAVBAR_HOME_LINK = {
  href: '/allodium',
  icon: '/allodium/icons/allod_logo.png',
  label: 'Allodium',
};

// ========== Кнопка Products ==========
export const NAVBAR_PRODUCTS_LINK = {
  href: ALLODIUM_GAME_WEB,
  label: 'Products',
};

// ========== Иконки правой навигации ==========
export const NAVBAR_ICON_LINKS = [
  {
    id: 'dominum',
    href: '/dominum',
    icon: '/allodium/icons/dom-link.png',
    label: 'Dominum',
    isExternal: false,
  },
  {
    id: 'portal',
    href: ALLODIUM_PORTAL,
    icon: '/allodium/icons/portal-icon.png',
    label: 'Portal',
    isExternal: true,
  },
];

// ========== Саундтрек ==========
export const NAVBAR_SOUNDTRACK = {
  src: '/audio/loop.mp3',
  icon: '/allodium/icons/music.png',
  muteTitle: 'Turn off soundtrack',
  unmuteTitle: 'Turn on soundtrack',
  muteLabel: 'Mute site soundtrack',
  unmuteLabel: 'Unmute site soundtrack',
};

// ========== CSS-классы Navbar ==========
export const NAVBAR_CLASSES = {
  root: 'fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6',
  header: 'absolute top-1/2 w-full -translate-y-1/2',
  nav: 'flex size-full items-center justify-between p-4',
  leftGroup: 'flex items-center gap-7',
  rightGroup: 'flex h-full md:flex flex-row items-center',

  logo: 'w-20',
  logoActive: 'animate-pulse brightness-125',

  productsDesktop:
    'bg-blue-50 md:flex hidden items-center justify-center gap-1',
  productsMobile:
    'bg-blue-50 flex md:hidden items-center justify-center gap-1',

  iconLink: 'nav-hover-btn',
  iconImage: 'nav-hover-btn w-20 h-20',
  iconActive: 'animate-pulse brightness-125',

  musicButton:
    'music-nav-btn relative ml-10 flex items-center justify-center rounded-xl p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80',
  musicMuted: 'music-nav-btn--muted',
  musicSoundOn: 'music-nav-btn--sound-on',
  musicAudio: 'hidden',
  musicIconWrap: 'music-nav-btn__icon-wrap relative block',
  musicIcon: 'music-nav-btn__icon pointer-events-none h-20 w-20 select-none',
};