import { Binoculars, Book, CaretRight, Folder } from '@phosphor-icons/react'
import Link from 'next/link'
import { ReadCard, ReadCardSkeleton } from '../ReadCard'
import { useQuery } from 'react-query'
import { api } from 'src/lib/api'

export const LastRead = () => {
  const { data, isLoading } = useQuery(
    ['last-read'],
    async () => await api.getLastRead(),
  )

  if (isLoading) {
    return (
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-gray-100">Sua última leitura</h3>

          <Link
            className="flex items-center gap-2 text-purple-100"
            href="/profile"
          >
            Ver todas <CaretRight className="fill-purple-100" weight="bold" />
          </Link>
        </div>

        <ReadCardSkeleton />
      </div>
    )
  }

  if (!data) {
    return (
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-gray-100">Sua última leitura</h3>

          <Link
            className="flex items-center gap-2 text-purple-100"
            href="/profile"
          >
            Ver todas <CaretRight className="fill-purple-100" weight="bold" />
          </Link>
        </div>

        <Link href="/explore">
          <div className="hover: flex w-full cursor-pointer flex-col  items-center justify-center gap-2 rounded-lg border-2  border-gray-500 bg-gray-600 p-6 transition-all">
            <Book width={64} height={64} className="fill-gray-400" />

            <p className="text-sm text-gray-400">
              Nenhum livro foi lido recentemente
            </p>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-gray-100">Sua última leitura</h3>

        <Link
          className="flex items-center gap-2 text-purple-100"
          href="/profile"
        >
          Ver todas <CaretRight className="fill-purple-100" weight="bold" />
        </Link>
      </div>

      <ReadCard read={data} />
    </div>
  )
}
