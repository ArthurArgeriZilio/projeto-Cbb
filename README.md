# 💈 Dom Luis Barbearia - Website Profissional

> Sistema completo de barbearia moderna com agendamento online integrado ao Cal.com

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)](https://arthurargerzilio.github.io/projeto-Cbb/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

**🌐 Site ao vivo:** https://arthurargerzilio.github.io/projeto-Cbb/

---

## 📋 Sobre o Projeto

Website profissional da **Dom Luis Barbearia** localizada em Ribeirão Preto/SP. O projeto combina design moderno, experiência do usuário otimizada e funcionalidades práticas para facilitar o agendamento e contato com os clientes.

### 🎯 Objetivo
Criar uma presença digital forte para a barbearia, facilitando o agendamento de serviços e aumentando o engajamento com os clientes através de uma interface moderna e intuitiva.

---

## ✨ Funcionalidades

### 🏠 **Homepage**
- Design responsivo com tema escuro moderno
- Apresentação dos barbeiros (Arthur Argeri e Lucas Silva)
- Catálogo de serviços com preços transparentes
- Botões diretos para redes sociais (Instagram, Facebook, WhatsApp)
- Informações de contato e localização

### 📅 **Sistema de Agendamento**
- Integração com Cal.com para cada barbeiro
- Agendamento direto através de links personalizados
- Interface intuitiva para seleção de profissional

### 📱 **Redes Sociais**
- Links diretos para Instagram e Facebook
- WhatsApp com mensagem pré-configurada
- Botões destacados e responsivos

### 📞 **Páginas Institucionais**
- **Sobre Nós**: História e valores da barbearia
- **Contato**: Formulário, localização e informações
- **Loja**: Catálogo de produtos para venda

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Tailwind CSS** - Framework utilitário para styling
- **Shadcn/ui** - Biblioteca de componentes modernos
- **Framer Motion** - Animações fluidas e interativas

### **Integrações**
- **Cal.com** - Sistema de agendamento profissional
- **Lucide React** - Ícones SVG otimizados

### **Deploy & Hosting**
- **GitHub Pages** - Hospedagem estática gratuita
- **GitHub Actions** - CI/CD automatizado

## 📁 Estrutura do Projeto

```
projeto-Cbb/
├── 📂 .github/                 # Configurações do GitHub
│   └── copilot-instructions.md # Instruções para IA
├── 📂 public/                  # Arquivos estáticos
│   ├── favicon.ico            # Ícone do site
│   └── *.svg                  # Ícones e imagens
├── 📂 src/                     # Código fonte principal
│   ├── 📂 app/                # App Router (Next.js 14)
│   │   ├── 📂 agendamento/    # Página de agendamento
│   │   ├── 📂 contato/        # Página de contato
│   │   ├── 📂 loja/           # Página da loja
│   │   ├── 📂 sobre/          # Página sobre nós
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout raiz
│   │   └── page.tsx           # Homepage
│   ├── 📂 components/         # Componentes reutilizáveis
│   │   ├── 📂 layout/         # Componentes de layout
│   │   │   ├── navbar.tsx     # Barra de navegação
│   │   │   └── footer.tsx     # Rodapé
│   │   ├── 📂 booking/        # Componentes de agendamento
│   │   └── 📂 ui/             # Componentes base (Shadcn/ui)
│   └── 📂 lib/                # Utilitários e configurações
│       └── cal-config.ts      # Configuração do Cal.com
├── 📂 out/                     # Build estático (GitHub Pages)
├── 📄 next.config.js          # Configuração do Next.js
├── 📄 tailwind.config.ts      # Configuração do Tailwind
├── 📄 package.json            # Dependências do projeto
└── 📄 README.md               # Documentação (este arquivo)
```

---

## 🚀 Como Executar o Projeto

### **Pré-requisitos**
- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes
- Git para controle de versão

### **Instalação**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ArthurArgeriZilio/projeto-Cbb.git
   cd projeto-Cbb
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute em desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse o projeto:**
   - Abra [http://localhost:3000](http://localhost:3000) no navegador

### **Scripts Disponíveis**

```bash
npm run dev        # Executa em modo desenvolvimento
npm run build      # Cria build de produção
npm run start      # Executa build de produção
npm run lint       # Executa linter (ESLint)
npm run export     # Gera build estático para GitHub Pages
```

---

## 📋 Funcionalidades Detalhadas

### 🏠 **Homepage**
- **Header**: Logo, navegação responsiva e botão CTA
- **Hero Section**: Título principal com apresentação da barbearia
- **Serviços**: Grid com 4 serviços principais e preços
- **Barbeiros**: Cards dos profissionais com agendamento direto
- **Redes Sociais**: Botões destacados para Instagram, Facebook e WhatsApp
- **Informações**: Localização, horários e contato

### 📅 **Sistema de Agendamento**
- **Integração Cal.com**: Links personalizados para cada barbeiro
- **Seleção de Barbeiro**: Interface para escolher o profissional
- **Agendamento Direto**: Redirecionamento para Cal.com do barbeiro selecionado

### 📱 **Redes Sociais**
- **Instagram**: Botão rosa/roxo com link direto
- **Facebook**: Botão azul com link do perfil
- **WhatsApp**: Botão verde com mensagem pré-configurada

### 📞 **Páginas Institucionais**
- **Sobre Nós**: História, valores e estatísticas da barbearia
- **Contato**: Formulário, mapa, informações e redes sociais
- **Loja**: Catálogo de produtos com preços e categorias

---

## 🎨 Design System

### **Paleta de Cores**
- **Primária**: Slate/Zinc (tons escuros masculinos)
- **Destaque**: Laranja (#f97316) para CTAs e elementos importantes
- **Neutros**: Brancos e cinzas para textos e backgrounds

### **Tipografia**
- **Títulos**: Playfair Display (elegante e clássica)
- **Corpo**: Inter (moderna e legível)

### **Componentes**
- Cards com hover effects
- Botões com gradientes e animações
- Inputs com design moderno
- Navegação responsiva

---

## 🔧 Configurações Técnicas

### **Next.js Configuration**
```javascript
// next.config.js
module.exports = {
  output: 'export',           // Build estático
  trailingSlash: true,       // URLs com barra final
  images: { unoptimized: true }, // Imagens não otimizadas
  assetPrefix: '/projeto-Cbb/', // Prefixo para GitHub Pages
  basePath: '/projeto-Cbb'      // Base path do projeto
}
```

### **Tailwind Configuration**
- Design system customizado
- Cores personalizadas da barbearia
- Breakpoints responsivos
- Animações e transições

---

## 🚀 Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages:

1. **Push para main**: Dispara GitHub Actions
2. **Build automático**: Next.js gera arquivos estáticos
3. **Deploy**: Arquivos são publicados no GitHub Pages

**URL de produção**: https://arthurargerzilio.github.io/projeto-Cbb/

---

## 📊 Performance e SEO

### **Otimizações**
- Build estático para carregamento rápido
- Imagens otimizadas e lazy loading
- Código minificado e comprimido
- CSS-in-JS otimizado com Tailwind

### **SEO**
- Meta tags completas
- Estrutura semântica HTML5
- URLs amigáveis
- Schema markup implementado

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Contato

**Dom Luis Barbearia**
- 📍 R. Genoveva Onófre Barban, 892 - Planalto Verde, Ribeirão Preto/SP
- 📱 (16) 99396-3867
- 📧 contato@domluisbarbearia.com

**Desenvolvedor**
- 👨‍💻 Arthur Argeri Zilio
- 🐙 [GitHub](https://github.com/ArthurArgeriZilio)

---

## 📄 Licença

Este projeto é propriedade da Dom Luis Barbearia. Todos os direitos reservados.

---

<div align="center">
  <strong>Feito com ❤️ para a Dom Luis Barbearia</strong>
</div>
-  Responsividade completa

##  Próximos Passos

### Páginas a Implementar
- [ ] Página Sobre Nós
- [ ] Página de Serviços Completa
- [ ] Sistema de Agendamento
- [ ] Loja E-commerce
- [ ] Blog/Dicas
- [ ] Página de Contato
- [ ] Área do Cliente
- [ ] Painel Administrativo

### Funcionalidades Avançadas
- [ ] Integração com calendário (React Big Calendar)
- [ ] Sistema de pagamentos (Stripe)
- [ ] Autenticação de usuários
- [ ] Gerenciamento de estoque
- [ ] Notificações (e-mail/WhatsApp)
- [ ] Dark mode
- [ ] PWA (Progressive Web App)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
