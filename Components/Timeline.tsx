"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0.1;
    transform: translate2d( -50px, 0);
  }

  to {
    opacity: 1;
    transform: translate2d( 0, 0);
  }
`;

const Timeline = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="px-6 lg:px-20 mt-10 mb-24">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <motion.div
          className="inline-block mb-8 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <div className="text-md font-semibold text-black">
            Wrong with self improvement & how we&apos;re fixing it.
          </div>
          <div className="text-4xl lg:text-5xl pb-3 font-bold text-black">
            Self-improvement. Ugh.
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 2.1, ease: "easeInOut", type: "spring", delay: 0.3 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -450],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35, -35, -35, -35, -2],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="flex items-center justify-center"
        >
          <Image
            src="/blue-ghost.png"
            alt="download applestore"
            width={70}
            height={70}
          />
        </motion.div>
      </div>

      <div className="timeline px-6 lg:px-20 pt-14 h-96 overflow-y-scroll">
        <div className="border-l-2 border-l-violet-300 flex flex-col gap-16">
          <Reveal keyframes={customAnimation}>
            {[...Array(10)].map((_, index) => (
              <div key={index}>
                <motion.div className="max-w-full lg:max-w-[40rem] relative align-top pl-8">
                  <div style={{ left: "-12px" }} className="absolute">🟣</div>
                  <p className="text-lg lg:text-xl font-bold">It&apos;s not easy as 1-2-3.</p>
                  <p className="mt-3">
                    The journey may be long but our sessions are quick. We get
                    to the point and tell you what you want to know (and nothing
                    else).
                  </p>
                </motion.div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
