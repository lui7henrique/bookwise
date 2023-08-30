import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import NextNProgress from 'nextjs-progressbar'

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] })
export const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <main className={nunito.className}>
          <NextNProgress
            color="#50B2C0"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />

          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </SessionProvider>
  )
}
