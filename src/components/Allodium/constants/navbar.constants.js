import {
  ALLODIUM_GAME_WEB,
  ALLODIUM_PORTAL,
  ALLODIUM_TELEGRAM_MERCATOS_BOT,
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
  {
    id: 'mercatus',
    href: ALLODIUM_TELEGRAM_MERCATOS_BOT,
    icon: '/allodium/icons/mercatus.png',
    label: 'Mercatus',
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
  root:
    'fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6',
  header: 'absolute top-1/2 w-full -translate-y-1/2',

  nav:
    'flex size-full items-center justify-between gap-1 px-2 py-4 sm:gap-5 sm:px-4',

  leftGroup:
    'flex min-w-0 shrink items-center gap-1 sm:gap-7',

  rightGroup:
    'flex h-full shrink-0 flex-row items-center justify-end gap-0.5 sm:gap-5',

  logo:
    'w-14 shrink-0 sm:w-20',

  logoActive:
    'animate-pulse brightness-125',

  productsDesktop:
    'hidden items-center justify-center gap-1 bg-blue-50 md:flex',

  productsMobile:
  'flex shrink-0 items-center justify-center bg-blue-50 !px-3 !py-2 text-[10px] leading-none md:hidden',
  iconLink:
    'nav-hover-btn flex h-12 w-12 shrink-0 items-center justify-center sm:h-20 sm:w-20',

  iconImage:
    'h-full w-full shrink-0 object-contain',

  iconActive:
    'animate-pulse brightness-125',

  musicButton:
    'music-nav-btn relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80 sm:h-20 sm:w-20',

  musicMuted:
    'music-nav-btn--muted',

  musicSoundOn:
    'music-nav-btn--sound-on',

  musicAudio:
    'hidden',

  musicIconWrap:
    'music-nav-btn__icon-wrap relative block h-full w-full',

  musicIcon:
    'music-nav-btn__icon pointer-events-none h-full w-full shrink-0 select-none',
};