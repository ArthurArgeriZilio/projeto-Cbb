// Configurações do Cal.com para Dom Luis Barbearia
export const calConfig = {
  // Substitua pelo seu username do Cal.com
  username: "arthur-argeri-gz0ern", // ✅ CONFIGURADO!
  
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
  
  // Links diretos para serviços específicos (opcional)
  services: {
    corte: "arthur-argeri-gz0ern/corte-masculino",      // ✅ CONFIGURADO!
    barba: "arthur-argeri-gz0ern/barba",                // ✅ CONFIGURADO!  
    corteBarba: "arthur-argeri-gz0ern/corte-barba",     // ✅ CONFIGURADO!
    sobrancelha: "arthur-argeri-gz0ern/sobrancelha",    // ✅ CONFIGURADO!
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
