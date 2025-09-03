/**
 * Script para obter o Refresh Token do Google Calendar API
 * 
 * Instruções:
 * 1. Configure suas credenciais abaixo
 * 2. Execute: node src/scripts/get-refresh-token.js
 * 3. Siga as instruções no console
 */

const { google } = require('googleapis');
const readline = require('readline');

// Configure suas credenciais aqui
const CLIENT_ID = 'seu_client_id_aqui';
const CLIENT_SECRET = 'seu_client_secret_aqui';
const REDIRECT_URI = 'http://localhost:3001';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

function getAuthUrl() {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent'
  });
  
  console.log('\n🔗 Acesse esta URL no seu navegador:');
  console.log(authUrl);
  console.log('\n📋 Após autorizar, copie o código da URL e cole aqui:\n');
}

function getRefreshToken(code) {
  return new Promise((resolve, reject) => {
    oauth2Client.getToken(code, (err, token) => {
      if (err) {
        console.error('❌ Erro ao obter o token:', err);
        reject(err);
        return;
      }
      
      console.log('\n✅ Token obtido com sucesso!');
      console.log('\n📄 Adicione estas informações ao seu arquivo .env.local:');
      console.log('GOOGLE_REFRESH_TOKEN=' + token.refresh_token);
      console.log('\n🎉 Configuração completa!');
      
      resolve(token);
    });
  });
}

async function main() {
  console.log('🚀 Assistente de Configuração do Google Calendar API\n');
  
  if (CLIENT_ID === 'seu_client_id_aqui' || CLIENT_SECRET === 'seu_client_secret_aqui') {
    console.log('❌ Por favor, configure suas credenciais no arquivo:');
    console.log('   src/scripts/get-refresh-token.js\n');
    console.log('📋 Você precisa definir:');
    console.log('   - CLIENT_ID');
    console.log('   - CLIENT_SECRET');
    console.log('\n💡 Obtenha essas credenciais no Google Cloud Console');
    return;
  }
  
  getAuthUrl();
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Cole o código aqui: ', async (code) => {
    try {
      await getRefreshToken(code);
    } catch (error) {
      console.error('❌ Falha ao obter o token:', error.message);
    } finally {
      rl.close();
    }
  });
}

if (require.main === module) {
  main();
}

module.exports = { getRefreshToken };
