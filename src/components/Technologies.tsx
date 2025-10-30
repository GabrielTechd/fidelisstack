import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code2 } from "lucide-react";
import { TECHNOLOGIES_DATA } from "../constants";

export function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
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

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center transform rotate-12">
              <Code2 className="w-10 h-10 text-white transform -rotate-12" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4">
            {TECHNOLOGIES_DATA.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {TECHNOLOGIES_DATA.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECHNOLOGIES_DATA.technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={isInView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="cursor-pointer"
              >
                <div className="bg-gray-800 rounded-2xl p-6 border-2 border-gray-700 hover:border-blue-500 transition-all h-full relative overflow-hidden group cursor-pointer">
                  {/* Hover gradient effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mb-4 relative z-10 cursor-pointer`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl mb-2 relative z-10">{tech.name}</h3>
                  <p className="text-gray-400 relative z-10">{tech.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
