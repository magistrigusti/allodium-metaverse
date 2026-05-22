import { ALLODIUM_TELEGRAM_COMMUNITY } from '@/components/Allodium/constants/allodiumLinks';
import ImageClipBox from './ImageClipBox';
import Button from '../Button';

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-60 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-20 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox clipClass="contact-clip-path w-80"
            
            src="allodium/img/hero-mag.jpg"
          />

          <ImageClipBox clipClass="contact-clip-path-3 lg:translate-y-1 translate-y-60 w-80"
            src="allodium/img/hero-elf.png"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto 
          md:right-10 lg:top-20 lg:w-80" 
        >
          <ImageClipBox clipClass="absolute md:scale-125" 
            src="allodium/img/hero-ork.png"
          />

          <ImageClipBox clipClass="sword-man-clip-path md:scale-125" 
            src="allodium/img/hero-ork.png"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="font-general text-[30px] uppercase">Join Allodium</p>

          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            <b>Let's bild the</b> <br /> <b>new ere of</b> <br /> <b>gaming together</b>
          </p>

          <Button
            containerClass="mt-10 cursor-pointer"
              title="contact us"
            onClick={() => window.open(ALLODIUM_TELEGRAM_COMMUNITY, '_blank')}
          />
</div>

<ImageClipBox
  clipClass="
    relative z-20 mx-auto mt-20 -mb-20 w-32
    md:absolute md:bottom-0 md:right-8 md:mx-0 md:mt-0 md:mb-0
    md:w-[min(18vw,240px)]
    lg:right-12 lg:w-[min(20vw,200px)]
  "
  src="/allodium/img/FemaleTitanGladiator.png"
/>
      </div> 
    </div>
  );
};

export default Contact;