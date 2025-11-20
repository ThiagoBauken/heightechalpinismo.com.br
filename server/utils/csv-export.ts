/**
 * Utilitários para exportar dados para CSV
 */

export function objectToCSV(data: any[]): string {
  if (!data || data.length === 0) {
    return '';
  }

  // Extrair headers do primeiro objeto
  const headers = Object.keys(data[0]);

  // Criar linha de headers
  const headerRow = headers.map(escapeCSV).join(',');

  // Criar linhas de dados
  const dataRows = data.map(row => {
    return headers.map(header => {
      const value = row[header];
      return escapeCSV(formatValue(value));
    }).join(',');
  });

  return [headerRow, ...dataRows].join('\n');
}

function escapeCSV(value: string): string {
  if (value === null || value === undefined) {
    return '';
  }

  const stringValue = String(value);

  // Se contém vírgula, aspas ou quebra de linha, envolver em aspas
  if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }

  return stringValue;
}

function formatValue(value: any): string {
  if (value === null || value === undefined) {
    return '';
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
}

export function sendCSVResponse(res: any, filename: string, data: any[]) {
  const csv = objectToCSV(data);

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.setHeader('Cache-Control', 'no-cache');

  // Add BOM for Excel UTF-8 support
  res.write('\uFEFF');
  res.write(csv);
  res.end();
}
