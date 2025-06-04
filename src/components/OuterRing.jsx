import { motion } from "framer-motion";

export default function TopDiamond() {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={64}
      height={64}
      // The initial state includes rotation by -180 degrees
      initial={{ x: -200, scale: 0.2, opacity: 0, rotate: -180 }}
      // The animate state brings it to its final position with no rotation
      animate={{ x: 0, scale: 1.5, opacity: 1, rotate: 2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <polygon
        points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40"
        fill="white"
        className="drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
      />
    </motion.svg>
  );
}
