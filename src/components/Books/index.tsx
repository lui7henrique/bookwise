import { useQuery } from 'react-query'
import { api } from 'src/lib/api'
import { BookCard, BookCardSkeleton } from '../BookCard'
import { Drawer } from '../Drawer'
import { X } from '@phosphor-icons/react'
import { FullBookCard } from '../FullBookCard'
import { BookRatings } from '../BookRatings'

type BooksProps = {
  categories: string[]
}

export const Books = ({ categories }: BooksProps) => {
  const { data, isLoading } = useQuery(
    ['books', categories],
    async () => await api.getBooks(categories),
  )

  if (isLoading || !data) {
    return (
      <div className="grid w-full grid-cols-3 gap-5">
        {Array.from({ length: 10 }).map((_, index) => {
          return <BookCardSkeleton key={index} />
        })}
      </div>
    )
  }

  return (
    <div className="grid w-full grid-cols-3 gap-5">
      {data?.map((book) => {
        return (
          <Drawer.Root key={book.id}>
            <Drawer.Trigger>
              <div>
                <BookCard book={book} />
              </div>
            </Drawer.Trigger>

            <Drawer.Portal>
              <Drawer.Overlay />

              <Drawer.Content>
                <div className="max-h-screen overflow-y-scroll px-12 py-6">
                  <div className="flex w-full justify-end">
                    <Drawer.Close>
                      <X width={24} height={24} />
                    </Drawer.Close>
                  </div>

                  <FullBookCard book={book} />
                  <BookRatings book={book} />
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        )
      })}
    </div>
  )
}
