import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
  <h1 className={`${styles.heroHeadText} text-white`}>
    Ezz Aldeen <span className='text-[#915EFF]'>Alshalf.</span>
  </h1>
  <div className="max-w-screen-md text-left">

  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white whitespace-normal">
    Cybersecurity Analyst<br className="block sm:hidden" />
    <span className="block sm:inline"> | Malware Forensics and Incident Response Specialist</span>
  </h1>

  <p className="mt-4 text-sm sm:text-base md:text-lg text-white max-w-prose">
    Dedicated to deconstructing malicious software, developing detection mechanisms, and formulating post-breach response frameworks to mitigate advanced threats.
  </p>
</div>

</div>
      </div>

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