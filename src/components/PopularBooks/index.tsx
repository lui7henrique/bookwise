import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { BookCard, BookCardSkeleton } from '../BookCard'
import { api } from 'src/lib/api'

export const popularBooksQueryKey = ['popular-books']

export const PopularBooks = () => {
  const { data, isLoading } = useQuery(
    popularBooksQueryKey,
    async () => await api.getBooks([]),
  )

  const List = () => {
    if (isLoading) {
      return (
        <>
          {Array.from({ length: 5 }).map((_, index) => {
            return <BookCardSkeleton key={index} />
          })}
        </>
      )
    }

    return (
      <>
        {data
          ?.slice(0, 5)
          .map((book) => <BookCard key={book.id} book={book} />)}
      </>
    )
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-gray-100">Livros populares</h3>

        <Link
          className="flex items-center gap-2 text-purple-100"
          href="/explore"
        >
          Ver todos <CaretRight className="fill-purple-100" weight="bold" />
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <List />
      </div>
    </div>
  )
}
