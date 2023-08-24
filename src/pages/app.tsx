import { Sidebar } from 'src/components/Sidebar'

import { TrendUp, CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { BookCard } from 'src/components/BookCard'
import { RatingCard } from 'src/components/RatingCard'

export default function App() {
  return (
    <div className="flex h-screen w-screen gap-5 p-5">
      <Sidebar />

      <div className="max-h-[calc(100vh - 16px))] flex w-full overflow-y-scroll px-24 pt-14">
        <div className="w-full max-w-[560px]">
          <div className="flex items-center gap-3">
            <TrendUp className="fill-green-100" width={32} height={32} />
            <h1 className="text-2xl font-bold text-gray-100">Início</h1>
          </div>

          <div className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-gray-100">Sua última leitura</h3>

              <Link
                className="flex items-center gap-2 text-purple-100"
                href="/profile"
              >
                Ver todas{' '}
                <CaretRight className="fill-purple-100" weight="bold" />
              </Link>
            </div>

            <BookCard />
          </div>

          <div className="mb-10 mt-10">
            <h3>Avaliações mais recentes</h3>

            <div className="mt-4 flex flex-col gap-3">
              <RatingCard />
              <RatingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
