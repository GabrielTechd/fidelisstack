import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { motion, useInView } from "motion/react";
import { CONTACT_DATA, SECTION_IDS } from "../constants";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(CONTACT_DATA.form.successMessage);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id={SECTION_IDS.contact} className="py-20 px-4 bg-gradient-to-br from-blue-900 to-cyan-600 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            ref={ref}
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{
                background: 'linear-gradient(45deg, #00E5FF, #00BCD4, #0097A7)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 3s ease-in-out infinite alternate'
              }}
            >
              {CONTACT_DATA.title}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {CONTACT_DATA.subtitle}
            </p>
            
            <div className="space-y-6">
              {CONTACT_DATA.contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-blue-100">{item.label}</p>
                      <p className="text-lg">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="name" className="block text-sm mb-2">{CONTACT_DATA.form.fields.name.label}</label>
                    <Input 
                      id="name"
                      type="text" 
                      placeholder={CONTACT_DATA.form.fields.name.placeholder}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="cursor-pointer focus:cursor-text"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="email" className="block text-sm mb-2">{CONTACT_DATA.form.fields.email.label}</label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder={CONTACT_DATA.form.fields.email.placeholder}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="cursor-pointer focus:cursor-text"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="phone" className="block text-sm mb-2">{CONTACT_DATA.form.fields.phone.label}</label>
                    <Input 
                      id="phone"
                      type="tel" 
                      placeholder={CONTACT_DATA.form.fields.phone.placeholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="cursor-pointer focus:cursor-text"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label htmlFor="message" className="block text-sm mb-2">{CONTACT_DATA.form.fields.message.label}</label>
                    <Textarea 
                      id="message"
                      placeholder={CONTACT_DATA.form.fields.message.placeholder}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="cursor-pointer focus:cursor-text"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button type="submit" className="w-full cursor-pointer" size="lg">
                      {CONTACT_DATA.form.submitButton}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
