import { NextRequest, NextResponse } from 'next/server';
import { getCalendarEvents, generateAvailableSlots } from '@/lib/google/calendar';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { success: false, error: 'Data não fornecida' },
        { status: 400 }
      );
    }

    // Buscar eventos existentes no Google Calendar
    const eventsResult = await getCalendarEvents(date);

    if (!eventsResult.success) {
      return NextResponse.json(
        { success: false, error: eventsResult.error },
        { status: 500 }
      );
    }

    // Gerar horários disponíveis
    const availableSlots = generateAvailableSlots(
      date, 
      eventsResult.events?.map(event => ({
        start: { dateTime: event.start?.dateTime || undefined },
        end: { dateTime: event.end?.dateTime || undefined }
      })) || []
    );

    return NextResponse.json({
      success: true,
      date,
      availableSlots,
      existingEvents: eventsResult.events?.length || 0,
    });
  } catch (error) {
    console.error('Erro na API de disponibilidade:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
