import { useQuery } from 'react-query'
import { RatingCard, RatingCardSkeleton } from '../RatingCard'
import { api } from 'src/lib/api'
import Link from 'next/link'
import { BookBookmark } from '@phosphor-icons/react'

export const mostRecentRatingsQueryKey = ['most-recent-ratings']

export const MostRecentRatings = () => {
  const { data, isLoading } = useQuery(
    mostRecentRatingsQueryKey,
    async () => await api.getLatestRatings(),
  )

  if (isLoading) {
    return (
      <div>
        <h3>Avaliações mais recentes</h3>

        <div className="mt-4 flex flex-col gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <RatingCardSkeleton key={index} />
          ))}
        </div>
      </div>
    )
  }

  if (!data?.length) {
    return (
      <div>
        <h3>Avaliações mais recentes</h3>

        <Link href="/explore">
          <div className="hover: mt-4 flex w-full cursor-pointer  flex-col items-center justify-center gap-2 rounded-lg   bg-gray-700 p-6 transition-all">
            <BookBookmark width={64} height={64} className="fill-gray-400" />

            <p className="text-sm text-gray-400">Não há nenhuma avaliação</p>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h3>Avaliações mais recentes</h3>

      <div className="mt-4 flex flex-col gap-3">
        {data.map((rating) => {
          return <RatingCard rating={rating} key={rating.id} />
        })}
      </div>
    </div>
  )
}
