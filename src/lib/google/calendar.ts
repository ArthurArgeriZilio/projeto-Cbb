import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// Configurações do Google Calendar
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3001/api/auth/google/callback';
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

// Configurar OAuth2
const oauth2Client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
);

// Configurar credentials se existirem
if (GOOGLE_REFRESH_TOKEN) {
  oauth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN,
  });
}

export const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export { oauth2Client };

// Tipos para agendamento
export interface BookingData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  duration: number; // em minutos
  price: number;
  notes?: string;
}

// Função para criar evento no Google Calendar
export async function createCalendarEvent(bookingData: BookingData) {
  try {
    const startDateTime = new Date(`${bookingData.date}T${bookingData.time}`);
    const endDateTime = new Date(startDateTime.getTime() + bookingData.duration * 60000);

    const event = {
      summary: `${bookingData.service} - ${bookingData.customerName}`,
      description: `
        Cliente: ${bookingData.customerName}
        Email: ${bookingData.customerEmail}
        Telefone: ${bookingData.customerPhone}
        Serviço: ${bookingData.service}
        Barbeiro: ${bookingData.barber}
        Preço: R$ ${bookingData.price}
        ${bookingData.notes ? `Observações: ${bookingData.notes}` : ''}
      `.trim(),
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/Sao_Paulo',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/Sao_Paulo',
      },
      attendees: [
        {
          email: bookingData.customerEmail,
          displayName: bookingData.customerName,
        },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 dia antes
          { method: 'email', minutes: 60 }, // 1 hora antes
          { method: 'popup', minutes: 15 }, // 15 minutos antes
        ],
      },
      colorId: '2', // Verde para agendamentos
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      sendUpdates: 'all', // Enviar notificações para todos os participantes
    });

    return {
      success: true,
      eventId: response.data.id,
      eventLink: response.data.htmlLink,
      data: response.data,
    };
  } catch (error) {
    console.error('Erro ao criar evento no Google Calendar:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    };
  }
}

// Função para listar eventos (verificar disponibilidade)
export async function getCalendarEvents(date: string) {
  try {
    const startOfDay = new Date(`${date}T00:00:00`);
    const endOfDay = new Date(`${date}T23:59:59`);

    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    return {
      success: true,
      events: response.data.items || [],
    };
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      events: [],
    };
  }
}

// Função para cancelar agendamento
export async function cancelCalendarEvent(eventId: string) {
  try {
    await calendar.events.delete({
      calendarId: 'primary',
      eventId: eventId,
      sendUpdates: 'all',
    });

    return {
      success: true,
      message: 'Agendamento cancelado com sucesso',
    };
  } catch (error) {
    console.error('Erro ao cancelar evento:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    };
  }
}

// Função para reagendar
export async function rescheduleCalendarEvent(
  eventId: string,
  newDate: string,
  newTime: string,
  duration: number
) {
  try {
    const startDateTime = new Date(`${newDate}T${newTime}`);
    const endDateTime = new Date(startDateTime.getTime() + duration * 60000);

    const response = await calendar.events.patch({
      calendarId: 'primary',
      eventId: eventId,
      requestBody: {
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: 'America/Sao_Paulo',
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: 'America/Sao_Paulo',
        },
      },
      sendUpdates: 'all',
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Erro ao reagendar evento:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    };
  }
}

// Função para gerar horários disponíveis
export function generateAvailableSlots(
  date: string,
  existingEvents: any[] = [],
  workingHours = { start: '08:00', end: '18:00' },
  slotDuration = 60 // minutos
) {
  const slots: string[] = [];
  const [startHour, startMinute] = workingHours.start.split(':').map(Number);
  const [endHour, endMinute] = workingHours.end.split(':').map(Number);

  const startTime = startHour * 60 + startMinute;
  const endTime = endHour * 60 + endMinute;

  // Gerar todos os slots possíveis
  for (let time = startTime; time < endTime; time += slotDuration) {
    const hour = Math.floor(time / 60);
    const minute = time % 60;
    const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    
    // Verificar se o slot não está ocupado
    const slotStart = new Date(`${date}T${timeString}`);
    const slotEnd = new Date(slotStart.getTime() + slotDuration * 60000);
    
    const isOccupied = existingEvents.some(event => {
      if (!event.start?.dateTime || !event.end?.dateTime) return false;
      
      const eventStart = new Date(event.start.dateTime);
      const eventEnd = new Date(event.end.dateTime);
      
      return (
        (slotStart >= eventStart && slotStart < eventEnd) ||
        (slotEnd > eventStart && slotEnd <= eventEnd) ||
        (slotStart <= eventStart && slotEnd >= eventEnd)
      );
    });

    if (!isOccupied) {
      slots.push(timeString);
    }
  }

  return slots;
}
