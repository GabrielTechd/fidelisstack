import { Mail, Phone, MapPin } from "lucide-react";

// Dados da seção de contato (CTA)
export const CONTACT_DATA = {
  title: "Pronto para ter um site profissional?",
  subtitle: "Entre em contato e receba uma proposta personalizada para seu negócio. Transforme sua presença digital hoje mesmo.",
  
  contactItems: [
    { 
      icon: Mail, 
      label: "Email", 
      value: "contato@fidelisstack.com" 
    },
    { 
      icon: Phone, 
      label: "Telefone", 
      value: "(61)98133-6977" 
    },
    { 
      icon: MapPin, 
      label: "Localização", 
      value: "Brasília, DF, Brasil" 
    }
  ],
  
  form: {
    fields: {
      name: {
        label: "Nome Completo",
        placeholder: "Seu nome"
      },
      email: {
        label: "Email", 
        placeholder: "seu@email.com"
      },
      phone: {
        label: "Telefone",
        placeholder: "(99) 99999-9999"
      },
      message: {
        label: "Mensagem",
        placeholder: "Conte-nos sobre seu projeto..."
      }
    },
    
    submitButton: "Enviar Mensagem",
    successMessage: "Mensagem enviada com sucesso! Entraremos em contato em breve."
  }
};