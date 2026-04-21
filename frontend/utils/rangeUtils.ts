// utils/rangeUtils.ts
'use client';

export const calculaPorcentagem = (valor: number, min: number, max: number) => {
  return ((valor - min) / (max - min)) * 100;
};

export const getSlider = (value: number, min: number, max: number) => {
  const percentage = calculaPorcentagem(value, min, max);
  return `linear-gradient(to right, #00A0A0 0%, #00A0A0 ${percentage}%, #f2f2f2 ${percentage}%, #f2f2f2 100%)`;
};

export const formatNumber = (num: number) => {
  return num.toString().padStart(2, '0');
};

export const getInputWidth = (value: number) => {
  const formattedValue = formatNumber(value);
  return `${formattedValue.length * 12 + 8}px`;
};

export const handleStartChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  duration: number,
  setStart: React.Dispatch<React.SetStateAction<number>>
) => {
  const value = e.target.value;
  const cleanValue = value.replace(/^0+/, '') || '0';
  const numValue = parseInt(cleanValue);

  if (!isNaN(numValue) && numValue >= 0 && numValue <= duration) {
    setStart(numValue);
  }
};