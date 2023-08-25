import { TrendUp } from '@phosphor-icons/react'

import { LastRead } from 'src/components/LastRead'
import { MostRecentRatings } from 'src/components/MostRecentViews'
import { PopularBooks } from 'src/components/PopularBooks'
import { useSession } from 'next-auth/react'
import { Layout } from 'src/components/Layout'

export default function App() {
  const { status } = useSession()

  return (
    <Layout.Root>
      <Layout.Sidebar />

      <Layout.Container>
        <Layout.Header>
          <Layout.HeaderIcon icon={TrendUp} />
          <Layout.HeaderTitle>Início</Layout.HeaderTitle>
        </Layout.Header>

        <div className="flex gap-16">
          <div className="flex w-full max-w-[560px] flex-col gap-10">
            {status === 'authenticated' && <LastRead />}
            <MostRecentRatings />
          </div>

          <div className="w-full max-w-[324px]">
            <PopularBooks />
          </div>
        </div>
      </Layout.Container>
    </Layout.Root>
  )
}
