import { motion } from "framer-motion";

export default function ElevateText() {
  return (
    <motion.div
      className="absolute text-white text-6xl font-semibold tracking-widest"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 200, opacity: 1 }}
      transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
    >
      <motion.span
        initial={{ backgroundPosition: "-100% 0" }}
        animate={{ backgroundPosition: "100% 0" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="bg-gradient-to-r from-white to-white bg-[length:200%_100%] bg-clip-text text-transparent"
      >
        E L E V A T E
      </motion.span>
    </motion.div>
  );
}