import { Code2, Palette, Zap, Shield, Gauge, Smartphone } from "lucide-react";

// Dados das Tecnologias
export const TECHNOLOGIES_DATA = {
  title: "Tecnologias Modernas",
  subtitle: "Usamos as ferramentas mais avançadas do mercado para criar sites que são rápidos, seguros e escaláveis",
  
  technologies: [
    {
      icon: Code2,
      name: "React & Next.js",
      description: "Tecnologias modernas para sites rápidos e interativos",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      name: "Design Responsivo",
      description: "Sites que funcionam perfeitamente em qualquer dispositivo",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      name: "Performance Otimizada",
      description: "Carregamento ultra-rápido com as melhores práticas",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      name: "Segurança SSL",
      description: "Certificados de segurança e proteção de dados",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Gauge,
      name: "SEO Avançado",
      description: "Otimização para mecanismos de busca e ranking",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Smartphone,
      name: "Mobile First",
      description: "Desenvolvemos pensando primeiro na experiência mobile",
      color: "from-indigo-500 to-purple-500"
    }
  ]
};