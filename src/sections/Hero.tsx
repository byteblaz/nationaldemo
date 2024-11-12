import memojiImage from "@/assets/images/logong_optimized.png";
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { BorderBeam } from "@/components/ui/border-beam";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { RainbowBlack } from "@/components/ui/rainbow-black";

export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
    <div className="absolute inset-0 -z-30 opacity-5" style={{
      backgroundImage:`url(${grainImage.src})`
    }}></div>
    <div className="size-[670px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
    <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
      <SparkleIcon className="size-8 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
      <SparkleIcon className="size-5 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="36s">
      <div className="size-2 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="34s"shouldSpin spinDuration="3s">
      <SparkleIcon className="size-10 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
      <StarIcon className="size-12 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
      <StarIcon className="size-8 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
      <div className="size-2 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s"shouldSpin spinDuration="3s">
      <SparkleIcon className="size-14 text-emerald-300/20"/>
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
      <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
    <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
      <StarIcon className="size-28 text-emerald-300"/>
      </HeroOrbit>
      </div>
    <div className="container -mt-12">
      <div className="flex flex-col items-center">
      <Image src ={memojiImage}  className="size-[300px] -mb-12"  alt="Logo: national gulf consultants"/>
      <div className="bg-gray-950 border border-gray-800 -mt-16 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
        <div className="bg-green-500 size-2.5 rounded-full relative">
          <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
        </div>
        <div className="text-sm font-medium">Delivering Quality Manpower</div>
      </div>
      </div>
      <div className="max-w-lg mx-auto overflow-x-clip">
        <BorderBeam />
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-5 tracking-wide">Where Dreams Meet Expectations</h1>
      <p className="mt-4 text-center text-white/60 md:text-lg">
      We elevate your expectations to reality through expert 
      Consulting services. 
      With a commitment to excellence and quality, 
      we redefine the way you perceive HR solutions.
      </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <RainbowBlack className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Services</span>
          <ArrowDown className="size-4 mt-1"/>
        </RainbowBlack>
        <RainbowButton className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span className="font-semibold">Let&rsquo;s Connect</span>
        </RainbowButton>
      </div>
       </div>
  </div>
  );
};
