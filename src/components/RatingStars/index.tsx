import { Star } from '@phosphor-icons/react'

type RatingStarsProps = {
  ratingAverage: number
  onSelect?: (value: number) => void
}

export const RatingStars = ({ ratingAverage, onSelect }: RatingStarsProps) => {
  if (onSelect) {
    return (
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 5 }).map((_, index) => {
          const rating = index + 1
          const isEmpty = rating > ratingAverage

          return (
            <Star
              width={24}
              height={24}
              key={index}
              weight={isEmpty ? 'regular' : 'fill'}
              className="cursor-pointer fill-purple-100"
              onClick={() => onSelect(rating)}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-5 gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const rating = index + 1
        const isEmpty = rating > ratingAverage

        return (
          <Star
            width={16}
            height={16}
            key={index}
            weight={isEmpty ? 'regular' : 'fill'}
            className="cursor-pointer fill-purple-100"
          />
        )
      })}
    </div>
  )
}
