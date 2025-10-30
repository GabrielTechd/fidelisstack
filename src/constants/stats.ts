import { TrendingUp, Users, Globe, Award } from "lucide-react";

// Dados das Estatísticas
export const STATS_DATA = {
  title: "Números que Impressionam",
  subtitle: "Nossa experiência se traduz em resultados reais para nossos clientes",
  
  stats: [
    {
      icon: Users,
      value: 150,
      suffix: "+",
      label: "Clientes Satisfeitos",
      description: "Empresas que confiam no nosso trabalho"
    },
    {
      icon: Globe,
      value: 200,
      suffix: "+",
      label: "Sites Criados",
      description: "Projetos entregues com sucesso"
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      label: "Taxa de Satisfação",
      description: "Clientes que recomendam nossos serviços"
    },
    {
      icon: Award,
      value: 5,
      label: "Anos de Experiência",
      description: "No mercado digital"
    }
  ]
};