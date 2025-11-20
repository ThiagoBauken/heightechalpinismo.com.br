#!/bin/bash

###############################################################################
# Script de Backup do Banco de Dados PostgreSQL
# Uso: ./scripts/backup-database.sh
###############################################################################

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Backup do Banco de Dados - Industrial Climbers          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Carregar variáveis de ambiente
if [ -f .env ]; then
  export $(cat .env | grep -v '^#' | xargs)
else
  echo -e "${RED}❌ Arquivo .env não encontrado!${NC}"
  exit 1
fi

# Verificar se DATABASE_URL está configurado
if [ -z "$DATABASE_URL" ]; then
  echo -e "${RED}❌ DATABASE_URL não configurado no .env${NC}"
  exit 1
fi

# Criar diretório de backups se não existir
BACKUP_DIR="./backups"
mkdir -p "$BACKUP_DIR"

# Nome do arquivo de backup (com timestamp)
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="$BACKUP_DIR/backup_$TIMESTAMP.sql"

echo -e "${YELLOW}📦 Iniciando backup...${NC}"
echo "   Database: $DATABASE_URL"
echo "   Arquivo: $BACKUP_FILE"
echo ""

# Executar backup usando pg_dump
# Nota: pg_dump deve estar instalado no sistema
if command -v pg_dump &> /dev/null; then
  pg_dump "$DATABASE_URL" > "$BACKUP_FILE"

  if [ $? -eq 0 ]; then
    # Comprimir backup
    gzip "$BACKUP_FILE"
    COMPRESSED_FILE="${BACKUP_FILE}.gz"

    # Obter tamanho do arquivo
    SIZE=$(du -h "$COMPRESSED_FILE" | cut -f1)

    echo -e "${GREEN}✅ Backup criado com sucesso!${NC}"
    echo "   Arquivo: $COMPRESSED_FILE"
    echo "   Tamanho: $SIZE"
    echo ""

    # Limpar backups antigos (manter apenas os últimos 7)
    echo -e "${YELLOW}🧹 Limpando backups antigos...${NC}"
    cd "$BACKUP_DIR"
    ls -t backup_*.sql.gz | tail -n +8 | xargs -r rm
    BACKUP_COUNT=$(ls -1 backup_*.sql.gz 2>/dev/null | wc -l)
    echo -e "${GREEN}   Mantendo $BACKUP_COUNT backups mais recentes${NC}"
    echo ""

    echo -e "${GREEN}✨ Backup concluído!${NC}"
  else
    echo -e "${RED}❌ Erro ao criar backup${NC}"
    rm -f "$BACKUP_FILE"
    exit 1
  fi
else
  echo -e "${RED}❌ pg_dump não encontrado!${NC}"
  echo "   Instale o PostgreSQL client tools:"
  echo "   - Ubuntu/Debian: sudo apt-get install postgresql-client"
  echo "   - macOS: brew install postgresql"
  echo "   - Windows: Baixe de https://www.postgresql.org/download/windows/"
  exit 1
fi

# Restaurar backup:
# gunzip -c backup_TIMESTAMP.sql.gz | psql $DATABASE_URL
