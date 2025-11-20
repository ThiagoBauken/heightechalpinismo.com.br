#!/bin/bash

# ============================================
# Script de Setup do Banco de Dados
# Heightech Alpinismo Industrial
# ============================================

echo "🚀 Iniciando setup do banco de dados..."
echo ""

# Verificar se DATABASE_URL está definida
if [ -z "$DATABASE_URL" ]; then
  echo "❌ Erro: DATABASE_URL não está definida!"
  echo "Configure a variável de ambiente DATABASE_URL com a connection string do PostgreSQL"
  echo ""
  echo "Exemplo:"
  echo 'export DATABASE_URL="postgresql://user:password@host:5432/database"'
  exit 1
fi

echo "✅ DATABASE_URL encontrada"
echo ""

# Executar o script SQL
echo "📝 Criando tabelas no banco de dados..."
psql "$DATABASE_URL" -f database-setup.sql

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Banco de dados criado com sucesso!"
  echo ""
  echo "📊 Tabelas criadas:"
  echo "  - users (usuários admin)"
  echo "  - contacts (contatos do site)"
  echo "  - quotes (orçamentos)"
  echo "  - analytics_events (eventos de analytics)"
  echo "  - blog_posts (posts do blog)"
  echo ""
  echo "👤 Usuário admin criado:"
  echo "  Username: admin"
  echo "  Password: admin123"
  echo ""
  echo "⚠️  IMPORTANTE: Altere a senha após primeiro login!"
  echo ""
  echo "🎉 Setup concluído! Você pode iniciar a aplicação com:"
  echo "   npm run dev"
else
  echo ""
  echo "❌ Erro ao criar banco de dados"
  echo "Verifique a connection string e tente novamente"
  exit 1
fi
