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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-20 pb-8">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Dom Luis Barbearia
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            Profissionais experientes prontos para cuidar do seu visual
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Nossos Serviços</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-slate-800/30 p-5 sm:p-4 rounded-lg text-center">
              <Scissors className="h-10 w-10 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-3 sm:mb-2" />
              <h3 className="text-white font-semibold text-sm sm:text-sm">Corte Masculino</h3>
              <p className="text-orange-500 font-bold text-lg sm:text-base mt-1">R$ 35</p>
            </div>
            <div className="bg-slate-800/30 p-5 sm:p-4 rounded-lg text-center">
              <User className="h-10 w-10 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-3 sm:mb-2" />
              <h3 className="text-white font-semibold text-sm sm:text-sm">Barba</h3>
              <p className="text-orange-500 font-bold text-lg sm:text-base mt-1">R$ 30</p>
            </div>
            <div className="bg-slate-800/30 p-5 sm:p-4 rounded-lg text-center">
              <Zap className="h-10 w-10 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-3 sm:mb-2" />
              <h3 className="text-white font-semibold text-sm sm:text-sm">Corte + Barba</h3>
              <p className="text-orange-500 font-bold text-lg sm:text-base mt-1">R$ 60</p>
            </div>
            <div className="bg-slate-800/30 p-5 sm:p-4 rounded-lg text-center">
              <Eye className="h-10 w-10 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-3 sm:mb-2" />
              <h3 className="text-white font-semibold text-sm sm:text-sm">Sobrancelha</h3>
              <p className="text-orange-500 font-bold text-lg sm:text-base mt-1">R$ 15</p>
            </div>
            <div className="bg-slate-800/30 p-5 sm:p-4 rounded-lg text-center col-span-2 md:col-span-1">
              <Star className="h-10 w-10 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-3 sm:mb-2" />
              <h3 className="text-white font-semibold text-sm sm:text-sm">Luzes</h3>
              <p className="text-orange-500 font-bold text-lg sm:text-base mt-1">R$ 80</p>
            </div>
          </div>
        </motion.div>

        {/* Barbers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Agende direto com o profissional de sua preferência
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {barbers.map((barber, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700 overflow-hidden">
                <CardContent className="p-8 sm:p-6">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="relative mb-5 sm:mb-4">
                      <Avatar className="h-28 w-28 sm:h-20 sm:w-20 bg-gradient-to-br from-orange-500 to-orange-600">
                        <AvatarFallback className="text-white text-4xl sm:text-2xl font-bold bg-transparent">
                          {barber.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-slate-800"></div>
                    </div>

                    {/* Name & Specialty */}
                    <h3 className="text-2xl sm:text-xl font-bold text-white mb-3 sm:mb-2">{barber.name}</h3>
                    <p className="text-orange-500 font-medium mb-3 sm:mb-2 text-lg sm:text-base">{barber.specialty}</p>

                    {/* Rating & Experience */}
                    <div className="flex items-center gap-5 sm:gap-4 mb-5 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-1">
                        <Star className="h-6 w-6 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white font-semibold text-lg sm:text-base">{barber.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-1">
                        <Clock className="h-6 w-6 sm:h-4 sm:w-4 text-slate-400" />
                        <span className="text-slate-300 text-base sm:text-sm">{barber.experience}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-7 sm:mb-6">
                      <p className="text-4xl sm:text-3xl font-bold text-orange-500 mb-1">{barber.price}</p>
                    </div>

                    {/* Action Button */}
                    <Link href="/agendamento" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 sm:py-3 px-4 text-lg sm:text-base transition-all duration-300 transform hover:scale-105 min-h-[56px] sm:min-h-[48px]">
                        <Calendar className="h-6 w-6 sm:h-5 sm:w-5 mr-2" />
                        Agendar com {barber.name}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-2xl font-bold text-white text-center mb-10 sm:mb-8 px-2">Nos Siga nas Redes</h2>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-4 max-w-2xl mx-auto px-2">
            <a
              href="https://www.instagram.com/domluis_barbearia?igsh=dHR4Z2t2ZDBlM3Nn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-4 sm:py-3 px-6 text-lg sm:text-base transition-all duration-300 transform hover:scale-105 min-h-[56px] sm:min-h-[48px]">
                <Instagram className="h-7 w-7 sm:h-5 sm:w-5 mr-2" />
                Instagram
              </Button>
            </a>
            <a
              href="https://facebook.com/domluisbarbearia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 sm:py-3 px-6 text-lg sm:text-base transition-all duration-300 transform hover:scale-105 min-h-[56px] sm:min-h-[48px]">
                <Facebook className="h-7 w-7 sm:h-5 sm:w-5 mr-2" />
                Facebook
              </Button>
            </a>
            <a
              href="https://wa.me/5516993963867"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 sm:py-3 px-6 text-lg sm:text-base transition-all duration-300 transform hover:scale-105 min-h-[56px] sm:min-h-[48px]">
                <MessageCircle className="h-7 w-7 sm:h-5 sm:w-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>

      </main>
    </div>
  );
}