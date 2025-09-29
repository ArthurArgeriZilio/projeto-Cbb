"use client";

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
  MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  // Dados dos barbeiros
  const barbers = [
    {
      name: "Arthur Argeri",
      avatar: "A",
      calUrl: "https://cal.com/arthurargeri/barbearia",
      specialty: "Cortes Modernos",
      rating: 5.0,
      experience: "8 anos",
      price: "R$ 35"
    },
    {
      name: "Lucas Silva",
      avatar: "L",
      calUrl: "https://cal.com/lucassilva/barbearia",
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
                <div className="text-3xl mb-2">✂️</div>
                <h3 className="text-white text-sm font-semibold mb-1">Corte Masculino</h3>
                <p className="text-lg font-bold text-orange-500">R$ 35</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">🧔</div>
                <h3 className="text-white text-sm font-semibold mb-1">Barba</h3>
                <p className="text-lg font-bold text-orange-500">R$ 30</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">💪</div>
                <h3 className="text-white text-sm font-semibold mb-1">Corte + Barba</h3>
                <p className="text-lg font-bold text-orange-500">R$ 60</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">👁️</div>
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
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-3">Escolha seu Barbeiro</h2>
          <p className="text-slate-300 text-sm">Agende direto com o profissional de sua preferência</p>
        </motion.div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {barbers.map((barber, index) => (
            <motion.div
              key={barber.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
                <CardContent className="p-6">
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
                    <a
                      href={barber.calUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 text-base transition-all duration-300 transform hover:scale-105">
                        <Calendar className="h-5 w-5 mr-2" />
                        Agendar com {barber.name}
                      </Button>
                    </a>
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
              href="https://instagram.com/domluisbarbearia"
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

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-slate-800/30 rounded-2xl p-6 backdrop-blur-sm border border-slate-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <MapPin className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1 text-sm">Localização</h4>
              <p className="text-slate-300 text-xs">R. Genoveva Onófre Barban, 892<br />Planalto Verde - Ribeirão Preto, SP</p>
            </div>
            <div>
              <Clock className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1 text-sm">Horário</h4>
              <p className="text-slate-300 text-xs">Seg - Sex: 09h às 20h<br />Sáb: 09h às 19h</p>
            </div>
            <div>
              <Phone className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1 text-sm">Contato</h4>
              <p className="text-slate-300 text-xs">(16) 99396-3867<br />contato@domluisbarbearia.com</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
