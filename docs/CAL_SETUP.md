# 📅 Integração Cal.com - Dom Luis Barbearia

## 🚀 Como Configurar

### 1. Criar Conta no Cal.com
1. Acesse [cal.com](https://cal.com) e crie sua conta
2. Escolha um username (ex: `dom-luis-barbearia`)
3. Configure seu perfil e disponibilidade

### 2. Configurar no Site
Edite o arquivo `src/lib/cal-config.ts`:

```typescript
export const calConfig = {
  // Substitua pelo seu username do Cal.com
  username: "SEU-USERNAME-AQUI", // ⚠️ ALTERE ESTE VALOR
  
  // Configurações do embed...
}
```

### 3. Criar Event Types (Serviços)
No painel do Cal.com, crie os seguintes event types:

1. **Corte Masculino** (`/corte-masculino`)
   - Duração: 45 minutos
   - Preço: R$ 35

2. **Barba Completa** (`/barba`)
   - Duração: 30 minutos
   - Preço: R$ 30

3. **Corte + Barba** (`/corte-barba`)
   - Duração: 60 minutos
   - Preço: R$ 55

4. **Sobrancelha** (`/sobrancelha`)
   - Duração: 20 minutos
   - Preço: R$ 20

### 4. Atualizar Links dos Serviços
No arquivo `src/lib/cal-config.ts`, atualize os links:

```typescript
services: {
  corte: "SEU-USERNAME/corte-masculino",
  barba: "SEU-USERNAME/barba", 
  corteBarba: "SEU-USERNAME/corte-barba",
  sobrancelha: "SEU-USERNAME/sobrancelha",
}
```

## 🎨 Personalização

### Tema e Cores
O embed usa tema escuro para combinar com o site. Para personalizar:

```typescript
embedConfig: {
  theme: "dark", // ou "light"
  styles: {
    branding: {
      brandColor: "#3b82f6", // Cor principal
    }
  }
}
```

### Configurações Avançadas
- **Layout**: `month_view` ou `week_view`
- **Idioma**: `pt-BR` para português
- **Localização**: Configure timezone para São Paulo

## 🔧 Funcionalidades

### Agendamento Rápido
- Links diretos por serviço na homepage
- URLs como `/agendamento?service=corte`
- Detecção automática do serviço

### Responsivo
- Embed adaptável para mobile e desktop
- Altura mínima de 600px
- Scroll interno quando necessário

## 📱 Como Usar

### Para Clientes
1. Acessam a homepage
2. Clicam em "Agendar" no serviço desejado
3. São direcionados para o Cal.com específico
4. Escolhem data/hora e confirmam

### Para Barbeiro
1. Recebe notificações por email
2. Confirma agendamentos no painel Cal.com
3. Pode integrar com Google Calendar
4. Gerencia disponibilidade facilmente

## 🎯 Próximos Passos

1. **Configurar o username** no arquivo de config
2. **Criar os event types** no Cal.com
3. **Testar os agendamentos**
4. **Configurar notificações por email**
5. **Integrar com Google Calendar** (opcional)

## 🔗 Links Úteis

- [Cal.com Documentation](https://cal.com/docs)
- [Embed Options](https://cal.com/docs/integrations/embed)
- [API Reference](https://cal.com/docs/api-reference)

---

**🚨 Importante**: Lembre-se de atualizar o `username` no arquivo `cal-config.ts` com seu username real do Cal.com!
