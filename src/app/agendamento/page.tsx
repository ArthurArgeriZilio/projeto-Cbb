"use client";

import { BookingForm } from "@/components/booking/booking-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone, Star } from "lucide-react";

export default function AgendamentoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Agende seu Horário
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Reserve seu atendimento com nossos especialistas. Escolha o serviço,
              data e horário que melhor se adequam à sua agenda.
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
                        Rua das Flores, 123<br />
                        Centro, São Paulo - SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-slate-400" />
                    <div>
                      <p className="text-white font-medium">Telefone</p>
                      <p className="text-slate-300 text-sm">(11) 99999-9999</p>
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
                        R$ 25
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Barba</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">
                        R$ 20
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Corte + Barba</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">
                        R$ 40
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Sobrancelha</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">
                        R$ 15
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Tratamento Capilar</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-200">
                        R$ 35
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulário de Agendamento */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
