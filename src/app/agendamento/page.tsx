"use client";

import { BarbeiroSelector } from "@/components/booking/barbeiro-selector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Star, Calendar } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function AgendamentoContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') as "corte" | "barba" | "corteBarba" | "sobrancelha" | null;
  const barbeiroParam = searchParams.get('barbeiro') as "luiz" | "marcos" | null;
  const [selectedBarbeiro, setSelectedBarbeiro] = useState<string | null>(barbeiroParam);

  // Se vier com parâmetro de barbeiro, já seleciona
  useEffect(() => {
    if (barbeiroParam) {
      setSelectedBarbeiro(barbeiroParam);
    }
  }, [barbeiroParam]);

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
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-50 mb-4">
              {getServiceTitle()}
            </h1>
            <p className="text-amber-100/80 text-lg max-w-2xl mx-auto">
              {service 
                ? `Reserve seu horário para ${getServiceTitle().toLowerCase()}`
                : "Reserve seu atendimento com nossos especialistas. Escolha o serviço, data e horário que melhor se adequam à sua agenda."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações da Barbearia */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-900/50 border-blue-900/30">
                <CardHeader>
                  <CardTitle className="text-amber-50 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Dom Luis Barbearia
                  </CardTitle>
                  <CardDescription className="text-amber-100/80">
                    Sua barbearia de confiança
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-amber-50 font-medium">Endereço</p>
                      <p className="text-amber-100/80 text-sm">
                        R. Genoveva Onófre Barban, 892<br />
                        Planalto Verde, Ribeirão Preto - SP<br />
                        CEP: 14056-340
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-amber-50 font-medium">Contato dos Barbeiros</p>
                      <div className="text-amber-100/80 text-sm space-y-1">
                        <p>Luiz: (16) 99149-5360</p>
                        <p>Marcos: (16) 99637-0028</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-amber-50 font-medium">Horário de Funcionamento</p>
                      <div className="text-amber-100/80 text-sm space-y-1">
                        <p>Segunda à Sexta: 9h às 19h</p>
                        <p>Sábado: 8h às 17h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Serviços Disponíveis */}
              <Card className="bg-slate-900/50 border-blue-900/30 mt-6">
                <CardHeader>
                  <CardTitle className="text-amber-50">Nossos Serviços</CardTitle>
                  <CardDescription className="text-amber-100/80">
                    Serviços profissionais para o homem moderno
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-50">Corte Masculino</span>
                      <Badge variant="secondary" className="bg-blue-900/30 text-blue-400">
                        R$ 35
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-50">Barba</span>
                      <Badge variant="secondary" className="bg-blue-900/30 text-blue-400">
                        R$ 30
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-50">Corte + Barba</span>
                      <Badge variant="secondary" className="bg-blue-900/30 text-blue-400">
                        R$ 60
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-50">Sobrancelha</span>
                      <Badge variant="secondary" className="bg-blue-900/30 text-blue-400">
                        R$ 15
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-50">Luzes</span>
                      <Badge variant="secondary" className="bg-blue-900/30 text-blue-400">
                        R$ 80
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Seleção de Barbeiro e Agendamento */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-900/50 border-blue-900/30">
                <CardHeader>
                  <CardTitle className="text-amber-50 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    Escolha seu Barbeiro
                  </CardTitle>
                  <CardDescription className="text-amber-100/80">
                    Selecione o profissional e agende seu horário
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BarbeiroSelector 
                    service={service || undefined}
                    initialBarbeiro={selectedBarbeiro || undefined}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mapa na parte inferior */}
          <div className="mt-8">
            <Card className="bg-slate-900/50 border-blue-900/30">
              <CardHeader>
                <CardTitle className="text-amber-50">Nossa Localização</CardTitle>
                <CardDescription className="text-amber-100/80">
                  Encontre nossa barbearia facilmente no mapa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.5396832984937!2d-47.82089312375655!3d-21.217772580485546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9be1c7f3e2b8b%3A0x8b8b8b8b8b8b8b8b!2sR.%20Genoveva%20On%C3%B3fre%20Barban%2C%20892%20-%20Planalto%20Verde%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
              </CardContent>
            </Card>
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
