# Script de Backup do Banco de Dados PostgreSQL (Windows PowerShell)
# Uso: .\scripts\backup-database.ps1

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Backup do Banco de Dados - Industrial Climbers          ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Carregar variáveis de ambiente do .env
if (Test-Path .env) {
    Get-Content .env | ForEach-Object {
        if ($_ -match '^([^#][^=]+)=(.*)$') {
            [System.Environment]::SetEnvironmentVariable($matches[1], $matches[2])
        }
    }
} else {
    Write-Host "❌ Arquivo .env não encontrado!" -ForegroundColor Red
    exit 1
}

$DATABASE_URL = $env:DATABASE_URL
if (-not $DATABASE_URL) {
    Write-Host "❌ DATABASE_URL não configurado no .env" -ForegroundColor Red
    exit 1
}

# Criar diretório de backups
$BACKUP_DIR = ".\backups"
if (-not (Test-Path $BACKUP_DIR)) {
    New-Item -ItemType Directory -Path $BACKUP_DIR | Out-Null
}

# Nome do arquivo de backup
$TIMESTAMP = Get-Date -Format "yyyyMMdd_HHmmss"
$BACKUP_FILE = "$BACKUP_DIR\backup_$TIMESTAMP.sql"

Write-Host "📦 Iniciando backup..." -ForegroundColor Yellow
Write-Host "   Database: $DATABASE_URL"
Write-Host "   Arquivo: $BACKUP_FILE"
Write-Host ""

# Verificar se pg_dump está disponível
if (Get-Command pg_dump -ErrorAction SilentlyContinue) {
    # Executar backup
    pg_dump $DATABASE_URL | Out-File -FilePath $BACKUP_FILE -Encoding UTF8

    if ($LASTEXITCODE -eq 0) {
        # Comprimir backup
        Compress-Archive -Path $BACKUP_FILE -DestinationPath "$BACKUP_FILE.zip" -Force
        Remove-Item $BACKUP_FILE

        $COMPRESSED_FILE = "$BACKUP_FILE.zip"
        $SIZE = (Get-Item $COMPRESSED_FILE).Length / 1MB
        $SIZE_FORMATTED = "{0:N2} MB" -f $SIZE

        Write-Host "✅ Backup criado com sucesso!" -ForegroundColor Green
        Write-Host "   Arquivo: $COMPRESSED_FILE"
        Write-Host "   Tamanho: $SIZE_FORMATTED"
        Write-Host ""

        # Limpar backups antigos (manter apenas os últimos 7)
        Write-Host "🧹 Limpando backups antigos..." -ForegroundColor Yellow
        Get-ChildItem $BACKUP_DIR -Filter "backup_*.sql.zip" |
            Sort-Object LastWriteTime -Descending |
            Select-Object -Skip 7 |
            Remove-Item

        $BACKUP_COUNT = (Get-ChildItem $BACKUP_DIR -Filter "backup_*.sql.zip").Count
        Write-Host "   Mantendo $BACKUP_COUNT backups mais recentes" -ForegroundColor Green
        Write-Host ""

        Write-Host "✨ Backup concluído!" -ForegroundColor Green
    } else {
        Write-Host "❌ Erro ao criar backup" -ForegroundColor Red
        if (Test-Path $BACKUP_FILE) {
            Remove-Item $BACKUP_FILE
        }
        exit 1
    }
} else {
    Write-Host "❌ pg_dump não encontrado!" -ForegroundColor Red
    Write-Host "   Instale o PostgreSQL client tools de:"
    Write-Host "   https://www.postgresql.org/download/windows/"
    exit 1
}

# Restaurar backup:
# Expand-Archive -Path backup_TIMESTAMP.sql.zip -DestinationPath temp
# Get-Content temp\backup_TIMESTAMP.sql | psql $env:DATABASE_URL
