import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import blog1 from "../../assets/images/blog1.webp";
import blog2 from "../../assets/images/blog2.webp";
import blog3 from "../../assets/images/blog3.webp";

const posts = [
  {
    id: 1,
    tag: "WEB3",
    date: "NOV 07, 2025",
    title: "Seamless user interfaces, crafted with intent.",
    img: blog3,
    textDark: true,
  },
  {
    id: 2,
    tag: "WEB3",
    date: "NOV 07, 2025",
    title: "Creative web platforms, designed for growth.",
    img:  blog2,
    textDark: false,
  },
  {
    id: 3,
    tag: "WEB3",
    date: "NOV 07, 2025",
    title: "Immersive virtual journeys, built with precision",
    img:  blog1,
    textDark: true,
  },
]

function BlogCard({ post, textOnTop }) {
  const [hovered, setHovered] = useState(false)

  const TextBox = (
    <div className={`rounded-2xl p-4 sm:p-5 md:p-5 ${post.textDark ? "bg-black" : "bg-white"}`}>
      <div className="flex items-center gap-3 mb-2 sm:mb-3 md:mb-3">
        <span className={`text-[10px] sm:text-[11px] md:text-[11px] font-bold tracking-widest ${post.textDark ? "text-white" : "text-gray-900"}`}>
          {post.tag}
        </span>
        <span className="text-[10px] sm:text-[11px] md:text-[11px] tracking-wide text-gray-400">
          {post.date}
        </span>
      </div>
      <p className={`text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-semibold leading-snug ${post.textDark ? "text-white" : "text-gray-900"}`}>
        {post.title}
      </p>
    </div>
  )

  const ImageBox = (
    <div
      className="relative rounded-2xl overflow-hidden 
                 w-[260px] h-[260px] 
                 sm:w-[300px] sm:h-[300px] 
                 md:w-[320px] md:h-[320px] 
                 lg:w-[337px] lg:h-[337px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.img
        src={post.img}
        alt={post.title}
        className="w-full h-full object-cover"
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-3 sm:bottom-4 md:bottom-4 
                       left-3 sm:left-4 md:left-4 
                       w-8 h-8 sm:w-9 sm:h-9 
                       rounded-full bg-white flex items-center justify-center shadow-md"
          >
            <span className="text-gray-900 text-lg sm:text-xl leading-none font-light">+</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <div className="flex flex-col gap-3 items-center">
      {textOnTop ? (
        <>
          {TextBox}
          {ImageBox}
        </>
      ) : (
        <>
          {ImageBox}
          {TextBox}
        </>
      )}
    </div>
  )
}

export default function BlogSection() {
  return (
    <section className="bg-[#f0eeea] py-12 sm:py-16 md:py-16 px-4 sm:px-6 md:px-10 lg:px-12">

     
      <div className="text-center mb-10 sm:mb-12 md:mb-12">
        <p className="text-[10px] sm:text-[11px] tracking-[0.2em] font-semibold text-gray-500 mb-2 sm:mb-3">
          INSIGHTS
        </p>
        <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold text-gray-900 leading-tight">
          Company blog & updates
        </h2>
      </div>

     
      <div className="max-w-6xl mx-auto grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-2 
                      lg:grid-cols-3 
                      justify-items-center 
                      gap-5 sm:gap-6 md:gap-6">
        <BlogCard post={posts[0]} textOnTop={true} />
        <BlogCard post={posts[1]} textOnTop={false} />
        <BlogCard post={posts[2]} textOnTop={true} />
      </div>

    </section>
  )
}