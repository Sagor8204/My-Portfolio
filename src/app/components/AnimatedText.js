import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  return (
    <motion.h1
      className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-(--primary) via-(--primary-hover) to-(--secondary)"
      initial={{ opacity: 0, y: 30, backgroundPosition: "0% 50%" }}
      animate={{ 
        opacity: 1, 
        y: 0,
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
      }}
      transition={{ 
        y: { duration: 0.8, delay: 0.3 },
        opacity: { duration: 0.8, delay: 0.3 },
        backgroundPosition: { 
          duration: 5, 
          repeat: Infinity, 
          ease: "linear" 
        }
      }}
      style={{
        backgroundSize: "200% auto",
      }}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedText