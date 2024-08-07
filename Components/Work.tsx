"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div className="px-6 lg:px-20 my-32">
      <section className="mt-16 rounded-2xl bg-violet-100 p-6 lg:p-12 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center text-4xl lg:text-5xl font-bold">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "-50%" },
            }}
          >
            <span>Work with us</span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "50%" },
            }}
          >
            <span className="text-violet-800">ahead</span>
          </motion.div>
        </div>
        <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-6 lg:gap-20 overflow-hidden">
          <div className="grow">
            <div className="rounded-2xl bg-white pt-8 max-w-full lg:max-w-[30rem] shadow-lg">
              <motion.div
                className="pl-4 inline-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 4 }}
                variants={{
                  visible: {
                    opacity: [0.8, 0.9, 1.01, 1],
                    scale: [0.6, 0.55, 0.8, 1],
                    rotate: [0, 45, -35, 10, 0],
                  },
                  hidden: { opacity: 0, scale: 0.5, rotate: 0 },
                }}
              >
                <Image width={30} height={30} alt="" src="/ghost.png" />
              </motion.div>
              <div className="flex flex-col gap-3 p-4">
                <h2 className="text-lg lg:text-xl font-bold">About</h2>
                <p className="font-normal">
                  At ahead our goal is to make self-improvement fun and lasting.
                  We know there&apos;s a way how to make it work. And that&apos;s what
                  aHead is all about!
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-8 p-4 rounded-2xl mt-8 bg-orange-50">
                <h2 className="text-lg lg:text-xl font-bold">Product</h2>
                <p className="font-normal">
                  Sure, you could spend ages reading books or sitting in seminars
                  on how to become a better spouse, parent, or manager - like we
                  did...
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-h-[75vh] overflow-y-auto pr-4 lg:pr-6 custom-scrollbar">
            {[...Array(6)].map((val, index) => (
              <div
                className="p-4 bg-white rounded-2xl space-y-6 w-full lg:w-[20rem]"
                key={index}
              >
                <h2 className="font-bold text-lg lg:text-xl">
                  Power through, even when the going gets tough
                </h2>
                <p className="font-normal">
                  We are a team of passionate people who love to build amazing
                  products. We really love our work and we do it with pleasure.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
