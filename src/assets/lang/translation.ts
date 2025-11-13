import fr from './fr.json';
import en from './en.json';

export const translations = {
    fr,
    en
} as const;

export type Lang = keyof typeof translations;

export type CurrentLang = typeof fr;