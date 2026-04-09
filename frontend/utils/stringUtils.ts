import { maxLength, minLength } from "zod";

export interface StringRule {
  pattern: RegExp;
  message: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  trim?: boolean;
  normalizeSpaces?: boolean;
};

export interface ValidationResult {
  isValid: boolean;
  value: string;
  message?: string;
};

export const normalizeSpaces = (value: string): string => {
  return value.replace(/\s+/g, ' ').trim();
};

export const sanitizeByRegex = (value: string, disallowedRegex: RegExp): string => {
  return value.replace(disallowedRegex, '');
};

export const validateString = (input: string, rules: StringRule): ValidationResult => {
  let value = input ?? '';

  if (rules.trim ?? true) {
    value = value.trim();
  }

  if (rules.normalizeSpaces) {
    value = normalizeSpaces(value);
  }

  if ((rules.required ?? true) && value.length === 0) {
    return { isValid: false, value, message: 'Campo obrigatório' };
  }

  if (rules.minLength && value.length < rules.minLength) {
    return { isValid: false, value, message: `Mínimo de ${rules.minLength} caracteres` };
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return { isValid: false, value, message: `Máximo de ${rules.maxLength} caracteres` };
  }

  return {isValid: true, value};

}

export const STRING_RULES = {
  personName: {
    pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/,
    message: "Use apenas letras, espaços e apóstrofos",
    required: true,
    minLength: 3,
    maxLength: 255,
    trim: true,
    normalizeSpaces: true,
  } as StringRule
};