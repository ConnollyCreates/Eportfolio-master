import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { floridaAcademicScholar, thetaChiAward, wellsFargoSpeaking, strongmanBg3 } from "../assets";

const HighlightCard = ({ index, title, description, image, date }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] max-w-[360px] mx-auto"
  >
    <div className="relative w-full h-[200px] sm:h-[230px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl"
        style={{
          objectPosition: 'center 30%',
          transform: 'scale(0.9)',
          transformOrigin: 'center top'
        }}
      />
    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{title}</h3>
      <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed">{description}</p>
      {date && (
        <p className="mt-4 text-[#DC2626] text-[11px] sm:text-[12px] font-semibold">{date}</p>
      )}
    </div>
  </motion.div>
);

const Highlights = () => {
  const highlights = [
    {
      title: "Florida Academic Scholar",
      description: "I was proud to earn the Florida Academic Scholars Award, the highest tier of the Bright Futures Scholarship, which covers 100% of tuition and fees at public universities across the state. This distinction required meeting a set of rigorous standards, including maintaining a 3.5 GPA, completing over 100 hours of community service, and scoring at least a 1330 on the SAT. Balancing academics with volunteer commitments throughout high school taught me how to manage my time, stay consistent, and remain focused on long-term goals. My service hours gave me a deeper understanding of community impact, especially when I volunteered for the Salvation Army. Receiving this award made it possible for me to pursue a degree in computer science at UCF while staying motivated to pay that opportunity forward. It continues to serve me as a reminder of the discipline, accountability, and effort that drive both my academic and personal success.",
      image: floridaAcademicScholar,
      date: "Aug 2023"
    },
    {
      title: "Resolute Man Award",
      description: "I was honored to be selected as 1 of 10 students nationally for the Resolute Man Commercial Banking Experience at Fifth Third Bank Headquarters in Cincinnati through Theta Chi. This immersive program offered a deep dive into commercial banking, payments infrastructure, and financial leadership. I engaged in networking events with senior executives, explored the bank’s core values and long-term vision, and gained firsthand exposure to the inner workings of a major financial institution. I was also awarded the Resolute Man distinction, one of the most prestigious honors in Theta Chi Fraternity, recognizing exceptional leadership, community involvement, character, and service.",
      image: thetaChiAward,
      date: "Jun 2025"
    },
    {
      title: "Wells Fargo Study Groups",
      description: "As a participant in Wells Fargo’s competitive Sophomore Discovery Fellowship Program, I had the opportunity to explore the intersection of technology, finance, and innovation. Throughout the summer, I led multiple peer study groups where I shared insights with fellow interns on Wells Fargo’s AI roadmap, cloud migration strategy, and risk management practices. These sessions fostered collaborative learning and helped others and myself understand the practical implications of AI within the banking sector.",
      image: wellsFargoSpeaking,
      date: "Jul 2025"
    },
    {
      title: "Strongman Competitions",
      description: "I compete in strongman and powerlifting competitions, where I’ve developed a deep sense of physical and mental resilience through disciplined training and eating. I’m coached by Andrew Clayton, a 105kg World’s Strongest Man competitor and national champion, under whose guidance for the past 5 years, I’ve continuously pushed my limits. My personal records include a 507 lb deadlift, 385 lb squat, and 275 lb bench press along with different strongman event PR's. These competitions have taught me how to set goals, adapt under pressure, and stay consistent, all traits I carry into every aspect of life and work. Fun Fact: My dream is to have my own very intricate garage gym or opening a gym of my own.",
      image: strongmanBg3,
      date: "Ongoing"
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Key Moments</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Professional & Personal Highlights!</h2>
      </motion.div>

      <div className="w-full flex justify-center px-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] sm:text-[18px] max-w-3xl leading-7 sm:leading-[50px] text-center"
        >
          A resume is just words on a page, here's a look at who I am beyond the bullet points.
        </motion.p>
      </div>

      <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-5 sm:gap-7 px-4">
        {highlights.map((highlight, index) => (
          <HighlightCard key={`highlight-${index}`} index={index} {...highlight} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Highlights, "highlights");