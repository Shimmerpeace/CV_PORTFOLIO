import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const IntroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/**LEFT SECTION */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
        >
          Building Fast <br /> Reliable Results
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1x1 lg:text-2xl text-purple-200 max-w-2xl"
        >
          I build reliable, high-performing websites and web apps with
          efficiency and accuracy. Every projects reflects clean, maintainable
          code, transparent communication, and a strong focus on meeting
          deadlines consistently.
        </motion.p>
      </div>
      {/**RIGHT SECTION */}
      <Spline
        className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
        scene="https://prod.spline.design/ZH0N0X5EF3nNQdC1/scene.splinecode"
      />
    </section>
  );
};

export default IntroSection;
