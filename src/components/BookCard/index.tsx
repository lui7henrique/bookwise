import Image from 'next/image'
import { Book } from 'src/lib/api'
import { ComponentProps } from 'react'
import { RatingStars } from '../RatingStars'
import { formatThumbnail } from 'src/utils/formatThumbnail'

type BookCardProps = {
  book: Book
} & ComponentProps<'div'>

export const BookCard = (props: BookCardProps) => {
  const {
    book: { cover_url: cover, name, author, ratingsAverage },
    ...divProps
  } = props

  const thumbnail = formatThumbnail(cover)

  return (
    <div
      className="flex w-full cursor-pointer gap-5 rounded-lg border-2 border-transparent bg-gray-700 px-5 py-[18px] transition-all hover:border-gray-600"
      {...divProps}
    >
      <div className="relative aspect-[6/9] w-[40%]">
        <Image
          src={thumbnail}
          alt=""
          quality={100}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex w-[60%] flex-col items-start justify-between">
        <div className="flex flex-col items-start">
          <h4 className="text-start font-bold text-gray-100">{name}</h4>
          <h5 className="mt-0 text-sm text-gray-400">{author}</h5>
        </div>

        <RatingStars ratingAverage={ratingsAverage} />
      </div>
    </div>
  )
}

export const BookCardSkeleton = () => {
  return (
    <div className="flex w-full cursor-pointer gap-5 rounded-lg border-2 border-transparent bg-gray-700 px-5 py-[18px] transition-all hover:border-gray-600">
      <div className="aspect-[6/9] w-[40%] animate-pulse rounded-md bg-gray-600" />

      <div className="flex w-[60%] flex-col items-start justify-between">
        <div className="flex w-full flex-col items-start">
          <div className="h-4 w-[100%] animate-pulse rounded-lg bg-gray-600" />
          <div className="mt-2 h-4 w-[80%] animate-pulse rounded-lg bg-gray-600" />
        </div>

        <div className="mt-2 h-4 w-[80%] animate-pulse rounded-lg bg-gray-600" />
      </div>
    </div>
  )
}
