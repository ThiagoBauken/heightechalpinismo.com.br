import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Cleanup após cada teste
afterEach(() => {
  cleanup();
});

// Mock de variáveis de ambiente para testes
vi.mock('import.meta.env', () => ({
  VITE_GA_TRACKING_ID: 'G-TEST123',
  VITE_COMPANY_NAME: 'Test Company',
  VITE_COMPANY_EMAIL: 'test@example.com',
}));
