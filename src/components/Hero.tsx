import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { TypingText } from "./TypingText";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { HERO_DATA, SECTION_IDS } from "../constants";

export function Hero() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Diferentes valores para mobile e desktop - mobile demora muito mais para desaparecer
  const yRange = isMobile ? [0, 800] : [0, 500];
  const opacityRange = isMobile ? [200, 700] : [0, 2000]; // No mobile só começa a desaparecer após 200px
  
  const y = useTransform(scrollY, yRange, [0, 0]);
  const opacity = useTransform(scrollY, opacityRange, [50, 50]);

  const scrollToContact = () => {
    const element = document.getElementById(SECTION_IDS.contact);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating animated shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <motion.div 
        className="container mx-auto relative z-10"
        style={{ y, opacity }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span className="text-sm">{HERO_DATA.badge.text}</span>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {HERO_DATA.title.part1}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                <TypingText texts={HERO_DATA.title.typingTexts} />
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {HERO_DATA.description}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" onClick={scrollToContact} className="gap-2 cursor-pointer">
                  {HERO_DATA.buttons.primary} <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" onClick={() => {
                  const element = document.getElementById(SECTION_IDS.services);
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }} className="cursor-pointer">
                  {HERO_DATA.buttons.secondary}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform"
              animate={{
                rotate: [3, 5, 3],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 1}}
            >
              <img 
                src={HERO_DATA.image.src}
                alt={HERO_DATA.image.alt}
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
