import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Poppins , Anek_Bangla} from 'next/font/google'

const poppins = Poppins({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
})

const AnekBangla = Anek_Bangla({
  weight: ['300','400','500','600','700','800'],
  subsets: ['bengali']
})

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html className={`${poppins.className} ${AnekBangla.className}`} lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}