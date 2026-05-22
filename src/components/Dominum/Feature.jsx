import { TiLocationArrowOutline } from "react-icons/ti";
import DominumCard from "./DominumCard";
import DominumTitle from './DominumTitle';
import ComingSoonImage from './ComingSoonImage';

const Feature = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Intro the MetaGame Layer
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant
            array of products converge into an interconnected overplay experience 
            on yor world
          </p>
        </div>

        <DominumTitle className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]"
        >
          <DominumCard src="./dominum/Dominum-island.png"
            title={<><b>I S L A N D</b></>}
            color="text-orange-300"
            description="" 
           
          />
        </DominumTitle>

        <div className="grid auto-rows-[12rem] grid-cols-2 gap-4 md:h-[135vh] md:grid-rows-3 md:gap-7">
          <DominumTitle className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <DominumCard 
              src="./dominum/citizenship.png"
              title={<><b>c i t i z e n s h i p</b></>}
              color="text-blue-700"
              videoClassName="!object-[center_25%]"
              description=""
            />
          </DominumTitle>

          <DominumTitle className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <DominumCard 
              src="./dominum/roadmap.png"
              title={<><b>r o a d m a p</b></>}     
              color="text-violet-900"
              description=""             
            />
          </DominumTitle>

          <DominumTitle className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <DominumCard
              src="./dominum/treasury.png"
              title={<><b>T R E A S U R Y</b></>}
              color="text-blue-300"
              videoClassName="!object-[center_15%]"
              
            />
          </DominumTitle>

          <DominumTitle className="bento-title_2">
            <div className="relative size-full overflow-hidden bg-violet-300">
              <ComingSoonImage />

              <TiLocationArrowOutline 
              className="absolute bottom-8 right-8 z-10 scale-[5] text-black" 
              />
            </div>
          </DominumTitle>    

          <DominumTitle className="bento-title_2">
            <DominumCard className="size-full object-cover object-center"
              src="./dominum/Dominum.png"
              
            />
          </DominumTitle>
        </div>
      </div>
    </section>
  );
};

export default Feature;