import React from "react";

const Sentence = () => {
  return (
    <section className="mt-12 md:mt-20 px-4 md:px-20 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        <div className="text-2xl md:text-4xl font-bold p-4">
          EQ beats IQ
        </div>
        <div className="text-base md:text-xl font-normal p-4">
          People with high emotional intelligence (EQ) live more fulfilled lives.
          They tend to be happier and have healthier relationships.
        </div>
        <div className="text-base md:text-xl font-normal p-4">
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29k more a year.
        </div>
      </div>
    </section>
  );
};

export default Sentence;
