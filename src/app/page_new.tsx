"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Calendar, 
  Star, 
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
  Scissors,
  Zap,
  User,
  Eye,
  Mail
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  // Dados dos barbeiros
  const barbers = [
    {
      name: "Luis",
      avatar: "L",
      specialty: "Cortes Modernos",
      rating: 5.0,
      experience: "8 anos",
      price: "R$ 35"
    },
    {
      name: "Marcos",
      avatar: "M",
      specialty: "Barba & Desenho",
      rating: 5.0,
      experience: "6 anos",
      price: "R$ 30"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-20">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dom Luis Barbearia - ATUALIZADO 2024
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Profissionais experientes prontos para cuidar do seu visual - Versão Mais Recente
          </p>
        </motion.div>

        {/* Barbeiros Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Nossos Profissionais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {barbers.map((barber, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Avatar className="w-16 h-16 mx-auto bg-orange-500">
                      <AvatarFallback className="text-white font-bold text-xl bg-orange-500">
                        {barber.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{barber.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{barber.specialty}</p>
                  
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{barber.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span className="text-slate-300 text-sm">{barber.experience}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-orange-500">{barber.price}</p>
                  </div>

                  {/* Action Button */}
                  <Link href="/agendamento" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 text-sm md:text-base transition-all duration-300 transform hover:scale-105 min-h-[48px]">
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      Agendar com {barber.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-white text-center mb-6">Nos Siga nas Redes</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a
              href="https://www.instagram.com/domluis_barbearia?igsh=dHR4Z2t2ZDBlM3Nn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 px-6 text-sm font-semibold transition-all duration-300">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </Button>
            </a>
            <a
              href="https://facebook.com/domluisbarbearia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 text-sm font-semibold transition-all duration-300">
                <Facebook className="h-5 w-5 mr-2" />
                Facebook
              </Button>
            </a>
            <a
              href="https://wa.me/5516993963867"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 text-sm font-semibold transition-all duration-300">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer ÚNICO - SEM DUPLICAÇÃO */}
      <footer className="bg-slate-900/50 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - About */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Scissors className="h-5 w-5 text-orange-500" />
                Dom Luis Barbearia
              </h3>
              <p className="text-slate-300 mb-4">
                Tradição e modernidade em cortes masculinos. Mais de 10 anos oferecendo o melhor em estilo e cuidado masculino.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/domluis_barbearia?igsh=dHR4Z2t2ZDBlM3Nn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com/domluisbarbearia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/5516993963867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Column - Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 text-orange-500">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">R. Genoveva Onófre Barban, 892</p>
                    <p className="text-slate-300 text-sm">Planalto Verde - Ribeirão Preto, SP</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <p className="text-slate-300">(16) 99396-3867</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <p className="text-slate-300">contato@domluisbarbearia.com</p>
                </div>
                
                <div className="mt-4">
                  <p className="text-orange-500 font-medium mb-2">Horário de Funcionamento:</p>
                  <div className="text-slate-300 text-sm space-y-1">
                    <p>Seg - Sex: 9h às 19h</p>
                    <p>Sáb: 8h às 17h</p>
                    <p>Dom: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-6 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Dom Luis Barbearia - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}