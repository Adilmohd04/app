"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const RunningCard = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const boxContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const currentBoxRef = boxContainerRef.current;
      if (currentBoxRef) {
        currentBoxRef.scrollBy({
          top: 0,
          left: 500,
          behavior: "smooth",
        });
      }
    }
  }, [isIntersecting]);

  const cardContent = [
    {
      emoji: "😠",
      title: "You argue with a colleague",
      description: "You get angry and defensive, instead of staying open and working towards common ground.",
      bgColor: "bg-purple-200",
    },
    {
      emoji: "😳",
      title: "You get a promotion at work",
      description: "You question yourself and feel like an unqualified imposter instead of trusting yourself & your abilities.",
      bgColor: "bg-blue-300",
     
    },
    {
      emoji: "🤨",
      title: "You attend a class reunion",
      description: "You compare yourself with your peers instead of focusing on your own growth.",
      bgColor: "bg-yellow-200",
    },
    {
      emoji: "😒",
      title: "You are at a lively dinner party",
      description: "You play on your phone instead of confidently approaching strangers and striking up a chat.",
      bgColor: "bg-violet-600",
      textColor: "text-gray-700",
    },
    {
      emoji: "😬",
      title: "You hit a dead end in a negotiation",
      description: "You get frazzled, nervous, and frustrated instead of staying optimistic and solution-oriented.",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <section className="overflow-x-hidden mt-12 mb-32 p-4 px-20" ref={ref}>
      <div className="flex flex-row items-center justify-between">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <h1 className="text-5xl font-bold px-4 mb-5">
            Does this sound familiar...
          </h1>
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
              x: [0, -100, -300, -450, -390],
              y: [35, 20, 10, 0, -10],
              rotate: [-20, -45, -35, -35, -35, -35, -5],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Image width={70} height={70} alt="Red Ghost" src="/red-ghost.png" />
        </motion.div>
      </div>
      <div
        className="p-10 flex space-x-8 gap-7 items-center overflow-x-auto hide-scrollbar h-250"
        ref={boxContainerRef}
      >
        {cardContent.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl ${card.bgColor} min-w-[350px] p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}
          >
            <span className="text-3xl">{card.emoji}</span>
            <h3 className={`font-bold text-lg ${card.textColor || ""}`}>
              {card.title}
            </h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RunningCard;
