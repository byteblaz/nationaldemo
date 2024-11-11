'use client';
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg';
import { Card } from "@/components/card";
import test from "node:test";
import { Fragment } from "react";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";



const testimonials = [
  {
    name: "Hiring",
    position: "We offer effective solutions for all your recruitment needs",
    text: "We are committed to offering tailored, efficient, and effective solutions for all your manpower recruitment needs, ensuring that we support your organization with the highest level of professionalism.",
    avatar: memojiAvatar1,
  },
  {
    name: "Outsourcing",
    position: "Man power supply for many leading corporate groups in the Sultanate of Oman",
    text: "We provide highly skilled manpower solutions tailored to meet the needs of various leading corporate groups within the Sultanate of Oman, ensuring quality and efficiency in every project.",
    avatar: memojiAvatar2,
  },
  {
    name: "Management Consulting",
    position: "Consultant experts to deliver custom solutions and strategies",
    text: "Our management specialists are committed to providing tailored solutions and innovative strategies that address the specific needs of your organization, fostering efficient and successful outcomes.",
    avatar: memojiAvatar3,
  },
  {
    name: "PRO Services",
    position: "Your one stop destination for all ministry related work ",
    text: "Streamline your ministry tasks in Oman by utilizing our professional PRO services. We are committed to providing efficient and reliable support to ensure a seamless experience for all your needs.",
    avatar: memojiAvatar4,
  },
  {
    name: "Support 24/7",
    position: "24/7 customer support team in Oman ready to help!",
    text: "Our dedicated team in Oman is committed to providing exceptional customer support around the clock. We ensure that all inquiries and concerns are addressed promptly and professionally, 24/7.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {

  return (
  <div className="py-16 lg:py-24">
    <div className="container">
    <SectionHeader eyebrow="Staffing Simplified" title="Your Ultimate Destination for Expert Consultancy Solutions" description="At our consultancy, we provide expert guidance and tailored solutions to help you navigate challenges and achieve your goals."/>
    <div className="mt-12 lg:mt-20 flex  overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
    
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:40s] hover:[animation-play-state:paused]">
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
           
          {testimonials.map(testimonials =>(
            <NeonGradientCard key={testimonials.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition shadow-md hover:shadow-lg hover:shadow-purple-400/50 transition-shadow duration-300 transition duration-300">
             <div className="flex gap-4 items-center justify-center">
             <div className="flex flex-col items-center">
             <div className=" text-center font-serif  text-3xl bg-gradient-to-r from-white/70  via-purple-400 to-yellow-200  bg-clip-text text-transparent ">{testimonials.name}</div>
             <div className="text-sm text-center text-white/40">{testimonials.position}</div>
             </div>
             </div>
             <p className="mt-4 md:mt-6  text-center text-xl sm:text-sm md:text-xl ">{testimonials.text}</p>
             </NeonGradientCard>
   
             
         ))}
        
         </Fragment>
        ))}
      </div>
    </div>
    </div>
  </div>
  );
};
