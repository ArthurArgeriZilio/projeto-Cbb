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
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark-hero-bg">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-6 bg-slate-800/80 text-blue-300 border-blue-500/30 backdrop-blur-sm dark-glow-blue px-4 py-2">
                💈 Tradição e estilo masculino
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-slate-100">Desperte Seu</span>
              <br />
              <span className="relative dark-text-gradient">
                Estilo Único
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-3 dark-gradient-accent rounded-full opacity-60"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Tradição e modernidade em cortes masculinos. 
              Venha viver uma experiência única de cuidado e estilo.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/agendamento">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg dark-glow-blue hover:dark-glow-purple border-0"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Agora
                </Button>
              </Link>
              <Link href="/loja">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500 hover:text-blue-300 px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Ver Produtos
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-sm text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Agendamento Online 24h
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Profissionais Certificados
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Produtos Premium
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 text-6xl opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          💈
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 text-4xl opacity-20"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ✂️
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20 text-5xl opacity-20"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.7 }}
        >
          🧔
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 text-4xl opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        >
          💪
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full mb-4 dark-glow-blue group-hover:dark-glow-purple transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-8 w-8 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                </motion.div>
                <div className="text-3xl font-bold text-slate-100 mb-2 dark-text-gradient">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 dark-text-gradient">
              Nossos Serviços
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full dark-glass border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:dark-glow-blue">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="text-6xl mb-6"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.image}
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:text-purple-400 transition-colors duration-300" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 text-slate-100">{service.title}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                    <div className="text-xl font-bold dark-text-gradient mb-6">{service.price}</div>
                    <Link href="/agendamento">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 dark-glow-blue hover:dark-glow-purple transition-all duration-300">
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
              <Button variant="outline" size="lg" className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500 hover:text-blue-300 transition-all duration-300">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 dark-text-gradient">
              O que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full dark-glass border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:dark-glow-blue">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Avatar className="h-12 w-12 mr-4 ring-2 ring-blue-500/30">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold">{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-slate-100">{testimonial.name}</div>
                        <div className="text-sm text-slate-400">{testimonial.service}</div>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
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
      <section className="py-20 dark-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-slate-100">
              Pronto para Sua <span className="dark-text-gradient">Transformação</span>?
            </h2>
            <p className="text-xl mb-8 text-slate-300">
              Agende seu horário agora e descubra como podemos realçar seu estilo masculino
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/agendamento">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl px-8 py-4 text-lg dark-glow-blue hover:dark-glow-purple border-0 transition-all duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Horário
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500 hover:text-blue-300 px-8 py-4 text-lg transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (11) 9999-9999
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className="mt-8 flex justify-center items-center text-sm text-slate-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Rua dos Barbeiros, 456 - Centro, São Paulo
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
