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
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dom Luis Barbearia
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Profissionais experientes prontos para cuidar do seu visual
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-6">Nossos Serviços</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-4">
                <div className="flex justify-center mb-2">
                  <Scissors className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-1">Corte Masculino</h3>
                <p className="text-lg font-bold text-orange-500">R$ 35</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-4">
                <div className="flex justify-center mb-2">
                  <User className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-1">Barba</h3>
                <p className="text-lg font-bold text-orange-500">R$ 30</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-4">
                <div className="flex justify-center mb-2">
                  <Zap className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-1">Corte + Barba</h3>
                <p className="text-lg font-bold text-orange-500">R$ 60</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-4">
                <div className="flex justify-center mb-2">
                  <Eye className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-1">Sobrancelha</h3>
                <p className="text-lg font-bold text-orange-500">R$ 15</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Barbers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-6 md:mb-8 px-4"
        >
          <h2 className="text-2xl font-bold text-white mb-3">Escolha seu Barbeiro</h2>
          <p className="text-slate-300 text-sm">Agende direto com o profissional de sua preferência</p>
        </motion.div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto px-4 md:px-0">
          {barbers.map((barber, index) => (
            <motion.div
              key={barber.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="relative mb-4">
                      <Avatar className="h-20 w-20 border-4 border-orange-500">
                        <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-xl font-bold">
                          {barber.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Barber Info */}
                    <h3 className="text-xl font-bold text-white mb-2">{barber.name}</h3>
                    <p className="text-orange-400 font-medium mb-3 text-sm">{barber.specialty}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-center space-x-4 mb-3 text-xs text-slate-300">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                        <span>{barber.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 text-slate-400 mr-1" />
                        <span>{barber.experience}</span>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-xl font-bold text-orange-500 mb-4">{barber.price}</div>

                    {/* Action Button */}
                    <Link href="/agendamento" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 text-sm md:text-base transition-all duration-300 transform hover:scale-105 min-h-[48px]">
                        <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                        Agendar com {barber.name}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 mb-8"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-6">Nos Siga nas Redes</h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <a
              href="https://www.instagram.com/domluis_barbearia?igsh=dHR4Z2t2ZDBlM3Nn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 text-base transition-all duration-300 transform hover:scale-105">
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
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-4 text-base transition-all duration-300 transform hover:scale-105">
                <Facebook className="h-5 w-5 mr-2" />
                Facebook
              </Button>
            </a>
            <a
              href="https://wa.me/5516993963867?text=Olá! Gostaria de agendar um horário na Dom Luis Barbearia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 text-base transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>

      </main>

      {/* Footer with Complete Information */}
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
