import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRelativeUrl(url: URL, lang: Lang) {
  const [, ...pathParts] = url.pathname.split('/');
  const pathWithoutLang = pathParts.slice(1).join('/');
  return `/${lang}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`;
}

export function getAbsoluteUrl(url: URL, lang: Lang) {
  const [, ...pathParts] = url.pathname.split('/');
  const pathWithoutLang = pathParts.slice(1).join('/');
  return `${url.origin}/${lang}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`;
}
