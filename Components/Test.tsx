"use client";
import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <section className="mt-20 flex flex-col gap-3 text-center p-4 md:p-8">
      <p className="text-center font-semibold text-lg md:text-xl">We take privacy seriously</p>
      <p className="font-bold text-2xl md:text-3xl">Before you get started</p>
      <p className="text-md md:text-xl font-normal">
        &quot;We won&apos;t share your answers with anyone (and won&apos;t ever tell <br className="hidden md:inline" />
        you which friends said what about you)&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="font-semibold text-lg md:text-xl">
          with Love, <b><i>Team Ahead</i></b>
        </p>
      </div>
      <motion.div
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 1, delayChildren: 0.7 }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="pt-3"
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <button className="rounded-3xl p-3 px-6 text-white bg-black font-semibold">
            Start a test
          </button>
        </motion.div>
        <div className="text-sm mt-4 font-semibold">Take only 5 minutes</div>
      </motion.div>
    </section>
  );
};

export default Test;
