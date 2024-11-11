import memojiImage from "@/assets/images/logong_optimized.png";
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from '@/assets/icons/sparkle.svg';
export const HeroService= () => {
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
      <StarIcon className="size-28 text-fuchsia-300/60"/>
      </HeroOrbit>
      </div>
    <div className="container ">
      <div className="flex flex-col items-center -mb-52">
      <div className="relative size-72 mt-20">
      <Image src ={memojiImage}  className=" absolute -top-20"  alt="Logo: national gulf consultants"/>
      </div>
    
      </div>
      <div className="max-w-lg mx-auto">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-5 tracking-wide bg-gradient-to-r from-yellow-300  via-sky-400 to-yellow-200  bg-clip-text text-transparent">Empowering Your Vision, One Solution at a Time</h1>
      <p className="mt-4 text-center text-white/50 md:text-lg">
      At National Gulf Consultants, we connect you with top-tier talent to drive success and foster growth. Our tailored recruitment solutions ensure you find the perfect professionals who align with your vision and objectives.
      </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Services</span>
          <ArrowDown className="size-4"/>
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span className="font-semibold">Let&rsquo;s Connect</span>
        </button>
      </div>
       </div>
  </div>
  );
};
