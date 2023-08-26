import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { Profile } from 'src/lib/api'
import { formatThumbnail } from 'src/utils/formatThumbnail'
import { RatingStars } from '../RatingStars'

type ProfileCardProps = {
  rating: Profile['ratings'][0]
}

export const ProfileCard = ({ rating }: ProfileCardProps) => {
  const thumbnail = formatThumbnail(rating.book.cover_url)

  return (
    <div>
      <span>
        Há{' '}
        {formatDistanceToNow(new Date(rating.created_at), {
          locale: ptBR,
        })}
      </span>

      <div className="mt-2 flex w-full flex-col rounded-lg bg-gray-700 p-6">
        <div className="flex flex-row gap-6">
          <figure className="relative aspect-[6/9] w-[20%]">
            <Image src={thumbnail} className="" fill alt={rating.book.name} />
          </figure>

          <div className="flex w-[80%] flex-col justify-between">
            <div>
              <h6 className="text-lg font-bold">{rating.book.name}</h6>
              <span className="text-sm text-gray-400">
                {rating.book.author}
              </span>
            </div>

            <div className="flex">
              <RatingStars ratingAverage={rating.rate} />
            </div>
          </div>
        </div>

        <p className="mt-6">{rating.description}</p>
      </div>
    </div>
  )
}

export const ProfileCardSkeleton = () => {
  return (
    <div className="flex w-full flex-col">
      <span className="h-4 w-[20%] animate-pulse rounded-lg bg-gray-600" />

      <div className="mt-2 flex w-full flex-col rounded-lg bg-gray-700 p-6">
        <div className="flex flex-row gap-6">
          <figure className="relative aspect-[6/9] w-[20%] animate-pulse rounded-lg bg-gray-600" />

          <div className="flex w-[80%] flex-col justify-between">
            <div className="w-full">
              <div className="h-[18px] w-[50%] animate-pulse rounded-lg bg-gray-600" />

              <div className="mt-2 h-[16px] w-[30%] animate-pulse rounded-lg bg-gray-600" />
            </div>

            <div className="h-[16px] w-[25%] animate-pulse rounded-lg bg-gray-600" />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <div className="h-4 w-full animate-pulse rounded-lg bg-gray-600" />
          <div className="h-4 w-full animate-pulse rounded-lg bg-gray-600" />
          <div className="h-4 w-full animate-pulse rounded-lg bg-gray-600" />
        </div>
      </div>
    </div>
  )
}
