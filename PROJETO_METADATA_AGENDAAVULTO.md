# Agenda Avulto - Documento de Metadados Técnicos

## 📋 Resumo do Projeto
**Nome:** Agenda Avulto  
**Tipo:** Sistema de Agendamento Online  
**Tecnologias:** React + TypeScript + Vite + Tailwind CSS + shadcn/ui  
**Status:** Protótipo Front-end Concluído  
**Data de Criação:** Setembro 2025  

---

## 📁 Estrutura de Arquivos e Pastas

### **Arquivos de Configuração (Raiz)**
```
├── eslint.config.js
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── README.md
├── PROJETO_METADATA.md
```

### **Pasta Public**
```
public/
├── robots.txt
├── favicon.ico
└── placeholder.svg
```

### **Pasta Source (src/)**
```
src/
├── main.tsx                    # Ponto de entrada da aplicação
├── App.tsx                     # Componente raiz com roteamento
├── App.css                     # Estilos globais básicos
├── index.css                   # Design tokens e estilos globais
├── vite-env.d.ts              # Definições TypeScript para Vite
├── assets/
│   └── hero-scheduling.jpg     # Imagem principal do hero
├── components/
│   ├── Header.tsx              # Cabeçalho com navegação
│   ├── Hero.tsx                # Seção principal da landing page
│   ├── Features.tsx            # Grid de funcionalidades
│   ├── Benefits.tsx            # Benefícios e vantagens
│   ├── Footer.tsx              # Rodapé com links
│   └── ui/                     # Componentes shadcn/ui
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       ├── tooltip.tsx
│       └── use-toast.ts
├── hooks/
│   ├── use-mobile.tsx          # Hook para detecção mobile
│   └── use-toast.ts            # Hook para sistema de toast
├── lib/
│   └── utils.ts                # Utilitários e helpers
└── pages/
    ├── Index.tsx               # Página inicial (landing)
    ├── Dashboard.tsx           # Painel administrativo
    ├── Calendar.tsx            # Agenda interativa
    ├── Pricing.tsx             # Página de preços
    ├── Contact.tsx             # Página de contato
    └── NotFound.tsx            # Página 404
```

---

## 🚀 Roadmap de Desenvolvimento - Etapas Concluídas

### **FASE 1: Fundação e Estrutura Base**
**Status: ✅ Concluída**

- **Etapa 1.1:** Configuração inicial do projeto
  - ✅ Setup Vite + React + TypeScript
  - ✅ Configuração Tailwind CSS
  - ✅ Integração shadcn/ui
  - ✅ Estrutura de pastas

- **Etapa 1.2:** Sistema de roteamento
  - ✅ Configuração React Router DOM
  - ✅ Definição de rotas principais
  - ✅ Página 404 personalizada

- **Etapa 1.3:** Design System
  - ✅ Tokens de design no index.css
  - ✅ Configuração de cores semânticas
  - ✅ Sistema de gradientes
  - ✅ Componentes base shadcn/ui

### **FASE 2: Landing Page e Identidade Visual**
**Status: ✅ Concluída**

- **Etapa 2.1:** Componentes da Landing Page
  - ✅ Header com navegação responsiva
  - ✅ Hero section com CTA
  - ✅ Grid de funcionalidades
  - ✅ Seção de benefícios
  - ✅ Footer completo

- **Etapa 2.2:** Conteúdo e copywriting
  - ✅ Textos em português brasileiro
  - ✅ Propostas de valor definidas
  - ✅ CTAs otimizados

### **FASE 3: Páginas Institucionais**
**Status: ✅ Concluída**

- **Etapa 3.1:** Página de Preços
  - ✅ Dois planos de pagamento (Mensal/Anual)
  - ✅ Comparação de funcionalidades
  - ✅ CTAs de conversão

- **Etapa 3.2:** Página de Contato
  - ✅ Formulário de contato
  - ✅ Informações da empresa
  - ✅ Múltiplos canais de comunicação

### **FASE 4: Estrutura das Aplicações**
**Status: ✅ Concluída (Estrutura Base)**

- **Etapa 4.1:** Dashboard administrativo
  - ✅ Estrutura base criada
  - ✅ Layout responsivo
  - ⏳ Funcionalidades a implementar

