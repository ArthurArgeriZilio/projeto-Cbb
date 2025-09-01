import { NextRequest, NextResponse } from 'next/server';
import { createCalendarEvent, BookingData } from '@/lib/google/calendar';

export async function POST(request: NextRequest) {
  try {
    const bookingData: BookingData = await request.json();

    // Validação básica
    if (!bookingData.customerName || !bookingData.customerEmail || !bookingData.date || !bookingData.time) {
      return NextResponse.json(
        { success: false, error: 'Dados obrigatórios não fornecidos' },
        { status: 400 }
      );
    }

    // Criar evento no Google Calendar
    const result = await createCalendarEvent(bookingData);

    if (result.success) {
      // Aqui você pode salvar no banco de dados também
      
      return NextResponse.json({
        success: true,
        message: 'Agendamento criado com sucesso!',
        eventId: result.eventId,
        eventLink: result.eventLink,
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erro na API de booking:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  if (!date) {
    return NextResponse.json(
      { success: false, error: 'Data não fornecida' },
      { status: 400 }
    );
  }

  // Aqui você pode buscar agendamentos do banco de dados
  // Por enquanto, retornamos uma resposta mock
  return NextResponse.json({
    success: true,
    bookings: [],
  });
}
