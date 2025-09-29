"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-20">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Estamos aqui para atendê-lo da melhor forma possível
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Localização</h3>
                </div>
                <p className="text-slate-300">
                  R. Genoveva Onófre Barban, 892<br />
                  Planalto Verde - Ribeirão Preto, SP
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Telefone</h3>
                </div>
                <p className="text-slate-300">(16) 99396-3867</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                </div>
                <p className="text-slate-300">contato@domluisbarbearia.com</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Horário de Funcionamento</h3>
                </div>
                <div className="text-slate-300 space-y-1">
                  <p>Segunda a Sexta: 9h às 19h</p>
                  <p>Sábado: 8h às 17h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </CardContent>
            </Card>

            {/* Redes Sociais */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-orange-500">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-orange-500">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Envie uma Mensagem</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Seu nome"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Seu email"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Telefone (opcional)"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Sua mensagem"
                      rows={6}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
