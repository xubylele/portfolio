import { getLangFromUrl } from './utils';

export function getCurrentLang(url: URL): string {
  return getLangFromUrl(url);
}

export function isCurrentLang(url: URL, lang: string): boolean {
  return getLangFromUrl(url) === lang;
}
