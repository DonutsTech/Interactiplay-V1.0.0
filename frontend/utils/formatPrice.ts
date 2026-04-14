/**
 * Formata número para moeda brasileira (R$)
 * @param value - Valor numérico a ser formatado
 * @returns String formatada em formato de moeda brasileira
 * @example formatPrice(1234.56) // "R$ 1.234,56"
 */
export const formatPrice = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

/**
 * Formata número para moeda brasileira sem o símbolo R$
 * @param value - Valor numérico a ser formatado
 * @returns String formatada sem o símbolo da moeda
 * @example formatPriceWithoutSymbol(1234.56) // "1.234,56"
 */
export const formatPriceWithoutSymbol = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
