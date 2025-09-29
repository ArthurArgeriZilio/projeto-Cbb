# 📅 Como Conectar seu Cal.com no Site

## Passo 1: Criar conta no Cal.com

1. Acesse https://cal.com
2. Crie sua conta gratuita
3. Escolha um username (ex: `dom-luis-barbearia`)

## Passo 2: Configurar seus serviços no Cal.com

No painel do Cal.com, crie os seguintes tipos de evento:

### Serviços Recomendados:
- **Corte Masculino** (45 min) - R$ 35
- **Barba Completa** (30 min) - R$ 30
- **Corte + Barba** (60 min) - R$ 55
- **Sobrancelha** (20 min) - R$ 20

## Passo 3: Configurar o site

Edite o arquivo `src/lib/cal-config.ts` e altere:

```typescript
export const calConfig = {
  // ✅ ALTERE AQUI: Substitua pelo seu username do Cal.com
  username: "SEU-USERNAME-AQUI", // Ex: "dom-luis-barbearia"
  
  // ✅ ALTERE AQUI: Links específicos dos seus serviços
  services: {
    corte: "SEU-USERNAME/corte-masculino",
    barba: "SEU-USERNAME/barba-completa", 
    corteBarba: "SEU-USERNAME/corte-barba",
    sobrancelha: "SEU-USERNAME/sobrancelha",
  }
};
```

## Passo 4: Testar localmente

```bash
npm run dev
```

Acesse `http://localhost:3000/agendamento` e veja se o Cal.com aparece.

## Passo 5: Fazer deploy

```bash
git add .
git commit -m "Configurar Cal.com com username correto"
git push origin master
```

## 🔗 Links úteis:

- **Seu site**: https://arthurargerzilio.github.io/projeto-Cbb/
- **Cal.com Dashboard**: https://app.cal.com
- **Documentação Cal.com**: https://docs.cal.com

## ⚙️ Configurações Avançadas (Opcional):

### Personalizar cores:
No Cal.com Dashboard > Settings > Appearance, configure:
- **Primary Color**: `#3b82f6` (azul do site)
- **Theme**: Dark mode

### Configurar disponibilidade:
- Defina seus horários de trabalho
- Configure dias da semana
- Defina intervalos entre agendamentos

## 🆘 Problemas comuns:

**Cal.com não aparece?**
- Verifique se o username está correto
- Teste primeiro no site oficial: `https://cal.com/SEU-USERNAME`

**Erro de CORS?**
- Normal em desenvolvimento local
- Funciona perfeitamente em produção

---

## 📞 Exemplo de configuração completa:

Se seu username for `domluisbarbearia`:

```typescript
export const calConfig = {
  username: "domluisbarbearia",
  services: {
    corte: "domluisbarbearia/corte-masculino",
    barba: "domluisbarbearia/barba-completa",
    corteBarba: "domluisbarbearia/corte-barba", 
    sobrancelha: "domluisbarbearia/sobrancelha",
  }
};
```
