# Dom Luis Barbearia - Sistema de Agendamento

Sistema completo de barbearia com integração ao Google Calendar para agendamentos online.

Site disponível em: https://arthurargerzilio.github.io/projeto-Cbb/

## Funcionalidades

- **Site responsivo** com design masculino moderno
- **Sistema de agendamento** integrado ao Google Calendar
- **Formulário de contato** com validação
- **Galeria de serviços** com preços
- **Interface administrativa** para gerenciar agendamentos

##  Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de CSS
- **Shadcn/ui** - Biblioteca de componentes
- **Framer Motion** - Animações
- **Google Calendar API** - Integração de agendamentos
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

##  Configuração do Google Calendar

Para configurar a integração com o Google Calendar, siga estes passos:

### 1. Criar Projeto no Google Cloud Console

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Vá para "APIs & Services" > "Library"
4. Procure e habilite a "Google Calendar API"

### 2. Configurar OAuth 2.0

1. Vá para "APIs & Services" > "Credentials"
2. Clique em "Create Credentials" > "OAuth 2.0 Client IDs"
3. Configure o tipo de aplicação como "Web application"
4. Adicione as URLs autorizadas:
   - `http://localhost:3001` (desenvolvimento)
   - Sua URL de produção
5. Baixe o arquivo JSON das credenciais

### 3. Configurar Variáveis de Ambiente

Edite o arquivo `.env.local` e preencha com suas credenciais:

```env
# Google Calendar API Configuration
GOOGLE_CLIENT_ID=seu_client_id_aqui
GOOGLE_CLIENT_SECRET=seu_client_secret_aqui
GOOGLE_REFRESH_TOKEN=seu_refresh_token_aqui
GOOGLE_CALENDAR_ID=seu_calendar_id_aqui

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=uma_string_secreta_aleatoria

# Application Configuration
NODE_ENV=development
```

### 4. Obter Refresh Token

Para obter o refresh token, siga este fluxo:

1. Substitua os valores e acesse esta URL no navegador:
```
https://accounts.google.com/o/oauth2/auth?client_id=SEU_CLIENT_ID&redirect_uri=http://localhost:3001&scope=https://www.googleapis.com/auth/calendar&response_type=code&access_type=offline&prompt=consent
```

2. Autorize o aplicativo e copie o código da URL
3. Faça uma requisição POST para obter o refresh token:
```bash
curl -X POST https://oauth2.googleapis.com/token \
  -d "client_id=SEU_CLIENT_ID" \
  -d "client_secret=SEU_CLIENT_SECRET" \
  -d "code=CODIGO_OBTIDO" \
  -d "grant_type=authorization_code" \
  -d "redirect_uri=http://localhost:3001"
```

### 5. Obter Calendar ID

1. Acesse [Google Calendar](https://calendar.google.com)
2. Vá para "Settings" > "Settings for my calendars"
3. Selecione o calendário desejado
4. Copie o "Calendar ID" (geralmente é seu email)
-  **Performance**: Otimizado com Next.js 14 e Turbopack
-  **Animações**: Transições fluidas com Framer Motion
-  **SEO Otimizado**: Meta tags e estrutura otimizada para buscadores

##  Tecnologias Utilizadas

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes**: Shadcn/ui
- **Animações**: Framer Motion
- **Formulários**: React Hook Form + Zod
- **Ícones**: Lucide React
- **Build Tool**: Turbopack

##  Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Construir para produção:**
   ```bash
   npm run build
   ```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

##  Funcionalidades Implementadas

### Página Inicial
-  Hero Section com CTA atrativo
-  Seção de estatísticas
-  Cards de serviços principais
-  Depoimentos de clientes
-  Call-to-action final

### Layout
-  Navbar responsiva com menu mobile
-  Footer completo com links e informações
-  Tipografia elegante (Inter + Playfair Display)

### Design System
-  Paleta de cores slate/zinc (masculina)
-  Componentes reutilizáveis
-  Animações e transições
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
