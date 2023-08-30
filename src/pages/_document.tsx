import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </Head>

      <body className="overflow-x-hidden bg-gray-800 text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
