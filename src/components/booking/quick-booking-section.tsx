"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "corte",
    name: "Corte Masculino",
    price: "R$ 35",
    duration: "45 min",
    description: "Corte personalizado com acabamento profissional",
    popular: true,
  },
  {
    id: "barba",
    name: "Barba Completa",
    price: "R$ 30",
    duration: "30 min",
    description: "Aparar, modelar e finalizar com produtos premium",
    popular: false,
  },
  {
    id: "corteBarba",
    name: "Corte + Barba",
    price: "R$ 55",
    duration: "60 min",
    description: "Combo completo para um visual impecável",
    popular: true,
  },
  {
    id: "sobrancelha",
    name: "Sobrancelha",
    price: "R$ 20",
    duration: "20 min",
    description: "Modelagem profissional das sobrancelhas",
    popular: false,
  },
];

export function QuickBookingSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Agende Agora
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha seu serviço favorito e agende diretamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {service.price}
                    </div>
                  </div>
                  
                  <Link href={`/agendamento?service=${service.id}`}>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
