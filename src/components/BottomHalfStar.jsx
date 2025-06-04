import { motion } from "framer-motion";

export default function BottomHalfStar() {
const pathD = "M50 5 L61 35 L95 35 L67 55 L78 85 L50 65 L22 85 L33 55 L5 35 L39 35 Z";
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={120}
      height={120}
      className="absolute top-1/2 transform -translate-y-1/2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 2, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <clipPath id="bottomHalf">
        <rect x="0" y="50" width="100" height="50" />
      </clipPath>

      <motion.path
        d={pathD}
        fill="none" // Initially no fill
        stroke="white" // Set stroke color for drawing
        strokeWidth="2" // Set stroke width
        clipPath="url(#bottomHalf)"
        initial={{ pathLength: 0 }} // Start with no path drawn
        animate={{ pathLength: 1 }} // Animate drawing the full path
        transition={{
          duration: 1.5, // Duration for the drawing animation
          ease: "easeInOut",
        }}
      />
      {/* This path will fill with white after the drawing animation */}
      <motion.path
        d={pathD}
        fill="white"
        clipPath="url(#bottomHalf)"
       // className="drop-shadow-[0_0_12px_white]"
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in after drawing
        transition={{
          delay: 1, // Start fading in after the drawing animation completes
          duration: 5, // Duration for the fade-in
          ease: "easeOut",
        }}
      />
    </motion.svg>
  );
}