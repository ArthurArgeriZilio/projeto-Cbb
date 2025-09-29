# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para o projeto Dom Luis Barbearia! Este guia vai te ajudar a entender como participar do desenvolvimento.

## 📋 Índice

- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportando Bugs](#reportando-bugs)
- [Solicitando Features](#solicitando-features)

---

## 🚀 Como Contribuir

### 1. **Fork do Repositório**
```bash
# Clone seu fork
git clone https://github.com/SEU_USUARIO/projeto-Cbb.git
cd projeto-Cbb

# Adicione o repositório original como upstream
git remote add upstream https://github.com/ArthurArgeriZilio/projeto-Cbb.git
```

### 2. **Crie uma Branch**
```bash
# Para nova funcionalidade
git checkout -b feature/nome-da-funcionalidade

# Para correção de bug
git checkout -b fix/descrição-do-bug

# Para melhorias na documentação
git checkout -b docs/melhoria-documentacao
```

### 3. **Faça suas Mudanças**
- Mantenha o código limpo e bem documentado
- Siga os padrões de código do projeto
- Teste suas mudanças localmente

### 4. **Commit suas Mudanças**
```bash
git add .
git commit -m "tipo: descrição breve das mudanças"
```

### 5. **Push e Pull Request**
```bash
git push origin sua-branch
```
Depois abra um Pull Request no GitHub.

---

## ⚙️ Configuração do Ambiente

### **Pré-requisitos**
- Node.js 18.17+ 
- npm 9+
- Git
- VS Code (recomendado)

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/ArthurArgeriZilio/projeto-Cbb.git
cd projeto-Cbb

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### **Extensões VS Code Recomendadas**
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

---

## 📝 Padrões de Código

### **Convenções de Commit**
Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(escopo): descrição

feat: nova funcionalidade
fix: correção de bug
docs: atualização de documentação
style: mudanças de formatação
refactor: refatoração de código
test: adição de testes
chore: tarefas de manutenção
```

**Exemplos:**
```bash
feat(homepage): adicionar seção de depoimentos
fix(navbar): corrigir menu mobile no iOS
docs(readme): atualizar instruções de instalação
style(components): aplicar formatação prettier
```

### **Estilo de Código**
- **TypeScript**: Sempre use tipagem explícita
- **React**: Prefira componentes funcionais com hooks
- **Tailwind**: Use classes utilitárias, evite CSS customizado
- **Nomes**: Use camelCase para variáveis, PascalCase para componentes

**Exemplo de Componente:**
```tsx
interface BarberCardProps {
  name: string;
  specialty: string;
  image: string;
  calUrl: string;
}

export function BarberCard({ name, specialty, image, calUrl }: BarberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600">{specialty}</p>
    </div>
  );
}
```

### **Estrutura de Arquivos**
```
src/
├── app/                # Páginas (App Router)
│   ├── (routes)/       # Grupos de rotas
│   └── globals.css     # Estilos globais
├── components/         # Componentes reutilizáveis
│   ├── ui/            # Componentes base (Shadcn)
│   ├── layout/        # Componentes de layout
│   └── feature/       # Componentes específicos
└── lib/               # Utilitários e configurações
```

---

## 🔄 Processo de Pull Request

### **Antes de Submeter**
1. ✅ Código funciona localmente
2. ✅ Testes passam (quando aplicável)
3. ✅ Código segue padrões do projeto
4. ✅ Documentação atualizada
5. ✅ Branch atualizada com main

### **Template de PR**
```markdown
## 📝 Descrição
Breve descrição das mudanças realizadas.

## 🎯 Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Documentação
- [ ] Refatoração
- [ ] Melhoria de performance

## 🧪 Como Testar
1. Faça checkout da branch
2. Execute `npm install`
3. Execute `npm run dev`
4. Acesse http://localhost:3000
5. Teste as funcionalidades alteradas

## 📋 Checklist
- [ ] Código testado localmente
- [ ] Documentação atualizada
- [ ] Segue padrões do projeto
- [ ] Sem conflitos com main
```

---

## 🐛 Reportando Bugs

### **Template de Bug Report**
```markdown
**Descrição do Bug**
Uma descrição clara e concisa do bug.

**Para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Role para baixo até '...'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [ex: Windows 11]
- Browser: [ex: Chrome 120]
- Versão: [ex: 1.2.0]
```

---

## ✨ Solicitando Features

### **Template de Feature Request**
```markdown
**Sua feature está relacionada a um problema?**
Descrição clara do problema. Ex: Sempre fico frustrado quando [...]

**Descreva a solução que você gostaria**
Descrição clara e concisa do que você quer que aconteça.

**Descreva alternativas que você considerou**
Outras soluções ou features que você considerou.

**Contexto adicional**
Qualquer outro contexto ou screenshots sobre a feature.
```

---

## 🏆 Reconhecimento

Todos os contribuidores são reconhecidos no projeto. Suas contribuições aparecerão:
- No histórico de commits
- Na seção de contribuidores do GitHub
- Em releases futuras (para mudanças significativas)

---

## 📞 Suporte

Precisa de ajuda? Entre em contato:

- **Issues**: Para bugs e features
- **Discussions**: Para dúvidas gerais
- **Email**: arthurargeri@email.com

---

<div align="center">
  <strong>Obrigado por contribuir com a Dom Luis Barbearia! 💈</strong>
</div>
