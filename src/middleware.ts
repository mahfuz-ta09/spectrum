import {  NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode'
import createIntlMiddleware from 'next-intl/middleware';

export async function middleware(request: NextRequest) {
    const localeMapping = {
        'en':'en',
        'bn':'bn'
    };
    let modifiedRequest = request;

    const token = request.cookies.get('accessToken')?.value;
    let user

    if(token) user = await jwtDecode(token)


    for (const [srcPath, targetPath] of Object.entries(localeMapping)) {
        if (request.nextUrl.pathname.startsWith(`/${srcPath}`)) {
            const remainingPath = request.nextUrl.pathname.replace(`/${srcPath}`, '');
            let newUrl
            
            if(!user?.userProfile?.email && remainingPath==='/Dashboard'){
                newUrl = new URL(`/${targetPath}/login`, request.url);
            }else if(user?.userProfile?.email && (remainingPath==='/login' || remainingPath==='/signup')){
                newUrl = new URL(`/${targetPath}`, request.url);
            }else{
                newUrl = new URL(`/${targetPath}${remainingPath}`, request.url);
            }
            modifiedRequest = new NextRequest(newUrl, request);
            break;
        }
    }

    const locales = Object.values(localeMapping);

    const defaultLocale = modifiedRequest.headers.get('x-default-locale') || 'en';
    const handleI18nRouting = createIntlMiddleware({
        locales,
        defaultLocale
    });

    const response = handleI18nRouting(modifiedRequest);
    response.headers.set('x-default-locale', defaultLocale);
    return response;
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};

