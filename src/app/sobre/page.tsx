"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Award, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function SobrePage() {
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
            Sobre a Dom Luis Barbearia
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tradição e modernidade em cortes masculinos há mais de 10 anos
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Nossa História */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Scissors className="h-8 w-8 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Nossa História</h2>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  A Dom Luis Barbearia nasceu da paixão por cuidar do estilo masculino. 
                  Localizada no coração do Planalto Verde em Ribeirão Preto, nossa barbearia 
                  combina técnicas tradicionais com tendências modernas.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Com mais de uma década de experiência, construímos nossa reputação 
                  baseada na qualidade, atenção aos detalhes e no relacionamento próximo 
                  com nossos clientes.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Nossos Valores */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Nossos Valores</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">Qualidade</h3>
                    <p className="text-slate-300 text-sm">
                      Utilizamos apenas produtos premium e técnicas aperfeiçoadas ao longo dos anos.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">Tradição</h3>
                    <p className="text-slate-300 text-sm">
                      Preservamos a arte clássica da barbearia com um toque contemporâneo.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">Excelência</h3>
                    <p className="text-slate-300 text-sm">
                      Cada cliente recebe atenção personalizada e um serviço de primeira qualidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">2000+</div>
                <p className="text-slate-300">Clientes Satisfeitos</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <p className="text-slate-300">Anos de Experiência</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <p className="text-slate-300">Satisfação Garantida</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
