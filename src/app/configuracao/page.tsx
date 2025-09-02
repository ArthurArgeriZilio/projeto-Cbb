import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Settings, 
  Key, 
  CheckCircle, 
  AlertTriangle, 
  Code, 
  Link as LinkIcon,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function ConfiguracaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Configuração do Google Calendar
            </h1>
            <p className="text-slate-300 text-lg">
              Siga os passos abaixo para configurar a integração com o Google Calendar
            </p>
          </div>

          <div className="space-y-6">
            {/* Status da Configuração */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Status da Configuração
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Verifique se todas as credenciais estão configuradas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <span className="text-slate-300">Google Client ID</span>
                    <Badge variant="destructive">Não Configurado</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <span className="text-slate-300">Google Client Secret</span>
                    <Badge variant="destructive">Não Configurado</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <span className="text-slate-300">Refresh Token</span>
                    <Badge variant="destructive">Não Configurado</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <span className="text-slate-300">Calendar ID</span>
                    <Badge variant="destructive">Não Configurado</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Passo 1 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <div className="bg-slate-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  Criar Projeto no Google Cloud Console
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Acesse o <a href="https://console.cloud.google.com/" target="_blank" className="text-blue-400 hover:underline">Google Cloud Console</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Crie um novo projeto ou selecione um existente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Vá para &quot;APIs &amp; Services&quot; → &quot;Library&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Procure e habilite a &quot;Google Calendar API&quot;</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Passo 2 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <div className="bg-slate-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  Configurar OAuth 2.0
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <Key className="h-5 w-5 text-blue-500 mt-0.5" />
                    <span>Vá para &quot;APIs &amp; Services&quot; → &quot;Credentials&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Key className="h-5 w-5 text-blue-500 mt-0.5" />
                    <span>Clique em &quot;Create Credentials&quot; → &quot;OAuth 2.0 Client IDs&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Key className="h-5 w-5 text-blue-500 mt-0.5" />
                    <span>Configure como &quot;Web application&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Key className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <span>Adicione as URLs autorizadas:</span>
                      <div className="mt-2 space-y-1">
                        <div className="bg-slate-900 p-2 rounded text-sm font-mono">
                          http://localhost:3001
                        </div>
                        <div className="bg-slate-900 p-2 rounded text-sm font-mono">
                          https://seudominio.com
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Key className="h-5 w-5 text-blue-500 mt-0.5" />
                    <span>Baixe o arquivo JSON das credenciais</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Passo 3 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <div className="bg-slate-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  Configurar Variáveis de Ambiente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Edite o arquivo <code className="bg-slate-900 px-2 py-1 rounded">.env.local</code> e adicione suas credenciais:
                </p>
                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm text-green-400">
                  <div className="text-slate-500"># Google Calendar API Configuration</div>
                  <div>GOOGLE_CLIENT_ID=seu_client_id_aqui</div>
                  <div>GOOGLE_CLIENT_SECRET=seu_client_secret_aqui</div>
                  <div>GOOGLE_REFRESH_TOKEN=seu_refresh_token_aqui</div>
                  <div>GOOGLE_CALENDAR_ID=seu_calendar_id_aqui</div>
                  <div className="mt-2 text-slate-500"># Next.js Configuration</div>
                  <div>NEXTAUTH_URL=http://localhost:3001</div>
                  <div>NEXTAUTH_SECRET=uma_string_secreta_aleatoria</div>
                </div>
              </CardContent>
            </Card>

            {/* Passo 4 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <div className="bg-slate-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  Obter Refresh Token
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Execute o script auxiliar para obter o refresh token:
                </p>
                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-400">
                  npm run setup-calendar
                </div>
                <p className="text-slate-400 text-sm">
                  Este script irá gerar uma URL de autorização e ajudará você a obter o refresh token necessário.
                </p>
              </CardContent>
            </Card>

            {/* Passo 5 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <div className="bg-slate-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  Testar Integração
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Após configurar todas as credenciais, teste a integração:
                </p>
                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm text-blue-400">
                  npm run test-calendar
                </div>
                <p className="text-slate-400 text-sm">
                  Este script verificará se todas as configurações estão corretas e se a integração está funcionando.
                </p>
              </CardContent>
            </Card>

            {/* Links Úteis */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <LinkIcon className="h-5 w-5" />
                  Links Úteis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a 
                    href="https://console.cloud.google.com/" 
                    target="_blank"
                    className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg hover:bg-slate-900/80 transition-colors"
                  >
                    <Settings className="h-5 w-5 text-blue-400" />
                    <span className="text-white">Google Cloud Console</span>
                  </a>
                  <a 
                    href="https://calendar.google.com/" 
                    target="_blank"
                    className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg hover:bg-slate-900/80 transition-colors"
                  >
                    <Calendar className="h-5 w-5 text-green-400" />
                    <span className="text-white">Google Calendar</span>
                  </a>
                  <a 
                    href="https://developers.google.com/calendar/api" 
                    target="_blank"
                    className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg hover:bg-slate-900/80 transition-colors"
                  >
                    <Code className="h-5 w-5 text-purple-400" />
                    <span className="text-white">Calendar API Docs</span>
                  </a>
                  <Link 
                    href="/agendamento"
                    className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg hover:bg-slate-900/80 transition-colors"
                  >
                    <FileText className="h-5 w-5 text-yellow-400" />
                    <span className="text-white">Testar Agendamento</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/agendamento">
                <Button size="lg" className="bg-gradient-to-r from-slate-700 to-zinc-800 hover:from-slate-800 hover:to-zinc-900 text-white">
                  <Calendar className="mr-2 h-5 w-5" />
                  Ir para Agendamento
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  Voltar ao Início
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
