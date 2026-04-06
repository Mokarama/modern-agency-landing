import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo-dark.png";
import approImg from "../../assets/images/appro-img.webp";
import winnerLogo from "../../assets/images/winner-logo.png";
import winnerLogo2 from "../../assets/images/winer-logo2.png";

/* ---------------- COUNTER HOOK ---------------- */
function useCounter(end, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const incrementTime = 16;
    const steps = duration / incrementTime;
    const stepValue = end / steps;

    const counter = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [inView, end, duration]);

  return { count, ref };
}

/* ---------------- PROGRESS BAR ---------------- */
const ProgressBar = ({ label, value, highlight }) => (
  <div className="relative rounded-xl overflow-hidden">
    
    {/* Background track */}
    <div className="absolute inset-0 bg-gray-100 rounded-xl" />

    {/* Progress fill */}
    <div
      className={`absolute inset-y-0 left-0 rounded-xl transition-all duration-700 ${
        highlight ? "bg-black" : "bg-gray-200"
      }`}
      style={{ width: `${value}%` }}
    />

    {/* Text */}
    <div className="relative flex justify-between items-center px-4 py-3">
      <span
        className={`text-sm font-semibold ${
          highlight ? "text-white" : "text-gray-800"
        }`}
      >
        {label}
      </span>
      <span
        className={`text-sm font-bold ${
          highlight ? "text-white" : "text-gray-500"
        }`}
      >
        {value}%
      </span>
    </div>

  </div>
);

/* ---------------- MAIN COMPONENT ---------------- */
const ApproachSection = () => {
  const { count, ref } = useCounter(25);

  return (
    <>
    <main className="bg-white">

      {/* ================= APPROACH SECTION ================= */}
      <section className="px-5 md:px-10 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute w-full h-full border border-gray-300 rounded-full" />
              <img src={logo} alt="logo" className="w-10 h-10" />
            </div>

            <p className="text-gray-500 text-[16px] leading-relaxed max-w-[320px]">
              We design every project with long-term success in mind.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-5xl font-medium leading-snug text-[#0A0A0A]">
              Our approach is straightforward—
              prioritizing functionality, speed, and clarity for solutions.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="px-5 md:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] gap-6">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-between h-[500px]"
          >
            <div>
              <h1
                ref={ref}
                className="font-semibold text-[68px] md:text-[120px]"
              >
                {count}
                <span className="text-gray-400">+</span>
              </h1>

              <p className="text-gray-500 mt-2 text-[14px] md:text-[20px]">
                Years of experience
              </p>

              <div className="h-px bg-gray-300 my-6" />

              <p className="text-gray-600 leading-relaxed text-[18px]">
                Explore how we transform ideas into extraordinary digital experiences.
              </p>
            </div>

            <div>
              <div className="flex -space-x-3 mb-3 md:mb-[15px]">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt=""
                  />
                ))}
              </div>

              <p className=" text-[14px] md:text-[20px] font-black ">
                1200+ happy users review
              </p>
            </div>
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-black  rounded-2xl overflow-visible flex items-end p-6 h-[435px] md:h-[500px]"
          >
            <motion.img
              src={approImg}
              alt="portrait"
              animate={{ y: [0, -40, 0] }}
              transition={{
                duration: 2,
                repeat: 2,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] md:w-[380px] object-contain z-10"
            />

            <div className="absolute top-6 right-6 flex flex-col gap-4 z-20">
              <img src={winnerLogo} className="w-20 opacity-80" alt="" />
              <img src={winnerLogo2} className="w-20 opacity-80" alt="" />
            </div>

            <div className="relative z-20 text-white ml-3">
              <p className="text-[24px] leading-relaxed">
                “At Floka, we merge strategy, creativity, and technology to shape brands that people love.”
              </p>

              <p className="mt-4 text-[14px] text-gray-300">
                Merizo H. Yelso <span className="text-gray-400">/CEO</span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
             <div className="flex flex-col gap-6 h-[450px] md:h-[500px]">

      {/* SOCIAL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 rounded-2xl p-6"
      >
        <h4 className="text-sm text-gray-400">Follow us</h4>
        <h3 className="text-lg font-semibold mb-4">For check updates</h3>

        <div className="flex flex-wrap gap-2">
          {["Dribbble", "Behance", "LinkedIn", "X", "Xing"].map((item) => (
            <button
              key={item}
              className="px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium tracking-wide hover:bg-black hover:text-white hover:border-black transition"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </motion.div>

      {/* IMPRESSIONS */}
  {/* IMPRESSIONS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-100 rounded-2xl p-6 flex flex-col gap-3"
      >
        <p className="text-sm text-gray-400">Impressions</p>

   
        <div className="relative flex flex-col">

          <div className="relative z-10">
            <ProgressBar label="Explore" value={72} />
          </div>

          <div className="relative z-20 -mt-2">
            <ProgressBar label="UI/UX" value={90} highlight />
          </div>

          <div className="relative z-10 -mt-2">
            <ProgressBar label="Solutions" value={100} />
          </div>

        </div>

      </motion.div>

    </div>

        </div>
      </section>

    </main>
    {/* Scrolling Text */}

<div
  className="absolute left-0 top-0 h-full w-40 z-10 pointer-events-none"
  style={{ background: "linear-gradient(90deg, #f5f5f5 0%, rgba(245,245,245,0) 100%)" }}
/>

{/* Right fade */}
<motion.div
  className="flex whitespace-nowrap"
  animate={{ x: ["0%", "-50%"] }}
  transition={{
    duration: 12,
    ease: "linear",
    repeat: Infinity,
  }}
  style={{
    maskImage: "linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%)",
  }}
>
  {[1, 2].map((_, i) => (
    <span key={i} className="text-[70px]  text-black mx-8">
    Our team combines creativity, technology Our team combines creativity, technology Our team combines creativity, technology Our team combines creativity, technology 
    </span>
  ))}
</motion.div>

</>
  );
};

export default ApproachSection;