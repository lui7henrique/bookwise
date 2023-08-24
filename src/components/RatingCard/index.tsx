import { Rating } from '@prisma/client'
import Image from 'next/image'
import { Star } from '@phosphor-icons/react'

type RatingCardProps = {
  rating?: Rating
}

export const RatingCard = (props: RatingCardProps) => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-lg border-2 border-transparent bg-gray-700 p-6 transition-all hover:border-gray-600">
      <div className="flex w-full justify-between">
        <div className="flex gap-4">
          <figure className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-500">
            <Image src="https://picsum.photos/id/1/200/200?men" fill alt="" />
          </figure>

          <div>
            <h5 className="text-gray-100">Jaxson Dias</h5>
            <h6 className="text-gray-400">Hoje</h6>
          </div>
        </div>

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

      <div className="flex gap-5">
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
            <h5 className="font-bold text-gray-100">Entendendo Algoritmos</h5>
            <h6 className="mt-0 text-sm text-gray-400">Aditya Bhargava</h6>
          </div>

          <p className="mt-5 text-sm text-gray-300">
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectu...
          </p>
        </div>
      </div>
    </div>
  )
}
