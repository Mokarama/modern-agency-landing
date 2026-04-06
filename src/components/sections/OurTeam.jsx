import { useState } from "react"
import { motion } from "framer-motion"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import ourTeam from "../../assets/images/reel-img.jpg"
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team6.png";

import team5 from "../../assets/images/team4.png";
import team6 from "../../assets/images/team6.png";
import team7 from "../../assets/images/team7.webp";
import team8 from "../../assets/images/team3.png";



const tabs = ["DESIGN TEAM", "DEVELOPMENT TEAM"]

const members = {
  "DESIGN TEAM": [
    { id: 1, name: "Nicolas K. Ellington", role: "FOUNDER",     img: team1 },
    { id: 2, name: "Carlos E. Ashcroft",   role: "CEO",         img:  team2},
    { id: 3, name: "Leonardo F. Ashton",   role: "UX DESIGNER", img:team3},
    { id: 4, name: "Ricardo P. Winslow",   role: "UI DESIGNER", img: team4 },
  ],

  "DEVELOPMENT TEAM": [
    { id: 5, name: "James A. Carter",  role: "LEAD DEV",     img:team5 },
    { id: 6, name: "Emma R. Collins",  role: "BACKEND DEV",  img:team6 },
    { id: 7, name: "Oliver T. Brooks", role: "FRONTEND DEV", img:team7  },
    { id: 8, name: "Sophia M. Reed",   role: "FULLSTACK DEV",img:team8  },
  ],
}

const socialIcons = [
  { key: "fb", icon: <FaFacebookF size={13} /> },
  { key: "tw", icon: <FaTwitter size={13} /> },
  { key: "li", icon: <FaLinkedinIn size={13} /> },
]

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState("DESIGN TEAM")

  return (
    <section className="bg-[#f0eeea] min-h-screen px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">

          {/* Left */}
          <div className="flex-shrink-0 md:w-[400px]">

            <p className="text-[11px] tracking-[0.15em] font-semibold text-gray-500 mb-4">
              OUR AVENGERS
            </p>

            <h2 className="text-[32px] sm:text-[38px] font-bold leading-[1.2] text-gray-900 mb-8">
              Meet with our team member
            </h2>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[11px] tracking-[0.1em] pb-3 font-semibold border-b-2 transition-colors cursor-pointer bg-transparent ${
                    activeTab === tab
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
              What began over coffee-fueled brainstorming sessions has grown into a thriving digital
              agency dedicated to helping brands stand out.
            </p>

            {/* Join Button */}
            <button className="flex items-center gap-3 group cursor-pointer bg-transparent border-none">
              <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                <span className="text-white text-lg leading-none">+</span>
              </div>
              <span className="text-[12px] tracking-[0.12em] font-semibold text-gray-900">
                JOIN WITH US
              </span>
            </button>

            {/* Team Photo */}
            <div className="mt-8 overflow-hidden rounded-2xl h-[200px]">
              <motion.img
                src={ourTeam}
                alt="team"
                className="w-full h-full object-cover"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5 }}
              />
            </div>

          </div>

          {/* Right — Member Grid */}
          <div className="flex-1 flex flex-wrap gap-5">
            {members[activeTab].map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm w-[300px] h-[453px]"
              >
                {/* Image */}
                <div className="flex items-center justify-center pt-4">
                  <div className="w-[280px] h-[280px] overflow-hidden rounded-xl">
                    <motion.img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="px-5 pt-4">
                  <p className="text-[20px] font-semibold text-black">
                    {member.name}
                  </p>

                  <p className="text-[14px] text-gray-500 mt-[10px] mb-4">
                    {member.role}
                  </p>

                  {/* Social Icons */}
                  <div className="flex items-center gap-2">
                    {socialIcons.map(({ icon, key }) => (
                      <motion.button
                        key={key}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.4 }}
                        className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 
                                   hover:bg-black hover:text-white hover:border-black transition-all"
                      >
                        {icon}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}