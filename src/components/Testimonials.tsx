import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { TESTIMONIALS_DATA, SECTION_IDS } from "../constants";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={SECTION_IDS.testimonials} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            {TESTIMONIALS_DATA.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {TESTIMONIALS_DATA.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-white border-2 hover:shadow-lg transition-all h-full">
                <CardContent className="pt-6">
                  <motion.div
                    initial={{ rotate: -10, opacity: 0 }}
                    animate={isInView ? { rotate: 0, opacity: 0.5 } : { rotate: -10, opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <Quote className="w-10 h-10 text-blue-600 mb-4" />
                  </motion.div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.2 + 0.1 + (i * 0.05) }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">{testimonial.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
