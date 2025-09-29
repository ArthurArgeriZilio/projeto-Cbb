#!/bin/bash

# 🚀 Script de Deploy para GitHub Pages
# Este script automatiza o processo de build e deploy

echo "🏗️  Iniciando processo de build e deploy..."

# 1. Limpar cache e arquivos antigos
echo "🧹 Limpando cache..."
rm -rf .next out node_modules/.cache

# 2. Instalar dependências
echo "📦 Instalando dependências..."
npm ci

# 3. Fazer build de produção
echo "🔨 Gerando build de produção..."
export GITHUB_ACTIONS=true
npm run build

# 4. Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo "📁 Arquivos gerados na pasta 'out/'"
    echo "🌐 Site será deployado automaticamente via GitHub Actions"
    echo "🔗 URL: https://arthurargerzilio.github.io/projeto-Cbb/"
else
    echo "❌ Erro no build. Verifique os logs acima."
    exit 1
fi

# 5. Adicionar e commitar mudanças se houver
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Commitando mudanças..."
    git add .
    git commit -m "build: atualização automática do build"
    git push origin master
    echo "🚀 Deploy iniciado via GitHub Actions!"
else
    echo "ℹ️  Nenhuma mudança para commitar."
fi

echo "🎉 Processo concluído!"
