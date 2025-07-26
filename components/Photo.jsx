"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative style={{ backgroundColor: '#1c1c22' }}">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="relative w-[290px] h-[290px] xl:w-[380px] xl:h-[380px] mix-blend-lighten"
          //   style={{ transform: "translateX(-8.5rem)" }}
        >
          {/* Image */}
          <Image
            src="/Portfolio/assets/Profile.png"
            priority
            quality={100}
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            alt=""
            className="object-contain rounded-full"
          ></Image>

          {/* Circle */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="270"
              stroke="#FFD700"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: [
                  "15 120 25 25",
                  "16 25 92 72",
                  " 4 250 22 22",
                ],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
