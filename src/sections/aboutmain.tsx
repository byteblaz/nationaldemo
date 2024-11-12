"use client";
import AboutUs from "@/assets/images/aboutus.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/card";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { RainbowBlack } from "@/components/ui/rainbow-black";

const portfolioProjects = [
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "About Us",
    kl:"one",
    about:"National Gulf has over 10 years of experience in business incorporation services in the Sultanate of Oman. We provide clients with a comprehensive understanding of the benefits of establishing a business in Oman, along with a streamlined registration process. As the fastest emerging member of the Gulf Cooperation Council, Oman boasts a strategic location, a robust economy, and investor-friendly regulations.",
    abouttwo:"Setting up a business in Oman allows investors to enjoy 100% ownership, benefit from favorable tax policies, and operate within a highly stable political environment. National Gulf has strong relationships with government and regulatory bodies, trade associations, and authorities to keep our clients updated with the latest information.",
    aboutthree:"Our comprehensive services cover every stage of company incorporation, ensuring a smooth and hassle-free experience. Our success is built on consulting, managing, hiring, and outsourcing, with a focus on understanding the unique needs and aspirations of each client. Our in-depth knowledge and commitment to quality lead to complete client satisfaction.",
    results: [
      { title: "PRO Services and Documents Clearing" },
      { title: "Ministry of Commerce and Industry Support" },
      { title: "Chamber of Commerce and Industry Assistance" },
      { title: "Municipality Licensing Facilitation" },
      { title: "Ministry of Labour Services" },
      
    ],
    link: "./Service",
    image: AboutUs,
  },
  


  


  
  
];


export const AboutMain = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        
        <SectionHeader 
          eyebrow="Our Story, Your Success"
          title="Built on Trust, Focused on Results"
          description="Learn more about our values, our vision, and what makes us a reliable partner on your journey to success."
        />
        
        
        
        <div className="mt-10 md:mt-20 flex flex-col transition duration-300 ">
          {portfolioProjects.map((project) => (
            <NeonGradientCard
              key={project.kl}
              className="relative  hover:shadow-2xl hover:shadow-yellow-400/50 " // Card hover scale effect
            >
              {/* Background grain effect */}
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`,
              }}></div>

              <div className="lg:grid lg:grid-rows-2 lg:gap-0">
                {/* Text Content */}
                <div className="lg:pb-16 sm:p-0 lg:p-10">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest md:text-sm lg:text-base sm:text-xs text-transparent bg-clip-text">
                    <span>{project.company}</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
          
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  
                  <p className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 font-thin">
                    {project.about}
                  </p>
                  <p className="font-sans md:text-lg lg:text-xl sm:text-sm mt-2">
                    {project.abouttwo}
                  </p>
                  <p className="font-sans md:text-lg lg:text-xl sm:text-sm mt-2">
                    {project.aboutthree}
                  </p>
                  
                  {/* Services Button */}
                  <a href={project.link} className=" mt-8">
                        <div className="relative lg:mt-20 sm:mt-7">
                        <RainbowBlack className="bg-white/10 backdrop-blur text-white h-10 w-full  px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                         <span className="text-white">Services</span>
                         <ArrowUpRightIcon className="w-4 h-4 text-green-300" />
                       </RainbowBlack>
                         </div>
                          </a>
                </div>

                {/* Project Image */}
                <div className="relative sm:p-10 md:p-32 lg:-mt-40 ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="intrinsic"
                    className="sm:w-64 sm:h-64 rounded-xl lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 lg:w-[602px] lg:h-[415px] md:w-[400px] md:h-[250px]"
                  />
                </div>
              </div>
            </NeonGradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};
