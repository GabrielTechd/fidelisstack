import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { CTA_BANNER_DATA, SECTION_IDS } from "../constants";

export function CTABanner() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const scrollToContact = () => {
    const element = document.getElementById(SECTION_IDS.contact);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="py-20 px-4 bg-gray-50 relative z-50 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-400 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto relative z-50">
        <motion.div
          ref={ref}
          style={{ y, rotate, scale }}
          className="relative bg-gradient-to-br from-blue-900 border via-blue-800 to-blue-700 rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Animated patterns */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border-2 border-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-6" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Pronto para{" "}
              <span className="relative inline-block">
                <motion.span
                  className="relative"
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Decolar
                </motion.span>
                <motion.span
                  className="absolute inset-0 rounded-lg z-50"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
              ?
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {CTA_BANNER_DATA.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-white text-blue-600 hover:bg-gray-100 gap-2 text-lg px-8 cursor-pointer"
                >
                  {CTA_BANNER_DATA.buttons.primary} <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById(SECTION_IDS.portfolio);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 cursor-pointer"
                >
                  {CTA_BANNER_DATA.buttons.secondary}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
