"use client";

import { useState } from "react";
import { calConfig } from "@/lib/cal-config";
import { Calendar, ExternalLink, Clock, Loader2 } from "lucide-react";

interface CalEmbedProps {
  calLink?: string;
  service?: "corte" | "barba" | "corteBarba" | "sobrancelha";
  className?: string;
}

export function CalEmbedSimple({ calLink, service, className = "" }: CalEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Define o link do Cal.com
  const finalCalLink = calLink || (service ? calConfig.services[service] : calConfig.username);
  const embedUrl = `https://cal.com/${finalCalLink}`;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className={`cal-embed-container ${className} flex items-center justify-center min-h-[600px] bg-slate-800/30 rounded-lg border-2 border-dashed border-slate-600`}>
        <div className="text-center text-slate-300">
          <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg mb-2">Calendário temporariamente indisponível</p>
          <p className="text-sm opacity-70 mb-4">
            Você pode agendar diretamente no Cal.com
          </p>
          <a 
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Abrir Cal.com
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`cal-embed-container ${className} relative`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/30 rounded-lg z-10">
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
      
      <iframe
        src={embedUrl}
        width="100%"
        height="600"
        style={{
          border: "none",
          borderRadius: "8px",
          minHeight: "600px",
        }}
        onLoad={handleLoad}
        onError={handleError}
        title="Agendamento Cal.com"
        className="w-full"
      />
    </div>
  );
}
