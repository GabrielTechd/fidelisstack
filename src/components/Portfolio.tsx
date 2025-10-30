import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { PORTFOLIO_DATA, SECTION_IDS } from "../constants";

function ProjectCard({ project, index }: { project: typeof PORTFOLIO_DATA.projects[0], index: number }) {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  const handleProjectClick = () => {
    window.open(project.link, '_blank');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        ref={cardRef}
        style={{ y, rotateX }}
        whileHover={{ scale: 1.03, rotateY: 2 }}
        transition={{ duration: 0.3 }}
      >
        <Card 
          className="group overflow-hidden border-2 hover:border-blue-600 transition-all hover:shadow-2xl cursor-pointer"
          onClick={handleProjectClick}
        >
          <div className="relative overflow-hidden cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </motion.div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute bottom-4 left-4 right-4 text-white cursor-pointer">
                <motion.div 
                  className="flex items-center gap-2 cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Ver Projeto</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Badge className="absolute top-4 right-4 bg-blue-600">
                {project.category}
              </Badge>
            </motion.div>
          </div>
          <CardContent className="pt-6">
            <h3 className="text-xl mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} id={SECTION_IDS.portfolio} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decoration with parallax */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"
        style={{ y: y2 }}
      />

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
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {PORTFOLIO_DATA.title}
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {PORTFOLIO_DATA.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
