"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuickBookingSection } from "@/components/booking/quick-booking-section";
import { 
  Calendar, 
  ShoppingCart, 
  Star, 
  Scissors, 
  Shield, 
  Zap,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      icon: Scissors,
      title: "Corte Masculino",
      description: "Cortes modernos e clássicos executados por barbeiros especializados",
      price: "R$ 35",
      image: "✂️"
    },
    {
      icon: Zap,
      title: "Barba & Bigode",
      description: "Desenho e manutenção de barba com técnicas tradicionais e modernas",
      price: "R$ 30",
      image: "🧔"
    },
    {
      icon: Shield,
      title: "Corte + Barba",
      description: "Combo completo para um visual impecável e moderno",
      price: "R$ 60",
      image: "💪"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      avatar: "C",
      rating: 5,
      text: "Barbeiro top! Sempre saio satisfeito com o corte. Ambiente masculino e profissional.",
      service: "Corte + Barba"
    },
    {
      name: "João Santos",
      avatar: "J",
      rating: 5,
      text: "Melhor barbearia da região! Atendimento nota 10 e preço justo.",
      service: "Corte Masculino"
    },
    {
      name: "Pedro Costa",
      avatar: "P",
      rating: 5,
      text: "Profissionais experientes e ambiente descontraído. Virei cliente fiel!",
      service: "Barba + Tratamento"
    }
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Clientes Satisfeitos" },
    { icon: Award, value: "10+", label: "Anos de Experiência" },
    { icon: Star, value: "4.9", label: "Avaliação Média" },
    { icon: CheckCircle, value: "100%", label: "Satisfação Garantida" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-zinc-700/10"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-6 bg-slate-100 text-slate-700 border-slate-200">
              💈 Tradição e estilo masculino
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 bg-gradient-to-r from-slate-700 via-zinc-700 to-gray-800 bg-clip-text text-transparent leading-tight">
              Desperte Seu
              <br />
              <span className="relative">
                Estilo Único
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-slate-400 to-zinc-400 rounded-full opacity-30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tradição e modernidade em cortes masculinos. 
              Venha viver uma experiência única de cuidado e estilo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/agendamento">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-slate-700 to-zinc-800 hover:from-slate-800 hover:to-zinc-900 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Agora
                </Button>
              </Link>
              <Link href="/loja">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Ver Produtos
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Agendamento Online 24h
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Profissionais Certificados
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Produtos Premium
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">�</div>
        <div className="absolute top-40 right-20 text-4xl opacity-20 animate-pulse">✂️</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-bounce delay-700">🧔</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-pulse delay-1000">💪</div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-100 to-zinc-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-slate-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 bg-gradient-to-r from-slate-700 to-zinc-700 bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra uma gama completa de serviços masculinos pensados especialmente para você
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-6">{service.image}</div>
                    <service.icon className="h-12 w-12 text-slate-700 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="text-xl font-bold text-slate-700 mb-6">{service.price}</div>
                    <Link href="/agendamento">
                      <Button className="w-full bg-gradient-to-r from-slate-700 to-zinc-800 hover:from-slate-800 hover:to-zinc-900 text-white">
                        Agendar Agora
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/servicos">
              <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 bg-gradient-to-r from-slate-700 to-zinc-700 bg-clip-text text-transparent">
              O que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de satisfação e confiança
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-50 to-zinc-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-slate-700 text-white">{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.service}</div>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <QuickBookingSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-zinc-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Pronto para Sua Transformação?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende seu horário agora e descubra como podemos realçar seu estilo masculino
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/agendamento">
                <Button 
                  size="lg" 
                  className="bg-white text-slate-700 hover:bg-gray-100 shadow-xl px-8 py-4 text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Horário
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-700 px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                (11) 9999-9999
              </Button>
            </div>
            <div className="mt-8 flex justify-center items-center text-sm opacity-80">
              <MapPin className="h-4 w-4 mr-2" />
              Rua dos Barbeiros, 456 - Centro, São Paulo
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
