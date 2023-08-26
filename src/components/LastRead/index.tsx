import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { ReadCard, ReadCardSkeleton } from '../ReadCard'
import { useQuery } from 'react-query'
import { api } from 'src/lib/api'

export const LastRead = () => {
  const { data, isLoading } = useQuery(
    ['last-read'],
    async () => await api.getLastRead(),
  )

  if (isLoading || !data) {
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
