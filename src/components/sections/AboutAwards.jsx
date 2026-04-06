import { motion } from "framer-motion"
import awardsBanner from "../../assets/images/award-banner.jpg"
const awards = [
  { title: "BEST DESIGNER AWARDS",    company: "AWWWARDS", year: "2025" },
  { title: "PEAKY UI DESIGNER",       company: "GOOGLE",   year: "2024" },
  { title: "GREAT IN UX",             company: "APPLE",    year: "2023" },
  { title: "BEST WEBSITE PICK",       company: "MICROSOFT",year: "2022" },
  { title: "NELSON UI & UX DESIGNER", company: "SAMSUNG",  year: "2021" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
}

export default function AboutAwards() {
  return (
    <section className="bg-[#f0eeea] min-h-screen px-6 md:px-16 py-14">

     
      <div className="flex justify-center mb-10">
        <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center bg-transparent">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M9 3h10v8a5 5 0 0 1-10 0V3z" stroke="#bbb" strokeWidth="1.5" fill="none" />
            <path d="M9 7H5a3 3 0 0 0 3 3M19 7h4a3 3 0 0 1-3 3" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M14 16v4M10 24h8" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

   
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start max-w-6xl mx-auto">

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-3 flex-shrink-0"
        >
          <img
            src={awardsBanner}
            alt="team"
            className="w-full md:w-[260px] h-[280px] object-cover rounded-2xl"
          />
          <p className="text-[11px] tracking-[0.15em] font-semibold text-gray-500 mt-1">
            GET REWARDS
          </p>
        </motion.div>

        {/* Right */}
        <div className="flex-1">

         
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[28px] sm:text-[34px] md:text-[42px] font-bold leading-[1.2] text-gray-900 mb-10"
          >
            Driven by passion and grounded in expertise, our team turns bold
            ideas into reality, leading the way in creative innovation.
          </motion.h2>

      
          <div className="flex flex-col">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                whileHover={{ scaleX: 0.97, backgroundColor: "#ffffff" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex items-center justify-between py-4 border-b border-gray-300 gap-4 rounded-xl px-4 origin-left"
              >
                <span className="text-[11px] sm:text-xs tracking-[0.12em] font-semibold text-gray-800 flex-1">
                  {award.title}
                </span>
                <span className="text-[11px] sm:text-xs tracking-[0.1em] text-gray-400 flex-1 text-center">
                  {award.company}
                </span>
                <span className="text-[11px] sm:text-xs tracking-[0.1em] text-gray-400 text-right">
                  {award.year}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}