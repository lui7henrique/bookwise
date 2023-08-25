import { Star } from '@phosphor-icons/react'

type RatingStarsProps = {
  ratingAverage: number
}

export const RatingStars = ({ ratingAverage }: RatingStarsProps) => {
  return (
    <div className="grid grid-cols-5 gap-1">
      {Array.from({ length: ratingAverage }).map((_, index) => (
        <Star
          width={16}
          height={16}
          key={index}
          weight="fill"
          className="fill-purple-100"
        />
      ))}

      {Array.from({ length: 5 - ratingAverage }).map((_, index) => (
        <Star
          width={16}
          height={16}
          key={index}
          weight="regular"
          className="fill-purple-100"
        />
      ))}
    </div>
  )
}
