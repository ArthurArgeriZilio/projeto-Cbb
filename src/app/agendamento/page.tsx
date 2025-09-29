"use client";

import { BarbeiroSelector } from "@/components/booking/barbeiro-selector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Star, Calendar } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function AgendamentoContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') as "corte" | "barba" | "corteBarba" | "sobrancelha" | null;

  const getServiceTitle = () => {
    switch (service) {
      case 'corte': return 'Corte Masculino';
      case 'barba': return 'Barba Completa';
      case 'corteBarba': return 'Corte + Barba';
      case 'sobrancelha': return 'Sobrancelha';
      default: return 'Agende seu Horário';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {getServiceTitle()}
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              {service 
                ? `Reserve seu horário para ${getServiceTitle().toLowerCase()}`
                : "Reserve seu atendimento com nossos especialistas. Escolha o serviço, data e horário que melhor se adequam à sua agenda."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações da Barbearia */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Dom Luis Barbearia
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Sua barbearia de confiança
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Endereço</p>
                      <p className="text-slate-300 text-sm">
                        R. Genoveva Onófre Barban, 892<br />
                        Planalto Verde, Ribeirão Preto - SP<br />
                        CEP: 14056-340
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-slate-400" />
                    <div>
                      <p className="text-white font-medium">Telefone</p>
                      <p className="text-slate-300 text-sm">(16) 99396-3867</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Horário de Funcionamento</p>
                      <div className="text-slate-300 text-sm space-y-1">
                        <p>Segunda à Sexta: 9h às 19h</p>
                        <p>Sábado: 8h às 17h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Serviços Disponíveis */}
              <Card className="bg-slate-800/50 border-slate-700 mt-6">
                <CardHeader>
                  <CardTitle className="text-white">Nossos Serviços</CardTitle>
                  <CardDescription className="text-slate-300">
                    Serviços profissionais para o homem moderno
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Corte Masculino</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">
                        R$ 35
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Barba</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">
                        R$ 30
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Corte + Barba</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">
                        R$ 60
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Sobrancelha</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">
                        R$ 15
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Luzes</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">
                        R$ 80
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Seleção de Barbeiro e Agendamento */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    Escolha seu Barbeiro
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Selecione o profissional e agende seu horário
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BarbeiroSelector 
                    service={service || undefined}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AgendamentoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    }>
      <AgendamentoContent />
    </Suspense>
  );
}