- **Etapa 4.2:** Agenda interativa
  - ✅ Estrutura base criada
  - ✅ Layout responsivo
  - ⏳ Funcionalidades a implementar

---

## 🎨 Identidade Visual e Design System

### **Paleta de Cores**
```css
/* Cores Primárias */
--primary: 217 91% 60%        /* Azul principal */
--primary-foreground: 0 0% 98%  /* Texto sobre primário */

/* Cores Secundárias */
--secondary: 210 40% 96%      /* Cinza claro */
--secondary-foreground: 222.2 84% 4.9%  /* Texto sobre secundário */

/* Cores de Estado */
--destructive: 0 84% 60%      /* Vermelho para ações destrutivas */
--success: 142 71% 45%        /* Verde para sucesso */
--warning: 38 92% 50%         /* Amarelo para avisos */

/* Cores de Interface */
--background: 0 0% 100%       /* Fundo principal */
--foreground: 222.2 84% 4.9%  /* Texto principal */
--muted: 210 40% 96%          /* Elementos silenciados */
--accent: 210 40% 96%         /* Cor de destaque */
--border: 214.3 31.8% 91.4%   /* Bordas */
```

### **Tipografia**
- **Font Family:** Sistema padrão (system-ui)
- **Hierarquia:** 
  - H1: text-4xl font-bold
  - H2: text-3xl font-semibold
  - H3: text-2xl font-semibold
  - Body: text-base
  - Small: text-sm

### **Gradientes**
```css
--gradient-primary: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))
```

### **Componentes de Design**
- **Cards:** Sombras suaves, bordas arredondadas
- **Botões:** Variantes primary, secondary, ghost, outline
- **Inputs:** Design minimalista com foco em usabilidade
- **Layout:** Grid responsivo, container centralizado

### **Ícones**
- **Biblioteca:** Lucide React
- **Estilo:** Outline, stroke-width: 2
- **Uso:** Navegação, funcionalidades, estados

---

## 🔧 Tecnologias e Dependências

### **Core Technologies**
- **React 18.3.1** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilos
- **React Router DOM 6.30.1** - Roteamento

### **UI Framework**
- **shadcn/ui** - Sistema de componentes
- **Radix UI** - Primitivos de UI
- **Lucide React** - Biblioteca de ícones

### **Utilities**
- **clsx** - Conditional classes
- **tailwind-merge** - Merge Tailwind classes
- **date-fns** - Manipulação de datas

---

## 📊 Métricas do Projeto

### **Estatísticas de Código**
- **Total de Arquivos:** 65+
- **Componentes React:** 15+ componentes criados
- **Páginas:** 6 páginas funcionais
- **Componentes UI:** 40+ componentes shadcn/ui

### **SEO e Performance**
- **Estrutura Semântica:** HTML5 semântico implementado
- **Meta Tags:** Configuradas no index.html
- **Responsividade:** Mobile-first design
- **Acessibilidade:** Componentes Radix UI (WAI-ARIA compliant)

---

## 🎯 Próximas Etapas (Planejamento)

### **FASE 5: Funcionalidades do Dashboard**
- Autenticação de usuários
- CRUD de agendamentos
- Relatórios e analytics
- Configurações do perfil

### **FASE 6: Agenda Interativa**
- Calendário funcional
- Criação de eventos
- Visualizações (mês, semana, dia)
- Integração com formulários

### **FASE 7: Backend Integration**
- API REST ou GraphQL
- Banco de dados
- Sistema de notificações
- Pagamentos online

---

## 📝 Notas Técnicas

### **Padrões de Código**
- Componentes funcionais com hooks
- TypeScript strict mode
- ESLint configurado
- Imports absolutos com @ alias

### **Estrutura de Arquivos**
- Separação clara entre páginas e componentes
- UI components isolados na pasta ui/
- Hooks customizados em pasta dedicada
- Utilitários centralizados

### **Design Patterns**
- Compound components (shadcn/ui)
- Custom hooks para lógica reutilizável
- Context API para estado global (quando necessário)
- Props drilling minimizado

---

*Documento gerado automaticamente - Agenda Avulto v1.0*  
*Última atualização: Setembro 2025*