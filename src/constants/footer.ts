import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// Dados do Footer
export const FOOTER_DATA = {
  company: {
    name: "Fidelis Stack",
    shortName: "FS",
    description: "Criando sites modernos e profissionais para empresas que querem crescer na internet."
  },
  
  services: {
    title: "Serviços",
    items: [
      { name: "Desenvolvimento Web", href: "#servicos" },
      { name: "Design Responsivo", href: "#servicos" },
      { name: "SEO", href: "#servicos" },
      { name: "Manutenção", href: "#servicos" }
    ]
  },
  
  company_links: {
    title: "Empresa",
    items: [
      { label: "Como Funciona", href: "#processo" },
      { label: "Benefícios", href: "#beneficios" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#contato" }
    ]
  },
  
  social: {
    title: "Redes Sociais",
    links: [
      { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
      { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
      { icon: Linkedin, href: "#", color: "hover:bg-blue-500" },
      { icon: Twitter, href: "#", color: "hover:bg-sky-500" }
    ]
  },
  
  copyright: "Fidelis Stack. Todos os direitos reservados. Feito com"
};