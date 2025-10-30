import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { FOOTER_DATA, COMPANY_INFO } from "../constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white">FS</span>
              </motion.div>
              <span className="text-xl">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {FOOTER_DATA.company.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4">{FOOTER_DATA.services.title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {FOOTER_DATA.services.items.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={service.href} className="hover:text-white transition-colors cursor-pointer">
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4">{FOOTER_DATA.company_links.title}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {FOOTER_DATA.company_links.items.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.href} className="hover:text-white transition-colors cursor-pointer">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4">{FOOTER_DATA.social.title}</h4>
            <div className="flex gap-3">
              {FOOTER_DATA.social.links.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.color} transition-colors cursor-pointer`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="flex items-center justify-center gap-2">
            &copy; {currentYear} {FOOTER_DATA.copyright}{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ["#ef4444", "#f87171", "#ef4444"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 inline fill-red-500 text-red-500" />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
