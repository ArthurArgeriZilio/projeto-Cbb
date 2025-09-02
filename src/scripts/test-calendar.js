/**
 * Script para testar a integração com o Google Calendar
 * 
 * Instruções:
 * 1. Configure o arquivo .env.local com suas credenciais
 * 2. Execute: node src/scripts/test-calendar.js
 */

const { google } = require('googleapis');
require('dotenv').config({ path: '.env.local' });

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3001'
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

async function testConnection() {
  console.log('🧪 Testando conexão com Google Calendar...\n');
  
  try {
    // Teste 1: Verificar credenciais
    console.log('1️⃣ Verificando credenciais...');
    const calendarList = await calendar.calendarList.list();
    console.log('✅ Credenciais válidas!');
    
    // Teste 2: Listar calendários
    console.log('\n2️⃣ Calendários disponíveis:');
    calendarList.data.items.forEach((cal, index) => {
      console.log(`   ${index + 1}. ${cal.summary} (${cal.id})`);
    });
    
    // Teste 3: Verificar calendário específico
    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    if (calendarId) {
      console.log(`\n3️⃣ Testando calendário específico: ${calendarId}`);
      
      const now = new Date();
      const timeMin = now.toISOString();
      const timeMax = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();
      
      const events = await calendar.events.list({
        calendarId: calendarId,
        timeMin: timeMin,
        timeMax: timeMax,
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      });
      
      console.log(`✅ Encontrados ${events.data.items.length} eventos nos próximos 7 dias`);
      
      if (events.data.items.length > 0) {
        console.log('\n📅 Próximos eventos:');
        events.data.items.forEach((event, index) => {
          const start = event.start.dateTime || event.start.date;
          console.log(`   ${index + 1}. ${event.summary} - ${start}`);
        });
      }
    } else {
      console.log('\n⚠️  GOOGLE_CALENDAR_ID não configurado no .env.local');
    }
    
    // Teste 4: Criar evento de teste (opcional)
    console.log('\n4️⃣ Criando evento de teste...');
    const testEvent = {
      summary: 'Teste - Dom Luis Barbearia',
      description: 'Evento de teste criado pelo sistema',
      start: {
        dateTime: new Date(Date.now() + 60 * 60 * 1000).toISOString(), // 1 hora a partir de agora
        timeZone: 'America/Sao_Paulo',
      },
      end: {
        dateTime: new Date(Date.now() + 90 * 60 * 1000).toISOString(), // 1.5 horas a partir de agora
        timeZone: 'America/Sao_Paulo',
      },
    };
    
    const createdEvent = await calendar.events.insert({
      calendarId: calendarId || 'primary',
      resource: testEvent,
    });
    
    console.log(`✅ Evento de teste criado: ${createdEvent.data.id}`);
    console.log(`📝 Link: ${createdEvent.data.htmlLink}`);
    
    // Deletar o evento de teste
    await calendar.events.delete({
      calendarId: calendarId || 'primary',
      eventId: createdEvent.data.id,
    });
    
    console.log('🗑️ Evento de teste removido');
    
    console.log('\n🎉 Todos os testes passaram! A integração está funcionando corretamente.');
    
  } catch (error) {
    console.error('❌ Erro durante o teste:', error.message);
    
    if (error.code === 401) {
      console.log('\n💡 Dicas para resolver erro 401:');
      console.log('   - Verifique se o GOOGLE_REFRESH_TOKEN está correto');
      console.log('   - Execute novamente o script get-refresh-token.js');
    } else if (error.code === 403) {
      console.log('\n💡 Dicas para resolver erro 403:');
      console.log('   - Verifique se a Google Calendar API está habilitada');
      console.log('   - Verifique as permissões do calendário');
    } else if (error.code === 404) {
      console.log('\n💡 Dicas para resolver erro 404:');
      console.log('   - Verifique se o GOOGLE_CALENDAR_ID está correto');
      console.log('   - Use "primary" para o calendário principal');
    }
  }
}

function checkEnvironment() {
  const requiredVars = [
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'GOOGLE_REFRESH_TOKEN'
  ];
  
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.log('❌ Variáveis de ambiente faltando:');
    missing.forEach(varName => {
      console.log(`   - ${varName}`);
    });
    console.log('\n📄 Configure essas variáveis no arquivo .env.local');
    return false;
  }
  
  return true;
}

async function main() {
  console.log('🧪 Teste de Integração Google Calendar - Dom Luis Barbearia\n');
  
  if (!checkEnvironment()) {
    return;
  }
  
  await testConnection();
}

if (require.main === module) {
  main();
}

module.exports = { testConnection };
