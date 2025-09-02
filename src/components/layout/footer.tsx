"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scissors, MapPin, Phone, Mail, Instagram, Facebook, Youtube, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-slate-400" />
              <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-slate-400 to-zinc-400 bg-clip-text text-transparent">
                Dom Luis Barbearia
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tradição e modernidade em cortes masculinos. 
              Mais de 10 anos oferecendo o melhor em estilo e cuidado masculino.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-slate-400 hover:bg-slate-400/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-slate-400 hover:bg-slate-400/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-slate-400 hover:bg-slate-400/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-slate-400">Links Rápidos</h3>
            <div className="space-y-2">
              {[
                { href: "/servicos", label: "Nossos Serviços" },
                { href: "/loja", label: "Loja Online" },
                { href: "/agendamento", label: "Agendar Horário" },
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/blog", label: "Blog & Dicas" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-slate-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contato */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-slate-400">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  R. Genoveva Onófre Barban, 892<br />
                  Planalto Verde - Ribeirão Preto, SP
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <span className="text-gray-300 text-sm">(16) 99396-3867</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <span className="text-gray-300 text-sm">contato@domluisbarbearia.com</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-2">Horário de Funcionamento:</p>
              <p className="text-sm text-gray-300">
                Seg - Sex: 9h às 19h<br />
                Sáb: 8h às 17h<br />
                Dom: Fechado
              </p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-slate-400">Newsletter</h3>
            <p className="text-gray-300 text-sm">
              Receba dicas de estilo masculino, promoções exclusivas e novidades em primeira mão!
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-slate-400"
              />
              <Button className="w-full bg-gradient-to-r from-slate-700 to-zinc-800 hover:from-slate-800 hover:to-zinc-900 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Inscrever-se
              </Button>
            </div>
            <p className="text-xs text-gray-400">
              * Prometemos não enviar spam. Você pode cancelar a qualquer momento.
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Dom Luis Barbearia. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-rose-400 fill-current" />
              <span>para você</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-privacidade" className="text-gray-400 hover:text-slate-400 transition-colors duration-300">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-gray-400 hover:text-slate-400 transition-colors duration-300">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
