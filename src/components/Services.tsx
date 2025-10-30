import { Card, CardContent } from "./ui/card";
import { FloatingParticles } from "./FloatingParticles";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SERVICES_DATA, SECTION_IDS } from "../constants";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={SECTION_IDS.services} className="py-20 px-4 bg-white relative overflow-hidden">
      <FloatingParticles count={20} />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {SERVICES_DATA.title}
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {SERVICES_DATA.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="border-2 hover:border-blue-600 transition-all hover:shadow-lg h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="pt-6 relative z-10">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
