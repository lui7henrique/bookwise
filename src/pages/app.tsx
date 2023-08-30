import { TrendUp } from '@phosphor-icons/react'

import { LastRead } from 'src/components/LastRead'
import { MostRecentRatings } from 'src/components/MostRecentViews'
import { PopularBooks } from 'src/components/PopularBooks'
import { Layout } from 'src/components/Layout'
import Head from 'next/head'

export default function App() {
  return (
    <>
      <Head>
        <title>BookWise | Início</title>
      </Head>

      <Layout.Root>
        <Layout.Sidebar />

        <Layout.Container>
          <Layout.Header>
            <Layout.HeaderIcon icon={TrendUp} />
            <Layout.HeaderTitle>Início</Layout.HeaderTitle>
          </Layout.Header>

          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="flex w-full flex-col gap-10 lg:max-w-[560px]">
              <LastRead />
              <MostRecentRatings />
            </div>

            <div className="w-full lg:max-w-[324px]">
              <PopularBooks />
            </div>
          </div>
        </Layout.Container>
      </Layout.Root>
    </>
  )
}
