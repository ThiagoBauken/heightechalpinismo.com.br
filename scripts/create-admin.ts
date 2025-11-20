#!/usr/bin/env tsx
/**
 * Script para criar um usuário admin no banco de dados
 * Uso: npm run create-admin
 */

import "dotenv/config";
import { db } from "../server/db";
import { users } from "../shared/schema";
import bcrypt from "bcryptjs";
import * as readline from 'readline';
import { eq } from "drizzle-orm";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function createAdmin() {
  console.log('╔═══════════════════════════════════════════════╗');
  console.log('║   Criar Usuário Admin - Industrial Climbers  ║');
  console.log('╚═══════════════════════════════════════════════╝\n');

  try {
    // Verificar conexão com banco de dados
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL não configurado no arquivo .env');
      console.error('   Configure o banco de dados antes de criar um admin.\n');
      process.exit(1);
    }

    // Solicitar dados do usuário
    const username = await question('Username: ');

    if (!username || username.length < 3) {
      console.error('❌ Username deve ter pelo menos 3 caracteres');
      rl.close();
      process.exit(1);
    }

    // Verificar se usuário já existe
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1);

    if (existingUser && existingUser.length > 0) {
      console.error(`❌ Usuário "${username}" já existe!`);
      const update = await question('Deseja atualizar a senha? (s/n): ');

      if (update.toLowerCase() !== 's') {
        console.log('Operação cancelada.');
        rl.close();
        process.exit(0);
      }
    }

    const password = await question('Password (mínimo 6 caracteres): ');

    if (!password || password.length < 6) {
      console.error('❌ Senha deve ter pelo menos 6 caracteres');
      rl.close();
      process.exit(1);
    }

    const confirmPassword = await question('Confirme a password: ');

    if (password !== confirmPassword) {
      console.error('❌ As senhas não coincidem');
      rl.close();
      process.exit(1);
    }

    // Hash da senha
    console.log('\n🔐 Gerando hash seguro da senha...');
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserir ou atualizar no banco
    if (existingUser && existingUser.length > 0) {
      await db
        .update(users)
        .set({ password: hashedPassword })
        .where(eq(users.username, username));

      console.log(`\n✅ Senha do usuário "${username}" atualizada com sucesso!`);
    } else {
      await db.insert(users).values({
        username,
        password: hashedPassword,
      });

      console.log(`\n✅ Usuário admin "${username}" criado com sucesso!`);
    }

    console.log('\n📝 Credenciais de login:');
    console.log('   Username:', username);
    console.log('   Password:', '*'.repeat(password.length));
    console.log('\n⚠️  Guarde essas credenciais em local seguro!\n');

  } catch (error) {
    console.error('\n❌ Erro ao criar usuário admin:', error);
    if (error instanceof Error) {
      console.error('   Detalhes:', error.message);
    }
    process.exit(1);
  } finally {
    rl.close();
    process.exit(0);
  }
}

// Executar
createAdmin();
