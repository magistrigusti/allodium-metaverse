import { ALLODIUM_GITHUB_REPO, ALLODIUM_TELEGRAM_COMMUNITY } from '@/constants/allodiumLinks';
import { FaDiscord, FaTwitter, FaYoutube, FaTwitch, FaGithub, FaTelegram } from "react-icons/fa";

// ========== Подвал: сообщество Telegram + репозиторий на GitHub ==========
const links = [
  { href: ALLODIUM_TELEGRAM_COMMUNITY, icon: <FaTelegram /> },
  // {href: 'https://discord.com', icon: <FaDiscord />},
  // {href: 'https://twitter.com', icon: <FaTwitter/>},
  { href: ALLODIUM_GITHUB_REPO, icon: <FaGithub /> },
  // {href: 'https://youtube.com', icon: <FaYoutube />},
  // {href: 'https://twitch.com', icon: <FaTwitch />},
]
const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-uto flex flex-col items-center
        justify-between gap-4 px-4 md:flex-row"
      >
        <p className="text-center text-sm md:text-left">
          &copy; Allodium<span className="text-xs align-super">™</span> 2026. All right reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a className="text-black transition-colors duration-500 ease-in-out hover:text-white"
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a className="text-center text-sm hover:underline md:text-right"
          href="#privacy-policy"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;