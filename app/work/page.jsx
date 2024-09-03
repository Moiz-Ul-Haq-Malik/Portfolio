"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";

//component import
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Wesite Designing",
    title: "project 1",
    desciption: "Created Markhore Adventure, a travel website using HTML, CSS, jQuery, Bootstrap, and media queries. Enhanced functionality with JavaScript for dynamic content and responsive design.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "MediaQueries" },
      { name: "JQuery" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },

  {
    num: "02",
    category: "Desktop App",
    title: "project 2",
    desciption:
      "Developed a POS Management System using C# with the MetoFramework and SQL. Integrated Crystal Reports for comprehensive data analysis and features like inventory tracking, sales reporting, and user management.",
    stack: [
      { name: "C#" },
      { name: "Metroframework" },
      { name: "Crysral Report" },
      { name: "SQL" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },

  {
    num: "03",
    category: " Web Development",
    title: "project 3",
    desciption: "Developed Venyou4You, an online venue reservation system using PHP, MySQL, HTML, CSS, Bootstrap, JavaScript, and jQuery. Enabled user-friendly booking with dynamic features and responsive design.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "MediaQueries" },
      { name: "PHP" },
      { name: "MySql" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },

  {
    num: "04",
    category: "Web & Mobile App",
    title: "project 3",
    desciption: "Working on the PRE FIR Complaint System, a web and mobile app using Flutter, Dart, Node.js, Express, and Aqueduct. Designed in Figma, the project is in progress and aims to streamline complaint filing.",
    stack: [
      { name: "Figma" },
      { name: "Dart" },
      { name: "Flutter" },
      { name: "NodeJs" },
      { name: "AQUEDUCT" },
      { name: "Firebase" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.desciption}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* slider work start */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl-h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                        {/* Image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-contain "
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
