import { defineMiddleware } from 'astro:middleware';
export const onRequest = defineMiddleware((ctx, next) => {
  if (ctx.url.pathname === '/') return ctx.redirect('/es', 308);
  return next();
});