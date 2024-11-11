import darkSaasLandingPage from "@/assets/images/prothree.png";
import lightSaasLandingPage from "@/assets/images/visaone.png";
import taxone from "@/assets/images/taxone.png";
import vatone from "@/assets/images/vattwo.png";
import isoone from "@/assets/images/isotwo.png";
import companyone from "@/assets/images/companyone.png";
import companytwo from "@/assets/images/companytwo.png";
import companythree from "@/assets/images/companyfive.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
const portfolioProjects = [
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Pro Services",
    kl:"one",
    results: [
      { title: "PRO Services and Documents Clearing" },
      { title: "Ministry of Commerce and Industry Support" },
      { title: "Chamber of Commerce and Industry Assistance" },
      { title: "Municipality Licensing Facilitation" },
      { title: "Ministry of Labour Services" },
      
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Visa Services",
    kl:"two",
    results: [
      { title: "Golden Visa in Oman" },
      { title: "Investor Visa in Oman" },
      { title: "Visit Visa Oman" },
      { title: "Visa Services in Oman" },
      { title: "5 Years Investor Visa in Oman" },
      { title: "10 Years Investor Visa in Oman" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Corporate Tax and VAT",
    kl: "three",
    results: [
      { title: "Corporate tax Registration" },
      { title: "Tax (VAT) Registration" },
      { title: "VAT Health Check" },
      { title: "VAT Compliance and Reporting" },
      { title: "Oman Transfer Pricing" },
      

    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: taxone,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Corporate Tax and VAT",
    kl:"four",
    results: [
      { title: "VAT Filing Service" },
      { title: "SME Finance and Tax Solution" },
      { title: "Tax Residency Certificates" },
      { title: "Economic Substance Regulations" },

    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: vatone,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "ISO Certificate",
    kl:"five",
    results: [
      { title: "ISO 9001:2015 Quality Management System" },
      { title: "ISO 22000:2018 Food Safety Management System" },
      { title: "ISO 14001:2015 Environmental Management System" },
      { title: "ISO 27001:2013 Information Security Management System" },
      { title: "ISO 20000-1:2011 Information Technology Service Management System" },
      { title: "ISO 45001:2018 Occupational Health And Safety Management System" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: isoone,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Company Formation",
    kl:"six",
    results: [
      { title: "Foriegn Ownership Company in Oman " },
      { title: "Local Omani Owned Company" },
      { title: "Free Zone Company" },
      { title: "Mainland Company" },
      { title: "Register Company Name or Trade Name in Oman" },
      
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: companyone,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Company Formation",
    kl:"seven",
    results: [
      { title:"Commercial Registration Activities" },
      { title: "Company Share Transfer Services in Oman" },
      { title: "Limited Liability Company - LLC" },
      { title: "Update Commercial Registration - CR" },
      { title: "Sole Proprietor Company in Oman - SPC" },
      
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: companytwo,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Company Formation",
    kl:"eight",
    results: [
      { title: "Joint Partnership" },
      { title: "Limited Partnership" },
      { title: "Business Setup in Oman" },
      { title: "Company Formation in Oman" },
      { title: "Company Registration in Oman" },
     
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: companythree,
  },
  


  
  
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Our Services" title="What We Offer"description="Take a quick glance at our professional services"/>
        <div className="mt-10 md:mt-20 flex flex-col transition duration-300">
       
        
        {portfolioProjects.map((project) => (
          
          <div
              key={project.kl}
              className=" bg-white/5 backdrop-blur-3xl rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sm:-mx-2 after:pointer-events-none sticky -top-10 lg:top-3 ">
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`,
              }}></div>
               <div className=" absolute inset-0  rounded-lg blur -z-10 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)' 
               }}></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
                <div className="lg:pb-16">
                  {/* Company Info */}
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest md:text-sm lg:text-base sm:text-xs text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  {/* Results List */}
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex gap-2 text-sm sm:text-xs md:text-base text-white/70">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 md:w-6 md:h-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <a href={project.link} className="inline-block mt-8">
                    <button className="bg-white/10 backdrop-blur text-gray-950 h-10 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                      <span className="text-white/60">Services</span>
                      <ArrowUpRightIcon className="w-4 h-4 text-green-300" />
                    </button>
                  </a>
                </div>

                {/* Project Image */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="intrinsic"
                    className="mt-8 -mb-4 md:-mb-0 sm:w-64 sm:h-64  lg:mt-20 lg:absolute lg:w-[602px] h-[415px]"
                  />
                </div>
                
              </div>
              
            </div>
             
          ))}
         
        </div>
      </div>
    </section>
  );
};
