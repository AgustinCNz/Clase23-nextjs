import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'de', 'br'],
  defaultLocale: 'es'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'] //Esto es una expresion regular
};