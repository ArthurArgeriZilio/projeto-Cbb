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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">Nossos Serviços</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/30 p-4 rounded-lg text-center">
              <Scissors className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold text-sm">Corte Masculino</h3>
              <p className="text-orange-500 font-bold">R$ 35</p>
            </div>
            <div className="bg-slate-800/30 p-4 rounded-lg text-center">
              <User className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold text-sm">Barba</h3>
              <p className="text-orange-500 font-bold">R$ 30</p>
            </div>
            <div className="bg-slate-800/30 p-4 rounded-lg text-center">
              <Zap className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold text-sm">Corte + Barba</h3>
              <p className="text-orange-500 font-bold">R$ 60</p>
            </div>
            <div className="bg-slate-800/30 p-4 rounded-lg text-center">
              <Eye className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold text-sm">Sobrancelha</h3>
              <p className="text-orange-500 font-bold">R$ 15</p>
            </div>
            <div className="bg-slate-800/30 p-4 rounded-lg text-center">
              <Star className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold text-sm">Luzes</h3>
              <p className="text-orange-500 font-bold">R$ 80</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {barbers.map((barber, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="relative mb-4">
                      <Avatar className="h-20 w-20 bg-gradient-to-br from-orange-500 to-orange-600">
                        <AvatarFallback className="text-white text-2xl font-bold bg-transparent">
                          {barber.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800"></div>
                    </div>

                    {/* Name & Specialty */}
                    <h3 className="text-xl font-bold text-white mb-2">{barber.name}</h3>
                    <p className="text-orange-500 font-medium mb-2">{barber.specialty}</p>

                    {/* Rating & Experience */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white font-semibold">{barber.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-300 text-sm">{barber.experience}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <p className="text-3xl font-bold text-orange-500 mb-1">{barber.price}</p>
                    </div>

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
          <h2 className="text-2xl font-bold text-white text-center mb-8">Nos Siga nas Redes</h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <a
              href="https://www.instagram.com/domluis_barbearia?igsh=dHR4Z2t2ZDBlM3Nn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-3 px-6 transition-all duration-300 transform hover:scale-105">
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
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 transition-all duration-300 transform hover:scale-105">
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
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>

      </main>
    </div>
  );
}