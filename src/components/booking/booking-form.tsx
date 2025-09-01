"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar, Clock, User, Phone, Mail, Scissors, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { services as businessServices, staff as businessStaff } from "@/data/business";

// Schema de validação
const bookingSchema = z.object({
  customerName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  customerEmail: z.string().email("Email inválido"),
  customerPhone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  service: z.string().min(1, "Selecione um serviço"),
  barber: z.string().min(1, "Selecione um barbeiro"),
  date: z.string().min(1, "Selecione uma data"),
  time: z.string().min(1, "Selecione um horário"),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

// Usando dados da barbearia
const services = businessServices;
const barbers = businessStaff;

export function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const selectedService = watch("service");
  const selectedTime = watch("time");

  // Buscar horários disponíveis quando a data for selecionada
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(format(selectedDate, "yyyy-MM-dd"));
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async (date: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/availability?date=${date}`);
      const data = await response.json();
      
      if (data.success) {
        setAvailableSlots(data.availableSlots);
      } else {
        console.error("Erro ao buscar horários:", data.error);
        setAvailableSlots([]);
      }
    } catch (error) {
      console.error("Erro ao buscar horários:", error);
      setAvailableSlots([]);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const selectedServiceData = services.find(s => s.id === data.service);
      
      const bookingData = {
        ...data,
        duration: selectedServiceData?.duration || 60,
        price: selectedServiceData?.price || 0,
      };

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (result.success) {
        setBookingSuccess(true);
        reset();
        setSelectedDate(undefined);
        setAvailableSlots([]);
      } else {
        alert(`Erro ao criar agendamento: ${result.error}`);
      }
    } catch (error) {
      console.error("Erro ao enviar agendamento:", error);
      alert("Erro ao enviar agendamento. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (bookingSuccess) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Agendamento Confirmado!</h3>
          <p className="text-gray-600 mb-4">
            Seu agendamento foi criado com sucesso. Você receberá um email de confirmação em breve.
          </p>
          <Button onClick={() => setBookingSuccess(false)}>
            Fazer Novo Agendamento
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Scissors className="h-5 w-5" />
          Agendar Horário
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Dados do Cliente */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-4 w-4" />
              Dados do Cliente
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customerName">Nome Completo</Label>
                <Input
                  id="customerName"
                  {...register("customerName")}
                  placeholder="Seu nome completo"
                />
                {errors.customerName && (
                  <p className="text-sm text-red-500 mt-1">{errors.customerName.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="customerPhone">Telefone</Label>
                <Input
                  id="customerPhone"
                  {...register("customerPhone")}
                  placeholder="(11) 99999-9999"
                />
                {errors.customerPhone && (
                  <p className="text-sm text-red-500 mt-1">{errors.customerPhone.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="customerEmail">Email</Label>
              <Input
                id="customerEmail"
                type="email"
                {...register("customerEmail")}
                placeholder="seu@email.com"
              />
              {errors.customerEmail && (
                <p className="text-sm text-red-500 mt-1">{errors.customerEmail.message}</p>
              )}
            </div>
          </div>

          {/* Serviço e Barbeiro */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviço</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="service">Tipo de Serviço</Label>
                <Select onValueChange={(value) => setValue("service", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{service.name}</span>
                          <Badge variant="secondary" className="ml-2">
                            R$ {service.price}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-sm text-red-500 mt-1">{errors.service.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="barber">Barbeiro</Label>
                <Select onValueChange={(value) => setValue("barber", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o barbeiro" />
                  </SelectTrigger>
                  <SelectContent>
                    {barbers.map((barber) => (
                      <SelectItem key={barber.id} value={barber.id}>
                        {barber.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.barber && (
                  <p className="text-sm text-red-500 mt-1">{errors.barber.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Data e Hora */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Data e Horário
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Data</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {selectedDate ? (
                        format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                      ) : (
                        "Selecione a data"
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        if (date) {
                          setValue("date", format(date, "yyyy-MM-dd"));
                        }
                      }}
                      disabled={(date) => date < new Date() || date.getDay() === 0} // Não permite domingos
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.date && (
                  <p className="text-sm text-red-500 mt-1">{errors.date.message}</p>
                )}
              </div>

              <div>
                <Label>Horário</Label>
                {isLoading ? (
                  <Button variant="outline" className="w-full" disabled>
                    Carregando horários...
                  </Button>
                ) : (
                  <Select onValueChange={(value) => setValue("time", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o horário" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {slot}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                {errors.time && (
                  <p className="text-sm text-red-500 mt-1">{errors.time.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Observações */}
          <div>
            <Label htmlFor="notes">Observações (opcional)</Label>
            <Textarea
              id="notes"
              {...register("notes")}
              placeholder="Alguma observação especial?"
              className="resize-none"
              rows={3}
            />
          </div>

          {/* Resumo */}
          {selectedService && selectedTime && (
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Resumo do Agendamento</h4>
              <div className="space-y-1 text-sm">
                <p><strong>Serviço:</strong> {services.find(s => s.id === selectedService)?.name}</p>
                <p><strong>Duração:</strong> {services.find(s => s.id === selectedService)?.duration} minutos</p>
                <p><strong>Preço:</strong> R$ {services.find(s => s.id === selectedService)?.price}</p>
                {selectedDate && <p><strong>Data:</strong> {format(selectedDate, "dd/MM/yyyy")}</p>}
                <p><strong>Horário:</strong> {selectedTime}</p>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-slate-700 to-zinc-800 hover:from-slate-800 hover:to-zinc-900"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
