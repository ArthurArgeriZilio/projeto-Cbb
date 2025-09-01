"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Scissors, ShoppingCart, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/servicos", label: "Serviços" },
    { href: "/agendamento", label: "Agendamento" },
    { href: "/loja", label: "Loja" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
    { href: "/configuracao", label: "Config" }, // Link para configuração do Google Calendar
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Scissors className="h-8 w-8 text-slate-700 group-hover:text-slate-900 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-slate-700 to-zinc-800 bg-clip-text text-transparent">
              Elite Barber
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-slate-700 font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-slate-700">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-slate-700">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-to-r from-slate-700 to-zinc-800 hover:from-slate-800 hover:to-zinc-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Calendar className="h-4 w-4 mr-2" />
              Agendar
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-slate-700 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Button className="w-full bg-gradient-to-r from-slate-700 to-zinc-800 hover:from-slate-800 hover:to-zinc-900 text-white mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Horário
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Carrinho
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <User className="h-4 w-4 mr-2" />
                      Entrar
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
