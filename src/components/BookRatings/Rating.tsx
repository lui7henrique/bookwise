import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
import { Rating as RatingType } from 'src/lib/api'
import { RatingStars } from '../RatingStars'
import { ptBR } from 'date-fns/locale'

type RatingProps = {
  rating: RatingType
}

export const Rating = (props: RatingProps) => {
  const { rating } = props

  return (
    <div className="rounded-lg bg-gray-700 p-6">
      <div className="flex gap-4">
        <figure className="relative flex aspect-square h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-vertical">
          <Image
            src={rating.user.avatar_url || ''}
            width={38}
            height={38}
            alt={rating.user.name}
            quality={100}
            className="h-[38px] w-[38px] overflow-hidden rounded-full object-cover"
          />
        </figure>

        <div className="flex w-full justify-between">
          <div className="leading-5">
            <h6 className="font-bold">{rating.user.name}</h6>

            <span className=" text-gray-400">
              Há{' '}
              {formatDistanceToNow(new Date(rating.created_at), {
                locale: ptBR,
              })}
            </span>
          </div>

          <RatingStars ratingAverage={rating.rate} />
        </div>
      </div>

      <p className="mt-5 text-gray-300">{rating.description}</p>
    </div>
  )
}

export const RatingSkeleton = () => {
  return (
    <div className="rounded-lg bg-gray-700 p-6">
      <div className="flex gap-4">
        <div className="aspect-square h-[40px] w-[40px] animate-pulse rounded-full bg-gray-600" />

        <div className="flex w-full justify-between">
          <div className="leading-5">
            <div className="h-4 w-36 animate-pulse rounded-lg bg-gray-600" />
            <div className="mt-2 h-4 w-24 animate-pulse rounded-lg bg-gray-600" />
          </div>

          <div className="h-4 w-[30%] animate-pulse rounded-lg bg-gray-600" />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <div className="h-4 w-full animate-pulse rounded-lg bg-gray-600" />
        <div className="h-4 w-full animate-pulse rounded-lg bg-gray-600" />
        <div className="h-4 w-full animate-pulse rounded-lg bg-gray-600" />
        <div className="h-4 w-full animate-pulse rounded-lg bg-gray-600" />
      </div>
    </div>
  )
}
