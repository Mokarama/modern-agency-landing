import { motion } from "framer-motion";

import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import user5 from "../../assets/images/user5.png";
import user6 from "../../assets/images/user6.png";
import user7 from "../../assets/images/user7.png";

const logos = [
  { id: 1, name: "Logoipsum", img: user1 },
  { id: 2, name: "Logoipsum", img: user2 },
  { id: 3, name: "Logoipsum", img: user3 },
  { id: 4, name: "Logoipsum", img: user4 },
  { id: 5, name: "Logoipsum", img: user5 },
  { id: 6, name: "Logoipsum", img: user6 },
  { id: 7, name: "Logoipsum", img: user7 },
];

export default function HappyUser() {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-12 md:py-16 bg-[#f6f6f6]">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6 text-xs sm:text-sm text-gray-600">
        <h2 className="uppercase tracking-wide">Happy Users</h2>
        <p className="text-left sm:text-right">©2025 CASE-THEMES™ STUDIO</p>
      </div>

      {/* Grid Container */}
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-b border-r border-gray-100">

          {/* Logos */}
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center h-[160px] border-t border-l border-gray-100 "
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="w-[167px] h-[50px] object-contain"
                loading="lazy "
              />
            </motion.div>
          ))}

          {/* CTA Box */}
          <div className="flex flex-col items-center justify-center text-center h-[120px] sm:h-[140px] md:h-[160px] border-t border-l border-gray-100 text-gray-400 px-2">
            <p className="text-[10px] sm:text-xs mb-1 tracking-wide">
              NEXT CAN BE YOU.
            </p>
            <button className="text-xs sm:text-sm font-medium hover:underline">
              LET'S TALK
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}