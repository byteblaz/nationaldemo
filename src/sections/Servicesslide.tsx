"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

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
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

const portfolioProjects = [
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Pro Services",
    kl:"one",
    aboutmain:"At National Gulf, our PRO services streamline your business operations in Oman by managing all government-related procedures and documentation. With our extensive experience and established relationships with various government departments, we ensure the smooth and efficient processing of all your business requirements.",
    titleone:"PRO Services and Documents Clearing",
    aboutone:"Our comprehensive document clearing services handle all aspects of your government documentation needs. We expertly manage the processing of business licenses, permits, and various governmental approvals. Our team specializes in document authentication and attestation, ensuring all your paperwork meets official requirements. We also provide professional visa processing services, handling both new applications and renewals with precision. Our legal translation services ensure accurate conversion of all official documents, while our real-time tracking system keeps you informed of your document status throughout the process.",
    titletwo:"Ministry of Commerce and Industry Support",
    abouttwo:"Our deep understanding of the Ministry of Commerce and Industry's procedures enables us to effectively handle all your business registration and commercial licensing needs. We facilitate trade name registration and trademark services, ensuring your business identity is properly protected. Our team manages all aspects of commercial activity modifications and updates, keeping your business compliant with current regulations. We also specialize in investment and industrial license applications, providing expert guidance throughout the process.",
    titlethree:"Chamber of Commerce and Industry Assistance",
    aboutthree:"We provide seamless assistance with all Chamber of Commerce and Industry requirements, from new membership registrations to renewals. Our services include comprehensive support for Certificate of Origin processing and trade documentation authentication. We facilitate business delegation support and ensure proper commercial directory listings. Our expertise extends to managing export and import documentation, helping your business maintain smooth international trade operations.",
    titlefour:"Municipality Licensing Facilitation",
    aboutfour:"Our municipality licensing services cover all aspects of local government approvals. We handle commercial space permits, ensuring your business premises meet all regulatory requirements. Our team manages the entire process of obtaining health and safety compliance certificates, food handling licenses, and construction permits. We also facilitate location approval services, ensuring your business setup meets all municipal regulations and standards.",
    titlefive:"Ministry of Labour Services",
    aboutfive:"Our expertise in labor-related services ensures smooth management of all workforce documentation. We handle the complete spectrum of work visa processing and renewals, along with employment contract authentication. Our services include efficient processing of labor cards, work permits, and staff residence visas. We also provide valuable assistance in labor dispute resolution, ensuring your business maintains positive employee relations.",
    titleconcl:"Why Choose Our PRO Services",
    aboutconcl:`Our seasoned PROs bring extensive knowledge of Omani government procedures, ensuring fast-track processing through our established relationships with government entities. Our commitment to continuous communication keeps you informed throughout the process, while our strict adherence to regulatory requirements ensures complete compliance. 
    Experience hassle-free government processing and documentation services for your business in Oman by partnering with National Gulf. Contact us today to discuss your specific requirements and learn how we can streamline your business operations.`,
    image: darkSaasLandingPage,
  },
  {
    
      company: "National Gulf Consultants",
      year: "2014",
      title: "Visa Services",
      kl: "two",
      aboutmain: "At National Gulf, we provide comprehensive visa services to facilitate seamless entry and residence in the Sultanate of Oman. Our expert team guides you through every step of the visa application process, ensuring a smooth and efficient experience for investors, businesspeople, and visitors alike.",
      
      titleone: "Golden Visa in Oman",
      aboutone: "The Omani Golden Visa program represents a prestigious long-term residency option for distinguished investors and exceptional talents. This exclusive visa category offers holders numerous privileges and benefits, including extended residency rights and investment opportunities. Our specialized team provides end-to-end assistance in preparing and submitting Golden Visa applications, ensuring compliance with all eligibility criteria and documentation requirements. We guide you through the investment options and help secure this elite residency status in Oman.",
      
      titletwo: "Investor Visa in Oman",
      abouttwo: "Our investor visa services cater to foreign entrepreneurs and investors looking to establish a business presence in Oman. We provide comprehensive guidance on investment requirements, documentation, and application procedures. Our team assists in preparing investment proposals, financial documentation, and business plans required for investor visa applications. We ensure your application meets all regulatory requirements while highlighting the strength of your investment intentions in Oman.",
      
      titlethree: "Visit Visa Oman",
      aboutthree: "We facilitate various categories of visit visas for Oman, catering to different purposes such as business meetings, family visits, and tourism. Our services include assistance with documentation, application submission, and visa processing for both single and multiple entry visas. We ensure accurate preparation of all required documents and maintain communication with relevant authorities to expedite the process, making your visit to Oman hassle-free and properly documented.",
      
      titlefour: "Visa Services in Oman",
      aboutfour: "Our general visa services encompass all aspects of visa processing in Oman. From initial application to final approval, we handle employment visas, family joining visas, and specialized visa categories. Our services include document preparation, translation, authentication, and submission to relevant authorities. We also provide guidance on visa renewal, extension, and status modification, ensuring continuous legal residence status for our clients.",
      
      titlefive: "5 Years Investor Visa in Oman",
      aboutfive: "The 5-year investor visa program offers medium-term residency solutions for foreign investors. We provide detailed consultation on eligibility requirements, including minimum investment thresholds and business activity options. Our team assists in preparing comprehensive application packages, including investment documentation, business proposals, and supporting evidence. We guide you through the entire process, from initial application to successful visa issuance.",
  
      titlesix: "10 Years Investor Visa in Oman",
      aboutsix: "For long-term investors seeking extended residency in Oman, we offer specialized assistance with the 10-year investor visa program. This premium visa category requires substantial investment and comes with significant benefits. Our services include thorough consultation on investment requirements, preparation of extensive documentation, and liaison with relevant authorities. We ensure your application meets the higher threshold requirements while maximizing the benefits of this long-term residency option.",
      
      titleconcl: "Our Visa Processing Advantages",
      aboutconcl: "Our visa services are characterized by meticulous attention to detail and professional expertise. We maintain strong relationships with government authorities, enabling efficient processing of applications. Throughout the process, we provide regular status updates and address any concerns promptly. Our team's in-depth knowledge of Omani immigration laws and procedures ensures successful visa outcomes for our clients. Contact National Gulf today to explore the most suitable visa options for your needs and experience our premium visa processing services in Oman.",
  
    
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  
  {
    
      company: "National Gulf Consultants",
      year: "2014",
      title: "Corporate Tax and VAT",
      kl: "three",
      aboutmain: "National Gulf provides comprehensive corporate tax and VAT services in Oman, ensuring full compliance with local tax regulations while maximizing efficiency for your business. Our team of tax experts offers strategic guidance and practical solutions to help you navigate Oman's tax landscape effectively.",
      
      titleone: "Corporate tax Registration",
      aboutone: "We provide end-to-end assistance with corporate tax registration in Oman, ensuring your business meets all regulatory requirements from the outset. Our expert team guides you through the entire registration process, from initial assessment to final submission. We help prepare all necessary documentation, determine your tax obligations, and establish proper accounting systems for tax compliance. Our services include assistance with tax card issuance, setting up tax accounting procedures, and implementing effective tax planning strategies to optimize your business's tax position while maintaining full compliance with Omani tax laws.",
      
      titletwo: "Tax (VAT) Registration",
      abouttwo: "Our VAT registration services encompass comprehensive support for businesses requiring VAT registration in Oman. We assess your VAT registration requirements, prepare necessary documentation, and handle the complete registration process with tax authorities. Our team ensures accurate determination of VAT thresholds, proper classification of business activities, and timely registration to avoid penalties. We also provide guidance on post-registration requirements, including invoice formatting, record-keeping systems, and internal VAT procedures to ensure ongoing compliance.",
      
      titlethree: "VAT Health Check",
      aboutthree: "Our VAT health check service provides a thorough assessment of your business's VAT compliance status. We conduct comprehensive reviews of your VAT procedures, identifying potential risks and areas for improvement. Our experts examine your transaction records, input-output tax calculations, documentation processes, and filing procedures. We provide detailed reports highlighting any compliance gaps, recommend corrective measures, and suggest process improvements to strengthen your VAT compliance framework. This proactive approach helps prevent costly errors and ensures robust VAT management.",
      
      titlefour: "VAT Compliance and Reporting",
      aboutfour: "We offer complete VAT compliance and reporting services to ensure your business meets all ongoing VAT obligations. Our team handles periodic VAT return preparation, reviews transaction classifications, validates input-output tax calculations, and ensures timely submission of returns. We maintain comprehensive VAT records, prepare supporting documentation, and assist with VAT audits when required. Our services include regular compliance monitoring, update notifications on regulatory changes, and assistance with VAT-related queries from tax authorities.",
      
      titlefive: "Oman Transfer Pricing",
      aboutfive: "Our transfer pricing services help businesses navigate Oman's transfer pricing regulations effectively. We assist in developing and documenting transfer pricing policies that comply with local regulations while aligning with international standards. Our team prepares comprehensive transfer pricing documentation, conducts risk assessments, and helps establish appropriate pricing methodologies for related-party transactions. We also provide support during transfer pricing audits and assist with advance pricing arrangements when necessary.",
  
      titlesix: "VAT Filing Service",
      aboutsix: "Our specialized VAT filing service ensures accurate and timely submission of your VAT returns. We handle the entire filing process, from data collection and verification to final submission. Our team performs thorough reviews of your financial records, calculates VAT obligations, prepares supporting documentation, and manages the submission process with tax authorities. We maintain detailed records of all filings, track deadlines, and provide regular updates on your VAT compliance status. Our service includes validation checks, error resolution, and advice on optimizing your VAT position.",
  
      titleseven: "SME Finance and Tax Solution",
      aboutseven: "We offer tailored financial and tax solutions specifically designed for Small and Medium Enterprises in Oman. Our comprehensive package includes bookkeeping, tax planning, compliance management, and financial advisory services. We help SMEs establish efficient financial systems, manage tax obligations, and maintain proper documentation. Our solutions are scalable and cost-effective, ensuring SMEs receive professional financial and tax support while managing their operational costs effectively.",
  
      titleeight: "Tax Residency Certificates",
      abouteight: "Our tax residency certificate service assists businesses and individuals in obtaining and maintaining tax residency status in Oman. We handle the complete application process, prepare required documentation, and liaise with tax authorities. Our team ensures compliance with residency requirements, maintains necessary records, and provides guidance on maintaining tax resident status. We also assist with renewal applications and help resolve any queries from tax authorities regarding residency status.",
  
      titlenine: "Economic Substance Regulations",
      aboutnine: "We provide comprehensive guidance and support for compliance with Oman's Economic Substance Regulations (ESR). Our services include assessing your business activities against ESR requirements, establishing necessary operational frameworks, and preparing required documentation. We help identify relevant activities, determine substance requirements, and implement appropriate measures to ensure compliance. Our team assists with annual reporting requirements, maintains necessary records, and provides ongoing support to ensure continued ESR compliance.",
      
      titleconcl: "Why Choose Our Tax Services",
      aboutconcl: "Our tax services team combines deep local knowledge with international tax expertise to deliver comprehensive solutions for your business. We stay current with Oman's evolving tax landscape to provide timely, accurate advice and ensure full compliance while optimizing your tax position. With our proactive approach, regular updates, and dedicated support, you can focus on your core business while we handle your tax obligations efficiently. Contact National Gulf today to discuss how we can assist with your corporate tax and VAT requirements in Oman.",
  
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: vatone,
  },
  {
    
      company: "National Gulf Consultants",
      year: "2024",
      title: "ISO Certification",
      kl: "four",
      aboutmain: "Achieving ISO certification is crucial for businesses aiming to uphold quality, safety, and operational excellence in line with international standards. Our comprehensive ISO certification services help your organization navigate the certification process smoothly, ensuring full compliance with industry requirements and best practices.",
      
      titleone: "ISO 9001:2015 Quality Management System",
      aboutone: "ISO 9001:2015 certification enables organizations to establish a reliable quality management system, improving customer satisfaction, enhancing process efficiency, and fostering a culture of continuous improvement. This certification sets a strong foundation for delivering consistent quality across all operations.",
      
      titletwo: "ISO 22000:2018 Food Safety Management System",
      abouttwo: "For businesses in the food sector, ISO 22000:2018 ensures robust food safety management across the entire supply chain. This certification helps mitigate risks, enhance regulatory compliance, and establish consumer trust by prioritizing food safety at every stage.",
      
      titlethree: "ISO 14001:2015 Environmental Management System",
      aboutthree: "ISO 14001:2015 focuses on effective environmental management, helping organizations minimize their environmental impact while promoting sustainability. This certification aids in meeting regulatory requirements, reducing waste, and enhancing eco-friendly practices.",
      
      titlefour: "ISO 27001:2013 Information Security Management System",
      aboutfour: "ISO 27001:2013 is essential for organizations committed to safeguarding information. This certification supports the establishment of an information security management system (ISMS) that protects data confidentiality, integrity, and availability, reducing the risk of data breaches.",
      
      titlefive: "ISO 20000-1:2011 Information Technology Service Management System",
      aboutfive: "This standard is tailored for businesses seeking to optimize IT service delivery. ISO 20000-1:2011 aligns IT services with organizational goals, improves service efficiency, and ensures seamless service management in line with global standards.",
      
      titlesix: "ISO 45001:2018 Occupational Health and Safety Management System",
      aboutsix: "ISO 45001:2018 certification demonstrates an organization’s commitment to workplace safety. By implementing this standard, companies can proactively manage occupational health and safety risks, reduce incidents, and create a secure work environment for all employees.",
      
      titleconcl: "Why Choose Our ISO Certification Services",
      aboutconcl: `Our expertise in ISO standards and certifications helps businesses achieve compliance across multiple sectors, enhancing credibility, efficiency, and operational quality. By partnering with us, your organization can ensure smooth and effective implementation of ISO standards, contributing to long-term success and industry recognition.`,
      
      
    
    link: "https://youtu.be/7hi5zwO75yc",
    image: isoone,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Company Formation",
    kl: "five",
    aboutmain: "At National Gulf Consultants, we specialize in offering comprehensive services for company formation in Oman. Our expert team will guide you through the entire process, ensuring compliance with Omani laws and regulations. We help both local and international entrepreneurs set up their businesses smoothly and efficiently.",
    
    titleone: "Foreign Ownership Company in Oman",
    aboutone: "Foreign investors looking to establish a presence in Oman can benefit from our services to form a Foreign Ownership Company. This service provides a framework for foreign entrepreneurs to own and operate businesses within the regulatory guidelines set by the Omani government.",
    
    titletwo: "Local Omani Owned Company",
    abouttwo: "For those looking to operate a business in Oman with full ownership, our services include assisting in the formation of locally owned Omani companies. We ensure all legal procedures and local ownership requirements are met for a seamless establishment process.",
    
    titlethree: "Free Zone Company",
    aboutthree: "A Free Zone Company offers specific advantages such as tax exemptions and 100% foreign ownership. We help guide businesses in setting up within Oman's various free zones, providing comprehensive support for registration, licensing, and legal compliance.",
    
    titlefour: "Mainland Company",
    aboutfour: "Mainland companies in Oman are not restricted by location and can operate anywhere in the country. We assist clients in setting up businesses in the mainland, ensuring that all local regulations are followed and that the process is completed quickly and efficiently.",
    
    titlefive: "Register Company Name or Trade Name in Oman",
    aboutfive: "Registering a company name or trade name is a critical step in starting a business. We help entrepreneurs with the name registration process, ensuring the name meets Omani legal requirements and is available for use.",
    
    titlesix: "Commercial Registration Activities",
    aboutsix: "Our services include handling all commercial registration activities required to officially operate a business in Oman. From initial filings to the receipt of commercial registration certificates, we provide comprehensive support throughout the process.",
    
    titleseven: "Company Share Transfer Services in Oman",
    aboutseven: "We offer expert services for transferring shares in Oman-based companies. Whether you're expanding your business or restructuring, our team will guide you through the necessary steps and paperwork to ensure a smooth and legal transfer.",
    
    titleeight: "Limited Liability Company - LLC",
    abouteight: "A Limited Liability Company (LLC) is one of the most common business structures in Oman. We assist in the formation of LLCs, providing detailed guidance on ownership structure, responsibilities, and the legal requirements necessary for setting up an LLC.",
    
    titlenine: "Update Commercial Registration - CR",
    aboutnine: "Keeping your commercial registration up to date is essential for the smooth operation of your business. We assist with updating your company's Commercial Registration (CR) to reflect any changes in business structure, ownership, or activities.",
    
    titleten: "Sole Proprietor Company in Oman - SPC",
    aboutten: "For individual entrepreneurs, a Sole Proprietor Company (SPC) offers a simplified and efficient option. We guide you through the process of establishing an SPC in Oman, ensuring that all legal and regulatory requirements are met.",
    
    titleeleven: "Joint Partnership",
    abouteleven: "A Joint Partnership in Oman involves two or more partners sharing responsibility for a business. We assist in forming joint partnerships, ensuring that the partnership agreement aligns with local laws and regulations.",
    
    titletwelwe: "Limited Partnership",
    abouttwelwe: "A Limited Partnership offers flexible ownership structures where liability is shared between general and limited partners. Our team helps with all the steps to form a Limited Partnership in Oman, ensuring all legal and financial requirements are met.",
    
    titlethirteen: "Business Setup in Oman",
    aboutthirteen: "Our business setup services in Oman provide comprehensive support for starting a new business. We handle everything from legal paperwork to obtaining licenses, making the process simple and hassle-free for entrepreneurs.",
    
    titlefourteen: "Company Formation in Oman",
    aboutfourteen: "We specialize in company formation services in Oman, guiding you through each step of the process. From legal registration to the obtaining of required permits, we ensure a smooth and efficient establishment of your company in Oman.",
    
    titlefifteen: "Company Registration in Oman",
    aboutfifteen: "Our company registration services in Oman ensure that your business is legally recognized. We handle all aspects of the registration process, including obtaining necessary certifications and approvals from local authorities.",
    
    titleconcl: "Why Choose Our Company Formation Services",
    aboutconcl: `Starting a business in Oman can be a complex process, but with National Gulf Consultants, you get expert support every step of the way. Our team is committed to providing clear guidance, handling all the legal and regulatory requirements, and ensuring your business setup is completed quickly and efficiently. Let us help you establish your business in Oman with ease.`,
    link: "https://youtu.be/7hi5zwO75yc",
    image: companyone,
  },
  
  
];

