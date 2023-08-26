import { MagnifyingGlass } from '@phosphor-icons/react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { api } from 'src/lib/api'
import { formatThumbnail } from 'src/utils/formatThumbnail'
import { RatingStars } from '../RatingStars'
import { useState } from 'react'

export const ProfileBooks = () => {
  const [query, setQuery] = useState('')
  const { data } = useSession()

  const { data: profile } = useQuery(
    [data?.user.id],
    async () => await api.getProfile(String(data!.user.id)),
  )

  if (!data) {
    // TODO: SKELETON
    return <></>
  }

  const results = profile?.ratings.filter((rating) =>
    rating.book.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <>
      <div className="flex w-full items-center rounded-[4px] border border-gray-700 bg-transparent">
        <input
          type="text"
          className="h-full w-[calc(100%-48px)] bg-transparent py-[14px] pl-5 pr-12 text-sm text-gray-400 outline-none"
          placeholder="Buscar livro avaliado"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />

        <div className="flex aspect-square h-full items-center  justify-center">
          <MagnifyingGlass className="fill-gray-500" width={20} height={20} />
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {results?.map((rating) => {
          const thumbnail = formatThumbnail(rating.book.cover_url)

          return (
            <div key={rating.id}>
              <span>
                Há{' '}
                {formatDistanceToNow(new Date(rating.created_at), {
                  locale: ptBR,
                })}
              </span>

              <div className="mt-2 flex w-full flex-col rounded-lg border-2 border-transparent bg-gray-700 p-6 transition-all">
                <div className="flex flex-row gap-6">
                  <figure className="relative aspect-[6/9] w-[20%]">
                    <Image
                      src={thumbnail}
                      className=""
                      fill
                      alt={rating.book.name}
                    />
                  </figure>

                  <div className="flex w-[80%] flex-col justify-between">
                    <div>
                      <h6 className="text-lg font-bold">{rating.book.name}</h6>
                      <span className="text-sm text-gray-400">
                        {rating.book.author}
                      </span>
                    </div>

                    <div className="flex">
                      {' '}
                      <RatingStars ratingAverage={rating.rate} />
                    </div>
                  </div>
                </div>

                <p className="mt-6">{rating.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
