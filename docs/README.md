# 📚 Documentação Técnica

Esta pasta contém a documentação técnica detalhada do projeto Dom Luis Barbearia.

## 📋 Índice de Documentação

### 📄 Arquivos Principais
- **README.md** (raiz) - Documentação principal do projeto
- **copilot-instructions.md** (.github) - Instruções para IA/Copilot

### 🔧 Configurações Técnicas

#### Cal.com (Sistema de Agendamento)
O projeto utiliza Cal.com para agendamento online:
- Integração via links personalizados
- Barbeiros com perfis individuais
- Redirecionamento direto do site

#### GitHub Pages (Deploy)
Configuração para hospedagem estática:
- Build automático via GitHub Actions
- Deploy na branch `gh-pages`
- URL: https://arthurargerzilio.github.io/projeto-Cbb/

#### Next.js (Framework)
- App Router com TypeScript
- Build estático (`output: 'export'`)
- Configuração para GitHub Pages

### 📝 Convenções do Projeto

#### Git Commits
Seguir padrão conventional commits:
```
feat: nova funcionalidade
fix: correção de bug
docs: atualização de documentação
style: mudanças de estilo
refactor: refatoração de código
test: adição de testes
```

#### Estrutura de Branches
- `main` - branch principal (produção)
- `develop` - branch de desenvolvimento
- `feature/nome` - branches de feature
- `hotfix/nome` - correções urgentes

### 🚀 Deploy e CI/CD

#### GitHub Pages
1. Push para `main` dispara GitHub Actions
2. Build do Next.js (`npm run build`)
3. Export estático (`npm run export`)
4. Deploy automático para GitHub Pages

#### Variáveis de Ambiente
```env
# Next.js
NEXT_PUBLIC_BASE_PATH=/projeto-Cbb

# Cal.com URLs
NEXT_PUBLIC_CAL_ARTHUR_URL=https://cal.com/arthur-barbearia
NEXT_PUBLIC_CAL_LUIS_URL=https://cal.com/luis-barbearia
```

---

## 📞 Suporte Técnico

Para questões técnicas, consulte:
1. **Documentação Principal**: README.md na raiz
2. **Issues do GitHub**: Para reportar bugs
3. **Discussões**: Para dúvidas e sugestões

---

<div align="center">
  <strong>Documentação mantida pela equipe de desenvolvimento</strong>
</div>
