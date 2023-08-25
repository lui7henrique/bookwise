import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider, QueryClient } from 'react-query'

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] })
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <main className={nunito.className}>
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </SessionProvider>
  )
}
