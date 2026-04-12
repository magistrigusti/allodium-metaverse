import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { TiLocationArrowOutline } from 'react-icons/ti';
import Button from '../Button';

gsap.registerPlugin(ScrollTrigger);

// ========== DOMINUM HERO — три ролика: метавселенная → альфа → меркатос ==========
const DOMINUM_VIDEOS = [
  '/videos/dominum/metaverse.mp4',
  '/videos/dominum/Alpha.mp4',
  '/videos/dominum/mercatus.mp4',
];

const TOTAL_VIDEOS = DOMINUM_VIDEOS.length;

const getVideoSrc = (index1based) => DOMINUM_VIDEOS[index1based - 1] ?? DOMINUM_VIDEOS[0];

const DominumHero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const nextVideoRef = useRef(null);
  const previewVideoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % TOTAL_VIDEOS) + 1;

  const handleVideoLoad = () => setLoadedVideos((n) => n + 1);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(() => {
    if (loadedVideos >= TOTAL_VIDEOS) setIsLoading(false);
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (!hasClicked) return;
      gsap.set('#dominum-next-video', { visibility: 'visible' });
      gsap.to('#dominum-next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        onStart: () => nextVideoRef.current?.play(),
      });
      gsap.to('#dominum-current-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut',
      });
    },
    { dependencies: [currentIndex], revertOnUpdate: true },
  );

  useGSAP(() => {
    gsap.set('#dominum-video-frame', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    });
    gsap.from('#dominum-video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#dominum-video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  const bgIndex = currentIndex === TOTAL_VIDEOS - 1 ? 1 : currentIndex;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="dominum-video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div
            className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
          >
            <div
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              onClick={handleMiniVdClick}
            >
              <video
                id="dominum-current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                src={getVideoSrc(upcomingVideoIndex)}
                ref={previewVideoRef}
                onLoadedData={handleVideoLoad}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          <video
            id="dominum-next-video"
            className="absolute-center invisible absolute z-20 size-64 object-center"
            src={getVideoSrc(currentIndex)}
            ref={nextVideoRef}
            onLoadedData={handleVideoLoad}
            loop
            muted
            playsInline
          />

          <video
            className="absolute left-0 top-0 size-full object-cover object-center"
            src={getVideoSrc(bgIndex)}
            onLoadedData={handleVideoLoad}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-orange-300">
          <b>Dominum</b>
          <span className="text-xs align-super">™</span>
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-300">
              <b>immersion</b>
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-400">
              Discover a word of pover and <br /> wealth within the meta game
            </p>

            <Button
              containerClass="!bg-yellow-300 flex-center gap-1"
              id="watch"
              title="Whitepaper"
              leftIcon={<TiLocationArrowOutline />}
              onClick={() =>
                window.open(
                  'https://docs.google.com/document/d/1MqOpPIFP2f35TzD2KrYDsukk-LTqyKyiR3wP4Ekx6g4/edit?tab=t.0#heading=h.hkf5su5g8tpd',
                  '_blank',
                )
              }
            />
          </div>
        </div>
      </div>

      <h1 className="specialfont hero-heading absolute bottom-5 right-5 text-black">
        <b>Dominum</b>
        <span className="text-xs align-super">™</span>
      </h1>
    </div>
  );
};

export default DominumHero;
