import { motion } from "framer-motion";

export default function TopHalfStar() {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={80}
      height={80}
      className="absolute -top-20"
      initial={{ x: -100, scale: 0.3, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <clipPath id="topHalf">
        <rect x="0" y="0" width="100" height="50" />
      </clipPath>
      <polygon
        points="50,0 100,50 50,100 0,50"
        fill="white"
        clipPath="url(#topHalf)"
        className="drop-shadow-[0_0_12px_white]"
      />
    </motion.svg>
  );
}