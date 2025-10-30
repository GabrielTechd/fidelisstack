import { Check } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BENEFITS_DATA, SECTION_IDS } from "../constants";

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id={SECTION_IDS.benefits} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={imageRef}
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div style={{ y }}>
              <img 
                src={BENEFITS_DATA.image.src}
                alt={BENEFITS_DATA.image.alt}
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </motion.div>
          </motion.div>
          <motion.div 
            ref={ref}
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Por que escolher a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-transparent">Fidelis Stack</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {BENEFITS_DATA.subtitle}
            </p>
            <div className="space-y-4">
              {BENEFITS_DATA.benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
