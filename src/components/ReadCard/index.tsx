import Image from 'next/image'
import { Read } from 'src/lib/api'
import { RatingStars } from '../RatingStars'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { formatThumbnail } from 'src/utils/formatThumbnail'

type ReadCardProps = {
  read: Read
}

export const ReadCard = (props: ReadCardProps) => {
  const {
    read: { book, rate, description, created_at: createdAt },
  } = props

  const thumbnail = formatThumbnail(book.cover_url)

  return (
    <div className="flex w-full gap-6 rounded-lg border-2 border-transparent bg-gray-600 p-6 transition-all hover:border-gray-500">
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
          <div className="flex items-center justify-between">
            <span className="text-gray-300">
              Há{' '}
              {formatDistanceToNow(new Date(createdAt), {
                locale: ptBR,
              })}
            </span>

            <RatingStars ratingAverage={rate} />
          </div>

          <h4 className="mt-3 font-bold text-gray-100">{book.name}</h4>
          <h5 className="mt-0 text-sm text-gray-400">{book.author}</h5>
        </div>

        <p className="mt-6 line-clamp-3 text-sm text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export const ReadCardSkeleton = () => {
  return (
    <div className="flex w-full gap-6 rounded-lg border-2 border-transparent bg-gray-600 p-6 transition-all hover:border-gray-500">
      <div className="animate-pulse h-[152px] w-[108px] rounded-md bg-gray-700" />

      <div className="flex w-full flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div className="              h-[16px] w-[50%] rounded-md bg-gray-700  animate-pulse" />
          </div>

          <div className="animate-pulse mt-3 h-[16px] w-[80%] rounded-md bg-gray-700" />

          <div className="animate-pulse mt-1 h-[16px] w-[64px] rounded-md bg-gray-700" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="animate-pulse h-[14px] w-[100%] rounded-md bg-gray-700" />
          <div className="animate-pulse h-[14px] w-[100%] rounded-md bg-gray-700" />
        </div>
      </div>
    </div>
  )
}
