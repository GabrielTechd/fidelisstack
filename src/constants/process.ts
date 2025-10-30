import { MessageSquare, Pencil, Code, Rocket } from "lucide-react";

// Dados do Processo de Trabalho
export const PROCESS_DATA = {
  title: "Como funciona",
  subtitle: "Um processo simples e transparente. Você só precisa mandar o que quer mostrar, e a gente entrega tudo pronto",
  
  steps: [
    {
      icon: MessageSquare,
      number: "01",
      title: "Conversa Inicial",
      description: "Você nos conta sobre sua empresa e o que deseja mostrar no site. Entendemos suas necessidades e objetivos."
    },
    {
      icon: Pencil,
      number: "02",
      title: "Design Personalizado",
      description: "Criamos um design exclusivo que representa a identidade da sua marca e conversa com seu público."
    },
    {
      icon: Code,
      number: "03",
      title: "Desenvolvimento",
      description: "Transformamos o design em um site funcional, rápido e otimizado para todos os dispositivos."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Publicação e Suporte",
      description: "Colocamos seu site no ar e garantimos que tudo funcione perfeitamente. Continuamos cuidando dele depois."
    }
  ]
};