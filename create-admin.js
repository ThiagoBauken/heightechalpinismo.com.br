// Script para criar usuário admin
import { Pool } from '@neondatabase/serverless';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('❌ Erro: DATABASE_URL não está definida no arquivo .env');
  process.exit(1);
}

async function createAdmin() {
  const pool = new Pool({ connectionString: DATABASE_URL });

  try {
    console.log('🔐 Criando usuário admin...');

    // Gerar hash da senha
    const password = 'admin123';
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserir usuário no banco
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) ON CONFLICT (username) DO UPDATE SET password = $2 RETURNING id, username',
      ['admin', hashedPassword]
    );

    console.log('✅ Usuário admin criado com sucesso!');
    console.log('');
    console.log('📋 Credenciais de acesso:');
    console.log('   Username: admin');
    console.log('   Password: admin123');
    console.log('');
    console.log('⚠️  IMPORTANTE: Altere a senha após primeiro login!');
    console.log('');

  } catch (error) {
    console.error('❌ Erro ao criar usuário admin:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

createAdmin();
