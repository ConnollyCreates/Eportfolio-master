import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { headshot } from "../assets"; 

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
  <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full bg-[#DC2626]" />
      <div className="w-1 sm:h-80 h-40 red-gradient" />
    </div>

    <div className="flex flex-row items-center gap-8">
      <div>
        <h1 className="text-white text-4xl font-bold">
          Hi, I'm <span className="text-[#DC2626]">Gabriel</span>
        </h1>
        <p className="text-white-100 mt-2">
          I am a <b>Computer Science Student</b> at,  <br /> the <b>University of Central Florida</b>. <br/>
         I also compete in <b>powerlifting</b> and <b>strongman</b> meets<br /> Look around my portfolio!
        </p>
      </div>
      
      {/* Headshot */}
      <div className="hidden sm:block">
        <img
          src={headshot}
          alt="Gabriel Connolly"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#DC2626] shadow-lg"
        />
      </div>
    </div>
  </div>

  {/* Ensure ComputersCanvas is properly separated */}
  <ComputersCanvas />

  <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      
</section>

  );
};

export default Hero;