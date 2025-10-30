import { Card, CardContent } from "./ui/card";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PROCESS_DATA, SECTION_IDS } from "../constants";

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={SECTION_IDS.process} className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            {PROCESS_DATA.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {PROCESS_DATA.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_DATA.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {index < PROCESS_DATA.steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-14 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="relative z-10 bg-white border-2 hover:shadow-lg transition-all h-full">
                    <CardContent className="pt-6 text-center">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.div 
                        className="text-sm text-blue-600 mb-2"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                      >
                        {step.number}
                      </motion.div>
                      <h3 className="text-xl mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
