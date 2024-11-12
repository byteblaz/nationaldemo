"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/x.png";
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import FireIcon from '@/assets/icons/fire.svg';
import Manu from '@/assets/icons/jkkl.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/Screenshot (166).png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import { Toolboxitems } from "@/components/Toolboxitems";
import { motion } from 'framer-motion';
import { useRef } from "react";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

const toolboxItems = [
  { title: 'Construction', iconType: JavascriptIcon },
  { title: 'Oil And Gas', iconType: HTMLIcon },
  { title: 'Powerplant', iconType: CssIcon },
  { title: 'Petrochemical', iconType: ReactIcon },
  { title: 'Insulation and Scaffolding', iconType: ChromeIcon },
  { title: 'Engineering', iconType: GitHubIcon },
  { title: 'Fire and Safety', iconType: FireIcon },
  { title: 'Manufacturing', iconType: Manu },
];

const hobbies = [
  { title: 'Hiring', emoji: '🧑🏻‍💼' },
  { title: 'Consulting', emoji: '🧑🏻‍💻' },
  { title: 'Outsourcing', emoji: '🤝' },
  { title: 'Timely Services', emoji: '⌛' },
  { title: 'Support 24/7', emoji: '📞' },
  { title: 'Quality', emoji: '✔️' },
  { title: 'Staffing Simplified', emoji: '👩🏻‍💼' },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Diverse Recruitment Expertise"
          title="We Have Extensive Recruitment Experience Across Various Industries"
          description="Explore the various fields we offer to find the right fit for you."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <NeonGradientCard className="h-[320px] md:col-span-1 lg:col-span-1">
              <CardHeader
                title="Our Mission"
                description="We create a new experience of Human Resource by reliable hiring, outsourcing and staffing solutions"
              />
              <div className="w-40 mx-auto -mt-9 md:mt-0 sm:mt-8">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </NeonGradientCard>

            <NeonGradientCard className="h-[320px] md:col-span-1 lg:col-span-2">
              <CardHeader
                title="Our Recruitment Fields"
                description="Our experience in recruiting extends to a wide range of fields"
              />
              <Toolboxitems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <Toolboxitems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </NeonGradientCard>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <NeonGradientCard className="h-[320px] p-0 flex flex-col md:col-span-1 lg:col-span-2 overflow-hidden">
              <CardHeader
                title="What We Provide"
                description="We provide expert help and customized solutions to help you meet challenges and reach your goals."
                className="px-6 py-6"
              />
              <div 
                className="relative grid gap-4 p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4" 
                ref={constraintRef}
              >
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="flex items-center justify-center gap-1 px-2 py-1 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full max-w-[120px] text-xs sm:text-sm md:text-base"
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 whitespace-nowrap overflow-hidden text-ellipsis">
                      {hobby.title}
                    </span>
                    <span className="ml-1">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </NeonGradientCard>

            <Card className="h-[320px] p-0 relative md:col-span-1 lg:col-span-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1828.5572896873718!2d58.58283!3d23.564328!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730544950299!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
