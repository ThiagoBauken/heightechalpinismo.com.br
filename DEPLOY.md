# Guia de Deploy no Easypanel

Este guia fornece instruções detalhadas para fazer deploy da aplicação Industrial Climbers no Easypanel.

## Pré-requisitos

1. Conta no [Easypanel](https://easypanel.io/)
2. Repositório Git do projeto (GitHub, GitLab, ou Bitbucket)
3. Banco de dados PostgreSQL (pode ser criado no próprio Easypanel)

## Passos para Deploy

### 1. Configurar Banco de Dados

No Easypanel:
1. Vá para **Services** > **Create Service**
2. Selecione **PostgreSQL**
3. Configure:
   - Nome: `industrial-climbers-db`
   - Versão: Latest
   - Database: `industrial_climbers`
   - Username: (anote o usuário)
   - Password: (anote a senha)
4. Clique em **Create**
5. Aguarde o banco estar **Running**
6. Copie a **Connection String** (formato: `postgresql://user:pass@host:5432/db`)

### 2. Criar Aplicação

1. Vá para **Apps** > **Create App**
2. Selecione **From Git Repository**
3. Conecte seu repositório Git
4. Configure:
   - **Name**: `industrial-climbers`
   - **Source**: Selecione seu repositório
   - **Branch**: `main`
   - **Build Type**: `Dockerfile`

### 3. Configurar Variáveis de Ambiente

Adicione as seguintes variáveis de ambiente:

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/industrial_climbers

# Node Environment
NODE_ENV=production

# Session Secret (gere uma chave aleatória segura)
SESSION_SECRET=sua-chave-secreta-aqui-use-um-gerador

# Port (Easypanel usa porta 5000 por padrão)
PORT=5000
```

**Importante**: Substitua os valores acima pelos seus dados reais:
- `DATABASE_URL`: Use a connection string do banco criado no passo 1
- `SESSION_SECRET`: Gere uma chave segura (pode usar: `openssl rand -base64 32`)

### 4. Configurar Build

O Dockerfile já está configurado no projeto. O Easypanel irá:
1. Detectar automaticamente o Dockerfile
2. Fazer build da aplicação em multi-stage
3. Criar uma imagem otimizada para produção

### 5. Configurar Porta e Domínio

1. **Porta**: Configure para `5000` (já definida no Dockerfile)
2. **Domínio**:
   - Use o domínio fornecido pelo Easypanel (ex: `app-name.easypanel.host`)
   - Ou configure um domínio customizado nas configurações

### 6. Deploy

1. Clique em **Deploy**
2. Aguarde o build completar (pode levar alguns minutos)
3. Verifique os logs para garantir que não há erros
4. Acesse o domínio configurado

### 7. Executar Migrações do Banco

Após o primeiro deploy, você precisa criar as tabelas no banco:

1. No Easypanel, vá para **Terminal** da sua aplicação
2. Execute:
```bash
npm run db:push
```

Isso criará todas as tabelas necessárias no banco de dados.

## Estrutura Docker

### Dockerfile
O projeto usa uma build multi-stage para otimizar o tamanho da imagem:

1. **Build Stage**: Compila o código TypeScript
2. **Production Stage**: Cria imagem final apenas com código compilado e dependências de produção

### .dockerignore
Ignora arquivos desnecessários para reduzir o tamanho do build:
- `node_modules` (reinstalados no container)
- `.git`, `.env`, logs, etc.

## Monitoramento

No Easypanel você pode:
- Ver logs em tempo real
- Monitorar uso de recursos (CPU, RAM)
- Configurar auto-scaling
- Ver métricas de tráfego

## Troubleshooting

### Erro de Build
- Verifique os logs de build
- Confirme que todas as dependências estão no `package.json`
- Verifique se o Node version é compatível (usa Node 20)

### Erro de Conexão com Banco
- Verifique a `DATABASE_URL`
- Confirme que o banco está rodando
- Teste a conexão no terminal do Easypanel

### Aplicação não inicia
- Verifique os logs da aplicação
- Confirme que todas as variáveis de ambiente estão configuradas
- Verifique se a porta 5000 está correta

## Atualizações

Para atualizar a aplicação:
1. Faça push das alterações para o repositório Git
2. No Easypanel, clique em **Rebuild**
3. Ou configure **Auto Deploy** para deploy automático

## Backup

Configure backups automáticos do banco de dados:
1. Vá para o serviço PostgreSQL
2. Configure **Automated Backups**
3. Escolha frequência (diário recomendado)

## Serviços Incluídos

O site agora inclui todos os 12 serviços:

1. ✅ Lavação predial
2. ✅ Instalação de pontos de ancoragem (com laudo e ART)
3. ✅ Restauração de fachadas (pintura, pastilha, reboco, etc)
4. ✅ Instalação de ACMs
5. ✅ Limpeza fina de vidros
6. ✅ Restauração de vidros
7. ✅ Içamento de cargas
8. ✅ Instalação de banners/letra caixa
9. ✅ Instalação e manutenção de LEDs
10. ✅ Vedação de fachadas
11. ✅ Pintura industrial
12. ✅ Limpeza de silos

## Suporte

Para mais informações sobre Easypanel:
- [Documentação oficial](https://easypanel.io/docs)
- [Discord da comunidade](https://discord.gg/easypanel)