export const ServiSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          eyebrow="Our Services" 
          title="What We Offer to Empower Your Growth"
          description="Our team is here to provide top-notch solutions tailored to your needs. Browse through each service to see how we can bring value to your business."
        />
        
        <div className="mt-10 md:mt-20">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
          
            
          >
            {portfolioProjects.map((project) => (
              <SwiperSlide key={project.kl}>
                {/* Card wrapper with border */}
                <div className="rounded-3xl p-[1px] bg-gradient-to-r from-white/20 via-white/20 to-white/20 hover:shadow-2xl hover:shadow-yellow-400/50 transition-shadow duration-300">
                  {/* Content container */}
                  <NeonGradientCard className="bg-white/5 backdrop-blur hover:bg-slate-500 rounded-3xl ">
                    <div className=" sm:p-1 p-8 md:p-12 lg:p-16 relative">
                      {/* Grain effect */}
                      <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`,
              }}>
                      
                      </div>

                      <div className="flex flex-col gap-8"> {/* Changed to flex layout */}
                        <div className="flex-1">
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
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutmain}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                           {project.titleone}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutone}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                           {project.titletwo}
                          </h3>
                          
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.abouttwo}
                            </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titlethree}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutthree}
                          </h3>
                         <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                          {project.titlefour}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutfour}
                          </h3>
                         <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                          {project.titlefive}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutfive}
                            </h3>
                            <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titlesix}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutsix}
                            </h3>
                            <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titleseven}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutseven}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titleeight}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.abouteight}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titlenine}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutnine}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titleten}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutten}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titleeleven}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.abouteleven}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titletwelwe}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.abouttwelwe}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titlethirteen}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutthirteen}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titlefourteen}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutfourteen}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titlefifteen}
                          </h3>
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutfifteen}
                          </h3>
                          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                            {project.titleconcl}
                          </h3>
                          
                          <h3 className="font-sans md:text-lg lg:text-xl sm:text-sm mt-6 sm:mt-2">
                            {project.aboutconcl}
                            </h3>
                        
                          {/* Button */}
                        <a href={project.link} className=" mt-8">
                        <div className="relative lg:mt-20 sm:mt-7">
                        <button className="bg-white/10 backdrop-blur text-gray-950 h-10 w-full  px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                         <span className="text-white/60">Services</span>
                         <ArrowUpRightIcon className="w-4 h-4 text-green-300" />
                       </button>
                         </div>
                          </a>
                        </div>

                        <div className="relative w-full h-64 md:h-96"> {/* Fixed height container */}
                            <Image
                              src={project.image}
                              alt={project.title}
                              layout="fill"
                              objectFit="contain"
                              className="mt-0" // Remove margin
                            />
                          </div>
                      </div>
                    </div>
                  </NeonGradientCard>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

