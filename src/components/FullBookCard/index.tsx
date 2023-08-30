import { BookOpen, BookmarkSimple, Star } from '@phosphor-icons/react'
import Image from 'next/image'
import { Book } from 'src/lib/api'
import { formatThumbnail } from 'src/utils/formatThumbnail'

type FullBookCardProps = {
  book: Book
}

export const FullBookCard = (props: FullBookCardProps) => {
  const { book } = props

  const {
    cover_url: cover,
    name,
    author,
    ratingsAverage,
    ratingsCount,
    total_pages: pages,
    categories,
  } = book

  const thumbnail = formatThumbnail(cover)

  return (
    <section className="mt-4 rounded-[10px] bg-gray-700 px-8 py-6 ">
      <div className="flex w-full flex-col gap-4 md:flex-row lg:gap-8">
        <div className="relative aspect-[6/9] w-full md:w-[40%]">
          <Image
            src={thumbnail}
            alt=""
            quality={100}
            fill
            className="rounded-md object-cover"
          />
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-4 md:w-[60%] md:gap-0">
          <div>
            <h4 className="text-lg font-bold leading-6 text-gray-100">
              {name}
            </h4>

            <h5 className="mt-1 text-gray-400">{author}</h5>
          </div>

          <div>
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: ratingsAverage }).map((_, index) => (
                <Star
                  width={16}
                  height={16}
                  key={index}
                  weight="fill"
                  className="fill-purple-100"
                />
              ))}

              {Array.from({ length: 5 - ratingsAverage }).map((_, index) => (
                <Star
                  width={16}
                  height={16}
                  key={index}
                  weight="regular"
                  className="fill-purple-100"
                />
              ))}
            </div>

            <p className="mt-1 text-sm text-gray-400">
              {ratingsCount} {ratingsCount === 1 ? 'Avaliação' : 'Avaliações'}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 border-t border-gray-600 py-6 md:grid-cols-2">
        <div className="w-100 flex items-center gap-4">
          <BookmarkSimple className="fill-green-100" width={24} height={24} />

          <div>
            <h5 className="text-sm text-gray-300">Categoria</h5>
            <h6 className="font-bold">
              {categories.map((category) => category.name).join(', ')}
            </h6>
          </div>
        </div>

        <div className="w-100 flex items-center gap-4">
          <BookOpen className="fill-green-100" width={24} height={24} />

          <div>
            <h5 className="text-sm text-gray-300">Páginas</h5>
            <h6 className="font-bold">{pages}</h6>
          </div>
        </div>
      </div>
    </section>
  )
}
