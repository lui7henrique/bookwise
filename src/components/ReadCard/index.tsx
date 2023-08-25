import { Book } from '@prisma/client'
import { Star } from '@phosphor-icons/react'

import Image from 'next/image'

type ReadCardProps = {
  book?: Book
}

export const ReadCard = (props: ReadCardProps) => {
  console.log({ props })

  return (
    <div className="flex w-full gap-6 rounded-lg border-2 border-transparent bg-gray-600 p-6 transition-all hover:border-gray-500">
      <Image
        src="/images/books/entendendo-algoritmos.png"
        width={108}
        height={152}
        alt=""
        quality={100}
        className="rounded-md object-cover"
      />

      <div className="flex w-full flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Hoje</span>

            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  width={16}
                  height={16}
                  key={index}
                  weight="fill"
                  className="fill-purple-100"
                />
              ))}
            </div>
          </div>

          <h4 className="mt-3 font-bold text-gray-100">
            Entendendo Algoritmos
          </h4>
          <h5 className="mt-0 text-sm text-gray-400">Aditya Bhargava</h5>
        </div>

        <p className="mt-6 text-sm text-gray-300">
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </p>
      </div>
    </div>
  )
}
