import { useQuery } from 'react-query'
import { Book, api } from 'src/lib/api'
import { useSession } from 'next-auth/react'
import { SocialModal } from '../SocialModal'
import { useCallback, useState } from 'react'
import { RatingData, RatingForm } from '../RatingForm'
import { queryClient } from 'src/pages/_app'
import { Rating, RatingSkeleton } from './Rating'
import { Bookmark } from '@phosphor-icons/react'

type BookRatingsProps = {
  book: Book
}

export const BookRatings = ({ book }: BookRatingsProps) => {
  const queryKey = [book.id]

  const { data, isLoading } = useQuery(
    queryKey,
    async () => await api.getBookRatings(book.id),
  )

  const { status } = useSession()
  const [isShowRatingForm, setIsShowRatingForm] = useState(false)

  const handleOpenRatingForm = useCallback(() => setIsShowRatingForm(true), [])

  const handleCloseRatingForm = useCallback(
    () => setIsShowRatingForm(false),
    [],
  )

  const handleSubmitRating = useCallback(
    async (data: RatingData) => {
      try {
        await api.createBookRating(book.id, data)
        queryClient.invalidateQueries(queryKey)

        queryClient.invalidateQueries(['last-read'])
      } catch {
        // TODO: HANDLE ERRORS
        console.error('usuário já fez o review')
      } finally {
        setIsShowRatingForm(false)
      }
    },
    [book.id, queryKey],
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

  if (isLoading) {
    return (
      <section className="mt-[46px]">
        <div className="flex items-center justify-between">
          <span className="text-sm">Avaliações</span>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {Array.from({ length: 3 }).map((_, index) => {
            return <RatingSkeleton key={index} />
          })}
        </div>
      </section>
    )
  }

  if (!data?.length) {
    return (
      <section className="mt-[46px]">
        <div className="flex items-center justify-between">
          <span className="text-sm">Avaliações</span>
          <RightAction />
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {isShowRatingForm ? (
            <RatingForm
              onCancel={handleCloseRatingForm}
              onSubmit={handleSubmitRating}
            />
          ) : (
            <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-gray-600 p-6 transition-all">
              <Bookmark width={64} height={64} className="fill-gray-400" />

              <p className="text-sm text-gray-400">Não há nenhuma avaliação</p>
            </div>
          )}
        </div>
      </section>
    )
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
            onSubmit={handleSubmitRating}
          />
        )}

        {data.map((rating) => {
          return <Rating rating={rating} key={rating.id} />
        })}
      </div>
    </section>
  )
}
