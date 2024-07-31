"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface VacancyItem {
  jobTitle: string;
  position: string;
  location: string;
  pay: string;
}

const vacancies: VacancyItem[] = [
  {
    jobTitle: "Senior Full-Stack Engineer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "€65-85k, 0.5%-1.5% equity share options",
  },
  {
    jobTitle: "Senior Designer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "€40-55k, 0.25%-0.50% equity share options",
  },
  {
    jobTitle: "Superstar Intern",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "€20-24k, 0.5%-1.50% equity share options",
  },
];

const Vacancy = () => {
  return (
    <section className="mt-20 py-8 px-6 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0.5, x: "-50%" },
        }}
        className="w-full overflow-hidden"
      >
        <span className="text-4xl lg:text-5xl font-bold">Open Vacancies</span>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vacancies.map((vac, index) => (
          <VacancyCard key={index} vacancy={vac} />
        ))}
      </div>
    </section>
  );
};

interface VacancyCardProps {
  vacancy: VacancyItem;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);

  return (
    <motion.div
      initial={{ height: 170 }}
      whileHover={{ height: 250 }}
      onHoverStart={() => setButtonVisible(true)}
      onHoverEnd={() => setButtonVisible(false)}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-[#fefbec] rounded-lg hover:bg-[#ece7d1] cursor-pointer"
    >
      <div className="p-6 rounded-2xl">
        <h2 className="text-lg lg:text-xl font-bold">{vacancy.jobTitle}</h2>
        <ul className="mt-4 text-sm lg:text-base font-semibold list-disc pl-4">
          <li>{vacancy.position}</li>
          <li>{vacancy.location}</li>
          <li>{vacancy.pay}</li>
        </ul>
      </div>
      {isButtonVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          className="mx-10 text-white bg-black rounded-full px-3 py-2 mt-4"
        >
          Click Me
        </motion.button>
      )}
    </motion.div>
  );
};

export default Vacancy;
