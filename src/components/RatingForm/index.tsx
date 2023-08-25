import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { RatingStars } from '../RatingStars'
import { FormEvent, useCallback, useState } from 'react'
import { Check, X } from '@phosphor-icons/react'

type RatingData = {
  rating: number
  description: string
}

type RatingFormProps = {
  onCancel: () => void
  onSubmit: (data: RatingData) => Promise<void> | void
}

export const RatingForm = ({ onCancel, onSubmit }: RatingFormProps) => {
  const { data } = useSession()

  const [rating, setRating] = useState(0)
  const [ratingDescription, setRatingDescription] = useState('')

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const data: RatingData = {
        description: ratingDescription,
        rating,
      }

      onSubmit(data)
    },
    [onSubmit, rating, ratingDescription],
  )

  if (!data) {
    // TODO: SKELETON
    return <></>
  }

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="rounded-lg bg-gray-700 p-6"
    >
      <div className="flex gap-4">
        <figure className="relative flex aspect-square h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-vertical">
          <Image
            src={data.user?.avatar_url || ''}
            width={38}
            height={38}
            alt={data.user?.name || ''}
            quality={100}
            className="h-[38px] w-[38px] overflow-hidden rounded-full object-cover"
          />
        </figure>

        <div className="flex w-full items-center justify-between">
          <h6 className="font-bold">{data.user?.name}</h6>

          <RatingStars
            ratingAverage={rating}
            onSelect={(value) => setRating(value)}
          />
        </div>
      </div>

      <div className="relative mt-6 h-[136px] w-full rounded-md border border-gray-500 bg-gray-800  ">
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Escreva sua avaliação"
          className="h-full w-full bg-transparent px-[20px] py-[14px] text-sm outline-none"
          style={{ resize: 'none' }}
          onChange={(event) => setRatingDescription(event.target.value)}
        />

        <span className="absolute bottom-2 right-2 text-xs text-gray-400">
          {ratingDescription.length}/450
        </span>
      </div>

      <div className="mt-3 flex justify-end gap-2">
        <button
          className="rounded-md bg-gray-600 p-2 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onCancel}
        >
          <X className="fill-purple-100" />
        </button>

        <button
          className="rounded-md bg-gray-600 p-2 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={rating === 0 || ratingDescription === ''}
        >
          <Check className="fill-green-100" />
        </button>
      </div>
    </form>
  )
}
