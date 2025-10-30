# 📝 Sistema de Constantes - Fidelis Stack Website

Este documento explica como o sistema de constantes foi organizado para facilitar a edição de textos, links e dados do site.

## 🗂️ Estrutura dos Arquivos de Constantes

Todos os arquivos estão localizados em `src/constants/`:

### 📁 Arquivos Principais

| Arquivo | Descrição | Dados Incluídos |
|---------|-----------|-----------------|
| `company.ts` | Informações da empresa | Nome, contato, redes sociais, imagens |
| `navigation.ts` | Navegação e botões | Menu, links, textos de botões |
| `hero.ts` | Seção principal | Títulos, textos animados, botões |
| `services.ts` | Serviços oferecidos | Lista de serviços com ícones e descrições |
| `stats.ts` | Estatísticas | Números, métricas e descrições |
| `process.ts` | Processo de trabalho | Etapas do processo com ícones |
| `technologies.ts` | Tecnologias utilizadas | Stack técnico e descrições |
| `benefits.ts` | Benefícios | Lista de vantagens e imagem |
| `portfolio.ts` | Projetos realizados | Portfólio com imagens e tags |
| `testimonials.ts` | Depoimentos | Avaliações de clientes |
| `faq.ts` | Perguntas frequentes | Q&A completo |
| `contact.ts` | Formulário de contato | Campos e dados de contato |
| `ctaBanner.ts` | Banner de call-to-action | Títulos e botões |
| `footer.ts` | Rodapé | Links, redes sociais, copyright |

### 📄 Arquivo Principal
- `index.ts` - Exporta todas as constantes de forma organizada

## 🔧 Como Usar

### Importar Constantes
```typescript
// Importar constantes específicas
import { COMPANY_INFO, HERO_DATA } from '../constants';

// Importar múltiplas constantes
import { 
  SERVICES_DATA, 
  PORTFOLIO_DATA, 
  NAVIGATION 
} from '../constants';
```

### Usar nos Componentes
```typescript
// Exemplo no componente Header
<span>{COMPANY_INFO.name}</span>
<span>{COMPANY_INFO.shortName}</span>

// Exemplo no Hero
<h1>{HERO_DATA.title.part1}</h1>
<p>{HERO_DATA.description}</p>

// Exemplo em listas
{SERVICES_DATA.services.map((service, index) => (
  <div key={index}>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
))}
```

## ✏️ Como Editar Dados

### 1. Informações da Empresa
Edite `src/constants/company.ts`:
```typescript
export const COMPANY_INFO = {
  name: "Fidelis Stack", // ← Mude aqui o nome
  shortName: "FS", // ← Sigla da empresa
  contact: {
    email: "contato@fidelisstack.com", // ← Seu email
    phone: "(11) 9999-9999", // ← Seu telefone
    location: "São Paulo, Brasil" // ← Sua localização
  }
};
```

### 2. Textos do Site
Cada seção tem seu arquivo específico. Por exemplo, para mudar o Hero:
```typescript
// src/constants/hero.ts
export const HERO_DATA = {
  title: {
    part1: "Sites Modernos que", // ← Mude o título
    typingTexts: ["Vendem", "Convertem"] // ← Palavras animadas
  },
  description: "Sua nova descrição aqui..." // ← Descrição principal
};
```

### 3. Adicionar/Remover Serviços
```typescript
// src/constants/services.ts
export const SERVICES_DATA = {
  services: [
    {
      icon: Palette, // Ícone do Lucide React
      title: "Novo Serviço", // ← Nome do serviço
      description: "Descrição do serviço..." // ← Descrição
    }
    // Adicione mais serviços aqui
  ]
};
```

## 🎯 Vantagens do Sistema

### ✅ Centralizado
- Todos os textos em um local
- Fácil manutenção
- Sem procurar por arquivos

### ✅ Reutilizável
- Mesmos dados em vários lugares
- Consistência automática
- Mudança uma vez, aplica em todo lugar

### ✅ Tipado
- IntelliSense no VS Code
- Prevenção de erros
- Autocomplete de propriedades

### ✅ Organizados
- Por categoria/seção
- Nomenclatura clara
- Estrutura lógica

## 🔄 Status da Refatoração

### ✅ Componentes Refatorados
- [x] Header - Navegação e logo
- [x] Hero - Seção principal
- [x] Services - Lista de serviços

### 🚧 Próximos Passos
Para completar a refatoração, aplique o mesmo padrão aos outros componentes:

1. **Stats** - Importar `STATS_DATA` e substituir array local
2. **Process** - Usar `PROCESS_DATA.steps`
3. **Technologies** - Aplicar `TECHNOLOGIES_DATA`
4. **Benefits** - Usar `BENEFITS_DATA`
5. **Portfolio** - Implementar `PORTFOLIO_DATA.projects`
6. **Testimonials** - Usar `TESTIMONIALS_DATA.testimonials`
7. **FAQ** - Aplicar `FAQ_DATA.questions`
8. **CTA** - Usar `CONTACT_DATA`
9. **Footer** - Implementar `FOOTER_DATA`

## 📋 Exemplo de Refatoração

### Antes:
```typescript
const services = [
  { title: "Design", description: "..." }
];

return (
  <h2>Nossos Serviços</h2>
  {services.map(...)}
);
```

### Depois:
```typescript
import { SERVICES_DATA } from '../constants';

return (
  <h2>{SERVICES_DATA.title}</h2>
  {SERVICES_DATA.services.map(...)}
);
```

## 🚀 Resultado Final

Após a implementação completa:
- **100% dos textos editáveis** em arquivos de constantes
- **Manutenção simplificada** para clientes
- **Código mais limpo** e organizados
- **Mudanças rápidas** sem mexer em código

---

💡 **Dica**: Use o VS Code para navegação rápida com `Ctrl+Click` nos nomes das constantes!