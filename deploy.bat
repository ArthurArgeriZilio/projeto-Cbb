@echo off
REM 🚀 Script de Deploy para GitHub Pages (Windows)
REM Este script automatiza o processo de build e deploy

echo 🏗️  Iniciando processo de build e deploy...

REM 1. Limpar cache e arquivos antigos
echo 🧹 Limpando cache...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out
if exist node_modules\.cache rmdir /s /q node_modules\.cache

REM 2. Instalar dependências
echo 📦 Instalando dependências...
npm ci

REM 3. Fazer build de produção
echo 🔨 Gerando build de produção...
set GITHUB_ACTIONS=true
npm run build

REM 4. Verificar se o build foi bem-sucedido
if %errorlevel% equ 0 (
    echo ✅ Build concluído com sucesso!
    echo 📁 Arquivos gerados na pasta 'out/'
    echo 🌐 Site será deployado automaticamente via GitHub Actions
    echo 🔗 URL: https://arthurargerzilio.github.io/projeto-Cbb/
) else (
    echo ❌ Erro no build. Verifique os logs acima.
    exit /b 1
)

REM 5. Verificar se há mudanças para commitar
git status --porcelain > temp.txt
set /p changes= < temp.txt
del temp.txt

if not "%changes%"=="" (
    echo 📝 Commitando mudanças...
    git add .
    git commit -m "build: atualização automática do build"
    git push origin master
    echo 🚀 Deploy iniciado via GitHub Actions!
) else (
    echo ℹ️  Nenhuma mudança para commitar.
)

echo 🎉 Processo concluído!
pause
