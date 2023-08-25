import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { Book, api } from 'src/lib/api'
import { RatingStars } from '../RatingStars'
import { useSession } from 'next-auth/react'
import { SocialModal } from '../SocialModal'
import { useCallback, useState } from 'react'
import { RatingForm } from '../RatingForm'

type BookRatingsProps = {
  book: Book
}

export const BookRatings = ({ book }: BookRatingsProps) => {
  const { data } = useQuery(
    [book.id],
    async () => await api.getBookRatings(book.id),
  )

  const { status } = useSession()
  const [isShowRatingForm, setIsShowRatingForm] = useState(false)

  const handleOpenRatingForm = useCallback(() => setIsShowRatingForm(true), [])

  const handleCloseRatingForm = useCallback(
    () => setIsShowRatingForm(false),
    [],
  )

  const RightAction = useCallback(() => {
    if (isShowRatingForm) {
      return <></>
    }

    if (status === 'unauthenticated') {
      return (
        <SocialModal>
          <button className="px-2 py-1 font-bold text-purple-100">
            Avaliar
          </button>
        </SocialModal>
      )
    }

    if (status === 'authenticated') {
      return (
        <button
          className="px-2 py-1 font-bold text-purple-100"
          onClick={handleOpenRatingForm}
        >
          Avaliar
        </button>
      )
    }
  }, [handleOpenRatingForm, isShowRatingForm, status])

  if (!data) {
    // TODO: SKELETON
    return <></>
  }

  return (
    <section className="mt-[46px]">
      <div className="flex items-center justify-between">
        <span className="text-sm">Avaliações</span>
        <RightAction />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {isShowRatingForm && (
          <RatingForm
            onCancel={handleCloseRatingForm}
            onSubmit={async (data) => await api.createBookRate(book.id, data)}
          />
        )}

        {data.map((rating) => {
          return (
            <div className="rounded-lg bg-gray-700 p-6" key={rating.id}>
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
        })}
      </div>
    </section>
  )
}
