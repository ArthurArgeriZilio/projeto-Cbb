"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalEmbedSimple } from "./cal-embed-simple";
import { calConfig } from "@/lib/cal-config";
import { User, Star, Clock, Phone } from "lucide-react";

interface BarbeiroSelectorProps {
  service?: "corte" | "barba" | "corteBarba" | "sobrancelha";
  className?: string;
}

export function BarbeiroSelector({ service, className = "" }: BarbeiroSelectorProps) {
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState<"barbeiro1" | "barbeiro2" | null>(null);

  const barbeiros = [
    {
      id: "barbeiro1" as const,
      ...calConfig.barbeiros.barbeiro1,
      rating: "4.9",
      avaliacoes: "150+",
    },
    {
      id: "barbeiro2" as const,
      ...calConfig.barbeiros.barbeiro2,
      rating: "4.8",
      avaliacoes: "120+",
    }
  ];

  if (barbeiroSelecionado) {
    const barbeiro = barbeiros.find(b => b.id === barbeiroSelecionado);
    const calLink = service 
      ? barbeiro?.services[service] 
      : barbeiro?.username;

    return (
      <div className={className}>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{barbeiro?.foto}</div>
            <div>
              <h3 className="text-xl font-bold text-white">{barbeiro?.nome}</h3>
              <p className="text-slate-400 text-sm">{barbeiro?.especialidade}</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => setBarbeiroSelecionado(null)}
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Trocar Barbeiro
          </Button>
        </div>

        <CalEmbedSimple 
          calLink={calLink}
          className="rounded-lg"
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Escolha seu Barbeiro</h3>
        <p className="text-slate-300">Selecione o profissional que você prefere</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {barbeiros.map((barbeiro) => (
          <Card 
            key={barbeiro.id}
            className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
            onClick={() => setBarbeiroSelecionado(barbeiro.id)}
          >
            <CardHeader className="text-center pb-4">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {barbeiro.foto}
              </div>
              <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                {barbeiro.nome}
              </CardTitle>
              <CardDescription className="text-slate-400">
                {barbeiro.especialidade}
              </CardDescription>
              
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{barbeiro.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{barbeiro.avaliacoes} avaliações</span>
                </div>
              </div>
              
              {/* Telefone do barbeiro */}
              {barbeiro.telefone && (
                <div className="flex items-center justify-center gap-1 mt-3 text-slate-400">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{barbeiro.telefone}</span>
                </div>
              )}
            </CardHeader>
            
            <CardContent className="pt-0">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 group-hover:shadow-lg transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setBarbeiroSelecionado(barbeiro.id);
                }}
              >
                <Clock className="mr-2 h-4 w-4" />
                Agendar com {barbeiro.nome}
              </Button>
              
              {/* Horários disponíveis (exemplo) */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                  Seg-Sex: 8h-18h
                </Badge>
                <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                  Sáb: 8h-16h
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
        <p className="text-slate-300 text-sm text-center">
          💡 <strong>Dica:</strong> Ambos os profissionais oferecem os mesmos serviços com excelência. 
          Escolha baseado na sua preferência de horário ou barbeiro de confiança!
        </p>
      </div>
    </div>
  );
}
