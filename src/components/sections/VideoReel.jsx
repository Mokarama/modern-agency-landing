import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const YOUTUBE_ID = "dQw4w9WgXcQ"

export default function VideoReel() {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div className="flex items-center justify-center w-full">

      <div
        className="relative rounded-2xl overflow-hidden mx-auto cursor-pointer"
        style={{ width: "75%", height: "600px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        {/* Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400"
          alt="reel cover"
          className="w-full h-full object-cover block"
          animate={{ filter: hovered ? "blur(4px)" : "blur(0px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Play Reel Button */}
        <motion.button
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.97 }}
          animate={
            hovered
              ? { bottom: "50%", left: "50%", x: "-50%", y: "50%", scale: 1.08 }
              : { bottom: "24px", left: "24px", x: "0%", y: "0%", scale: 1 }
          }
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute flex items-center gap-2.5 bg-white rounded-full px-5 py-2.5 cursor-pointer border-none shadow-md"
        >
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center flex-shrink-0">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <path d="M1 1l8 5-8 5V1z" fill="white" />
            </svg>
          </div>
          <span className="text-[13px] font-bold tracking-widest text-gray-900">
            PLAY REEL
          </span>
        </motion.button>

        {/* Modal Overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            >
              <motion.div
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.88, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-[90vw] max-w-4xl aspect-video rounded-xl overflow-hidden"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full border-none"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer border-none hover:bg-black/90 transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}