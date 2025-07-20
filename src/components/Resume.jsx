import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { resume } from "../assets";

const Resume = () => {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className="bg-hero-pattern">
        <div className="relative w-full h-[200px] mx-auto">
          <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#DC2626]" />
              <div className="w-1 sm:h-20 h-10 red-gradient" />
            </div>
            <div>
              <h1 className="text-white text-4xl font-bold">
                <span className="text-[#DC2626]">Resume</span>
              </h1>
              <p className="text-white-100 mt-2">
                Download or view my professional resume
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header with download button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-white text-3xl font-bold mb-4">Gabriel Connolly</h2>
          <p className="text-secondary text-lg mb-6">Computer Science Student | Software Developer | Strongman Competitor</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href={resume}
              download="Gabriel-Connolly-Resume.pdf"
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              <span>⬇️</span> Download PDF Resume
            </a>
            <a
              href="/"
              className="text-[#DC2626] hover:text-[#EF4444] font-semibold transition-colors duration-200"
            >
              ← Back to Portfolio
            </a>
          </div>
        </motion.div>

        {/* PDF Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <iframe
            src={resume}
            width="100%"
            height="800"
            className="border-0"
            title="Gabriel Connolly Resume"
          ></iframe>
        </motion.div>

        {/* Bottom navigation */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-[#DC2626] hover:text-[#EF4444] font-semibold transition-colors duration-200"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
