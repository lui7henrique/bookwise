import Image from 'next/image'
import { LatestRating } from 'src/lib/api'
import { formatThumbnail } from 'src/utils/formatThumbnail'
import { RatingStars } from '../RatingStars'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type RatingCardProps = {
  rating: LatestRating
}

export const RatingCard = (props: RatingCardProps) => {
  const {
    rating: { book, description, user, rate, created_at: createdAt },
  } = props

  const thumbnail = formatThumbnail(book.cover_url)

  return (
    <div className="flex w-full flex-col gap-6 rounded-lg border-2 border-transparent bg-gray-700 p-6 transition-all hover:border-gray-600">
      <div className="flex w-full justify-between">
        <div className="flex gap-4">
          <figure className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-500">
            <Image src={user.avatar_url!} fill alt="" />
          </figure>

          <div>
            <h5 className="text-gray-100">{user.name}</h5>
            <h6 className="text-gray-400">
              Há{' '}
              {formatDistanceToNow(new Date(createdAt), {
                locale: ptBR,
              })}
            </h6>
          </div>
        </div>

        <RatingStars ratingAverage={rate} />
      </div>

      <div className="flex gap-5">
        <Image
          src={thumbnail}
          width={108}
          height={152}
          alt=""
          quality={100}
          className="rounded-md object-cover"
        />

        <div className="flex w-full flex-col justify-between">
          <div>
            <h5 className="font-bold text-gray-100">{book.name}</h5>
            <h6 className="mt-0 text-sm text-gray-400">{book.author}</h6>
          </div>

          <p className="mt-5 line-clamp-3 text-sm text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export const RatingCardSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-lg border-2 border-transparent bg-gray-700 p-6 transition-all">
      <div className="flex w-full justify-between">
        <div className="flex gap-4">
          <figure className="relative h-12 w-12 animate-pulse overflow-hidden rounded-full border border-gray-500 bg-gray-600" />

          <div className="">
            <div className="h-4 w-32 animate-pulse rounded-lg bg-gray-600" />

            <div className="mt-2 h-3 w-24 animate-pulse rounded-lg bg-gray-600" />
          </div>
        </div>
      </div>

      <div className="flex w-full gap-5">
        <figure className=" relative h-[152px] w-[30%] animate-pulse overflow-hidden rounded-md  bg-gray-600" />

        <div className="flex w-full flex-col justify-between">
          <div>
            <div className="mt-2 h-4 w-[50%] animate-pulse rounded-lg bg-gray-600" />

            <div className="mt-2 h-3 w-[30%] animate-pulse rounded-lg bg-gray-600" />
          </div>

          <div>
            <div className="mt-2 h-3 w-full animate-pulse rounded-lg bg-gray-600" />
            <div className="mt-2 h-3 w-full animate-pulse rounded-lg bg-gray-600" />
            <div className="mt-2 h-3 w-full animate-pulse rounded-lg bg-gray-600" />
          </div>
        </div>
        {/* 

        <div className="flex w-full flex-col justify-between">
          <div>
            <h5 className="font-bold text-gray-100">{book.name}</h5>
            <h6 className="mt-0 text-sm text-gray-400">{book.author}</h6>
          </div>

          <p className="mt-5 line-clamp-3 text-sm text-gray-300">
            {description}
          </p>
        </div> */}
      </div>
    </div>
  )
}
