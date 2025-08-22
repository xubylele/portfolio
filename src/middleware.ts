import { defineMiddleware } from 'astro:middleware';
import { defaultLang } from './i18n/ui';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  if (pathname === '/') {
    return context.redirect(`/${defaultLang}`);
  }

  return next();
});
