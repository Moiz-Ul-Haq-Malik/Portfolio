"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "UI/UX Designer",
    description:
      "UI/UX Designer with extensive experience in Figma, Adobe Photoshop, and Illustrator. Designed multiple projects, applying skills to craft intuitive and visually engaging user interfaces and experiences.",
    href: "",
  },

  {
    num: "02",
    title: "Web Designer",
    description:
      "Web Designer with expertise in Figma, Adobe Photoshop, and Illustrator. Designed projects like Markhore Adventure and Venyou4You, using HTML, CSS, jQuery, Bootstrap, and JavaScript for dynamic, responsive websites.",
    href: "",
  },

  {
    num: "03",
    title: "Web Developer",
    description:
      "Web Developer skilled in C#, PHP, SQL, HTML, CSS, JavaScript, and frameworks like Bootstrap and jQuery. Developed POS Management System, Markhore Adventure, and Venyou4You, with dynamic features and responsive design.",
    href: "",
  },

  {
    num: "04",
    title: "Mobile App Developer",
    description:
      "Mobile App Developer with experience in Flutter and Dart. Currently working on the PRE FIR Complaint System, using Node.js, Express, and Aqueduct. Designed with Figma and integrating various features.",
    href: "",
  },

  {
    num: "05",
    title: "Marketing Specialist",
    description:
      "Marketing Specialist with expertise in digital strategies and campaign management. Utilizes data analytics for performance optimization and growth, proficient in various marketing tools and techniques.",
    href: "",
  },

  {
    num: "05",
    title: "Shopify Specialist",
    description:
      "Shopify Designer with experience designing multiple websites, including ZEMIMAAS. Skilled in creating custom, user-friendly e-commerce solutions with a focus on functionality and aesthetics.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12  mt-16 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {services.num}
                  </div>

                  <Link
                    href={services.href}
                    className="w-[55px] h-[55px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {services.title}
                </h2>
                {/* Description */}
                <p className="text-white/60">{services.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
