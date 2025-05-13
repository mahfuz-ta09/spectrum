import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Poppins , Anek_Bangla} from 'next/font/google'
import { Bounce, ToastContainer } from 'react-toastify'
import './globals.css'


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
    <html className={locale==='en'?`${poppins.className}` : `${AnekBangla.className}`} lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}