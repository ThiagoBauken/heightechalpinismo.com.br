import nodemailer from 'nodemailer';
import logger from '../logger';

// Configuração do transporter de email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true para 465, false para outras portas
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verificar conexão com servidor SMTP (apenas em produção)
if (process.env.NODE_ENV === 'production' && process.env.SMTP_USER) {
  transporter.verify((error: Error | null, success: true) => {
    if (error) {
      logger.error('SMTP connection error', error);
    } else {
      logger.info('SMTP server is ready to send emails');
    }
  });
}

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Enviar email genérico
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  // Se SMTP não estiver configurado, apenas logar
  if (!process.env.SMTP_USER) {
    logger.warn('Email não enviado - SMTP não configurado', {
      to: options.to,
      subject: options.subject,
    });
    return false;
  }

  try {
    const info = await transporter.sendMail({
      from: `"${process.env.VITE_COMPANY_NAME || 'Industrial Climbers'}" <${process.env.SMTP_USER}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });

    logger.info('Email sent successfully', {
      to: options.to,
      subject: options.subject,
      messageId: info.messageId,
    });

    return true;
  } catch (error) {
    logger.error('Error sending email', {
      to: options.to,
      subject: options.subject,
      error,
    });
    return false;
  }
}

// Email de notificação de novo contato
export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  message: string;
}): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.VITE_COMPANY_EMAIL;

  if (!adminEmail) {
    logger.warn('Admin email not configured');
    return false;
  }

  const html = `
    <h2>Novo Contato Recebido</h2>
    <p>Um novo contato foi recebido através do site:</p>
    <ul>
      <li><strong>Nome:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Telefone:</strong> ${data.phone}</li>
      <li><strong>Serviço:</strong> ${data.service}</li>
      <li><strong>Cidade:</strong> ${data.city}</li>
      <li><strong>Mensagem:</strong> ${data.message}</li>
    </ul>
    <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
  `;

  const text = `
Novo Contato Recebido

Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone}
Serviço: ${data.service}
Cidade: ${data.city}
Mensagem: ${data.message}

Data: ${new Date().toLocaleString('pt-BR')}
  `;

  return sendEmail({
    to: adminEmail,
    subject: `Novo Contato - ${data.name}`,
    html,
    text,
  });
}

// Email de notificação de novo orçamento
export async function sendQuoteNotification(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  projectDescription: string;
  buildingType?: string;
  buildingHeight?: string;
  urgency?: string;
}): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.VITE_COMPANY_EMAIL;

  if (!adminEmail) {
    logger.warn('Admin email not configured');
    return false;
  }

  const html = `
    <h2>Nova Solicitação de Orçamento</h2>
    <p>Uma nova solicitação de orçamento foi recebida:</p>
    <ul>
      <li><strong>Nome:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Telefone:</strong> ${data.phone}</li>
      <li><strong>Serviço:</strong> ${data.service}</li>
      <li><strong>Cidade:</strong> ${data.city}</li>
      <li><strong>Descrição:</strong> ${data.projectDescription}</li>
      ${data.buildingType ? `<li><strong>Tipo de Prédio:</strong> ${data.buildingType}</li>` : ''}
      ${data.buildingHeight ? `<li><strong>Altura:</strong> ${data.buildingHeight}</li>` : ''}
      ${data.urgency ? `<li><strong>Urgência:</strong> ${data.urgency}</li>` : ''}
    </ul>
    <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
  `;

  const text = `
Nova Solicitação de Orçamento

Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone}
Serviço: ${data.service}
Cidade: ${data.city}
Descrição: ${data.projectDescription}
${data.buildingType ? `Tipo de Prédio: ${data.buildingType}` : ''}
${data.buildingHeight ? `Altura: ${data.buildingHeight}` : ''}
${data.urgency ? `Urgência: ${data.urgency}` : ''}

Data: ${new Date().toLocaleString('pt-BR')}
  `;

  return sendEmail({
    to: adminEmail,
    subject: `Nova Solicitação de Orçamento - ${data.name}`,
    html,
    text,
  });
}

// Email de confirmação para o usuário (contato)
export async function sendContactConfirmation(email: string, name: string): Promise<boolean> {
  const html = `
    <h2>Obrigado pelo contato!</h2>
    <p>Olá ${name},</p>
    <p>Recebemos sua mensagem e nossa equipe entrará em contato em breve.</p>
    <p>Agradecemos o interesse em nossos serviços!</p>
    <br>
    <p>Atenciosamente,</p>
    <p><strong>${process.env.VITE_COMPANY_NAME || 'Industrial Climbers'}</strong></p>
    <p>Telefone: ${process.env.VITE_COMPANY_PHONE || ''}</p>
    <p>Email: ${process.env.VITE_COMPANY_EMAIL || ''}</p>
  `;

  const text = `
Obrigado pelo contato!

Olá ${name},

Recebemos sua mensagem e nossa equipe entrará em contato em breve.
Agradecemos o interesse em nossos serviços!

Atenciosamente,
${process.env.VITE_COMPANY_NAME || 'Industrial Climbers'}
Telefone: ${process.env.VITE_COMPANY_PHONE || ''}
Email: ${process.env.VITE_COMPANY_EMAIL || ''}
  `;

  return sendEmail({
    to: email,
    subject: 'Recebemos seu contato!',
    html,
    text,
  });
}

// Email de confirmação para o usuário (orçamento)
export async function sendQuoteConfirmation(email: string, name: string): Promise<boolean> {
  const html = `
    <h2>Orçamento Solicitado com Sucesso!</h2>
    <p>Olá ${name},</p>
    <p>Recebemos sua solicitação de orçamento e nossa equipe está analisando as informações.</p>
    <p>Em breve entraremos em contato com uma proposta personalizada para seu projeto.</p>
    <br>
    <p>Atenciosamente,</p>
    <p><strong>${process.env.VITE_COMPANY_NAME || 'Industrial Climbers'}</strong></p>
    <p>Telefone: ${process.env.VITE_COMPANY_PHONE || ''}</p>
    <p>Email: ${process.env.VITE_COMPANY_EMAIL || ''}</p>
  `;

  const text = `
Orçamento Solicitado com Sucesso!

Olá ${name},

Recebemos sua solicitação de orçamento e nossa equipe está analisando as informações.
Em breve entraremos em contato com uma proposta personalizada para seu projeto.

Atenciosamente,
${process.env.VITE_COMPANY_NAME || 'Industrial Climbers'}
Telefone: ${process.env.VITE_COMPANY_PHONE || ''}
Email: ${process.env.VITE_COMPANY_EMAIL || ''}
  `;

  return sendEmail({
    to: email,
    subject: 'Orçamento Solicitado!',
    html,
    text,
  });
}

export default {
  sendEmail,
  sendContactNotification,
  sendQuoteNotification,
  sendContactConfirmation,
  sendQuoteConfirmation,
};
