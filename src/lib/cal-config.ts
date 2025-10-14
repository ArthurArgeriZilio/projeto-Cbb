// Configurações do Cal.com para Dom Luis Barbearia
export const calConfig = {
  // Configurações dos barbeiros
  barbeiros: {
    barbeiro1: {
      nome: "Luiz",
      username: "arthur-argeri-gz0ern",
      especialidade: "Cortes clássicos e modernos",
      foto: "L",
      telefone: "(16) 99149-5360",
      apiKey: "cal_live_d64eee0eb35a783336925dd159196b34",
      services: {
        corte: "arthur-argeri-gz0ern/corte-masculino",
        barba: "arthur-argeri-gz0ern/barba",
        corteBarba: "arthur-argeri-gz0ern/corte-barba",
        sobrancelha: "arthur-argeri-gz0ern/sobrancelha",
      }
    }
  },
  
  // Configurações do embed
  embedConfig: {
    layout: "month_view", // ou "week_view"
    theme: "dark", // combina com o design do site
    hideEventTypeDetails: false,
    
    // Configurações de estilo personalizadas
    styles: {
      branding: {
        brandColor: "#3b82f6", // azul que combina com o site
      }
    },
    
    // Configurações de localização
    locale: "pt-BR",
  },
  
  // Mantém compatibilidade com versão anterior
  username: "arthur-argeri-gz0ern", // ✅ CONFIGURADO!
  services: {
    corte: "arthur-argeri-gz0ern/corte-masculino",
    barba: "arthur-argeri-gz0ern/barba",
    corteBarba: "arthur-argeri-gz0ern/corte-barba",
    sobrancelha: "arthur-argeri-gz0ern/sobrancelha",
  }
};

// URL base do Cal.com
export const getCalLink = (service?: keyof typeof calConfig.services) => {
  const baseUrl = `https://cal.com/${calConfig.username}`;
  
  if (service && calConfig.services[service]) {
    return `https://cal.com/${calConfig.services[service]}`;
  }
  
  return baseUrl;
};
