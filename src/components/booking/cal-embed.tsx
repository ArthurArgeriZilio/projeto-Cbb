"use client";

import { useEffect, useRef, useState } from "react";
import { calConfig } from "@/lib/cal-config";
import { Calendar, Clock, Loader2 } from "lucide-react";

interface CalEmbedProps {
  calLink?: string;
  service?: "corte" | "barba" | "corteBarba" | "sobrancelha";
  className?: string;
}

export function CalEmbed({ calLink, service, className = "" }: CalEmbedProps) {
  const calRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Define o link do Cal.com
    const finalCalLink = calLink || (service ? calConfig.services[service] : calConfig.username);

    // Função para carregar o Cal.com
    const loadCal = () => {
      try {
        if (calRef.current && (window as any).Cal) {
          (window as any).Cal("init", {
            origin: "https://app.cal.com",
          });

          (window as any).Cal("inline", {
            elementOrSelector: calRef.current,
            calLink: finalCalLink,
            layout: "month_view",
            theme: "dark",
            config: {
              layout: "month_view", 
              theme: "dark",
            }
          });

          setIsLoading(false);
        }
      } catch (err) {
        console.error("Erro ao carregar Cal.com:", err);
        setError("Erro ao carregar o calendário. Tente recarregar a página.");
        setIsLoading(false);
      }
    };

    // Carrega o script do Cal.com se não estiver carregado
    if (!(window as any).Cal) {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.onload = loadCal;
      script.onerror = () => {
        setError("Erro ao carregar o calendário. Verifique sua conexão.");
        setIsLoading(false);
      };
      document.head.appendChild(script);
    } else {
      loadCal();
    }

    return () => {
      // Limpa quando o componente é desmontado
      if (calRef.current) {
        calRef.current.innerHTML = '';
      }
    };
  }, [calLink, service]);

  if (error) {
    return (
      <div className={`cal-embed-container ${className} flex items-center justify-center min-h-[600px] bg-slate-800/30 rounded-lg border-2 border-dashed border-slate-600`}>
        <div className="text-center text-slate-300">
          <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg mb-2">Ops! Algo deu errado</p>
          <p className="text-sm opacity-70">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`cal-embed-container ${className}`}>
      {isLoading && (
        <div className="flex items-center justify-center min-h-[600px] bg-slate-800/30 rounded-lg">
          <div className="text-center text-slate-300">
            <Loader2 className="h-8 w-8 mx-auto mb-4 animate-spin" />
            <p className="text-lg mb-2">Carregando calendário...</p>
            <div className="flex items-center justify-center gap-2 text-sm opacity-70">
              <Clock className="h-4 w-4" />
              <span>Conectando com Cal.com</span>
            </div>
          </div>
        </div>
      )}
      
      <div
        ref={calRef}
        style={{
          width: "100%",
          height: "100%",
          minHeight: "600px",
          borderRadius: "8px",
          overflow: "hidden",
          display: isLoading ? "none" : "block",
        }}
      />
    </div>
  );
}
