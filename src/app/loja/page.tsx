"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Package } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LojaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const products = [
    {
      id: 1,
      name: "Pomada Modeladora Premium",
      description: "Fixação forte e brilho natural para penteados duradouros",
      price: "R$ 45,90",
      rating: 4.8,
      image: "💈",
      category: "Cabelo"
    },
    {
      id: 2,
      name: "Óleo para Barba Hidratante",
      description: "Hidrata e amacia os pelos da barba, com fragrância masculina",
      price: "R$ 32,90",
      rating: 4.9,
      image: "🧔",
      category: "Barba"
    },
    {
      id: 3,
      name: "Shampoo Masculino Fortalecedor",
      description: "Limpa profundamente e fortalece os fios do cabelo",
      price: "R$ 28,90",
      rating: 4.7,
      image: "🧴",
      category: "Cabelo"
    },
    {
      id: 4,
      name: "Balm Pós-Barba Calmante",
      description: "Acalma e hidrata a pele após o barbear",
      price: "R$ 38,90",
      rating: 4.6,
      image: "✨",
      category: "Barba"
    },
    {
      id: 5,
      name: "Cera Modeladora Matte",
      description: "Efeito fosco e modelagem flexível para cabelos modernos",
      price: "R$ 42,90",
      rating: 4.8,
      image: "💪",
      category: "Cabelo"
    },
    {
      id: 6,
      name: "Kit Cuidados Completo",
      description: "Kit com shampoo, pomada e óleo para barba",
      price: "R$ 89,90",
      originalPrice: "R$ 107,70",
      rating: 4.9,
      image: "📦",
      category: "Kit",
      isPromo: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black pt-20">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-6">
            Nossa Loja
          </h1>
          <p className="text-amber-100/80 text-lg max-w-3xl mx-auto">
            Produtos premium para cuidados masculinos selecionados especialmente para você
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap px-4"
        >
          <Badge 
            variant="secondary" 
            className={`cursor-pointer transition-all ${selectedCategory === null ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-slate-900/50 text-amber-100/80'}`}
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </Badge>
          <Badge 
            variant="outline" 
            className={`cursor-pointer transition-all ${selectedCategory === 'Cabelo' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'border-blue-900/30 text-amber-100/80 hover:bg-slate-900/50'}`}
            onClick={() => setSelectedCategory('Cabelo')}
          >
            Cabelo
          </Badge>
          <Badge 
            variant="outline" 
            className={`cursor-pointer transition-all ${selectedCategory === 'Barba' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'border-blue-900/30 text-amber-100/80 hover:bg-slate-900/50'}`}
            onClick={() => setSelectedCategory('Barba')}
          >
            Barba
          </Badge>
          <Badge 
            variant="outline" 
            className={`cursor-pointer transition-all ${selectedCategory === 'Kit' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'border-blue-900/30 text-amber-100/80 hover:bg-slate-900/50'}`}
            onClick={() => setSelectedCategory('Kit')}
          >
            Kits
          </Badge>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products
            .filter(product => selectedCategory === null || product.category === selectedCategory)
            .map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-slate-900/50 border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-3">{product.image}</div>
                    {product.isPromo && (
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-2">
                        PROMOÇÃO
                      </Badge>
                    )}
                    <Badge variant="outline" className="border-blue-900/30 text-blue-400 text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-amber-50 mb-2 text-center">{product.name}</h3>
                  <p className="text-amber-100/80 text-sm mb-4 text-center">{product.description}</p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                    <span className="text-amber-100/80 text-sm">{product.rating}</span>
                  </div>
                  
                  <div className="text-center mb-6">
                    {product.originalPrice && (
                      <span className="text-amber-100/40 line-through text-sm mr-2">{product.originalPrice}</span>
                    )}
                    <span className="text-2xl font-bold text-blue-400">{product.price}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-amber-50 transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
                    onClick={() => {
                      alert(`${product.name} adicionado ao carrinho! 🛒`);
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-slate-900/50 border border-blue-900/30 rounded-2xl p-8 backdrop-blur-sm text-center"
        >
          <Package className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-amber-50 mb-4">Entrega e Retirada</h3>
          <p className="text-amber-100/80 max-w-3xl mx-auto">
            Faça seu pedido online e retire na barbearia ou solicite entrega local. 
            Todos os produtos são testados e aprovados pelos nossos profissionais.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
