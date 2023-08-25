import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'src/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { categories: rawCategories } = req.query

  const categories =
    typeof rawCategories === 'string' ? rawCategories.split(',') : undefined

  const initialBooks = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          categoryId: {
            in: categories,
          },
        },
      },
    },
  })

  const books = await Promise.all(
    initialBooks.map(async (book) => {
      const ratings = await prisma.rating.findMany({
        where: {
          book_id: {
            equals: book.id,
          },
        },
      })

      const categories = await prisma.category.findMany({
        where: {
          books: {
            some: {
              book_id: book.id,
            },
          },
        },
      })

      const ratingsCount = ratings.length
      const ratingsSum = ratings.reduce((sum, rating) => sum + rating.rate, 0)

      const newBook = {
        ...book,
        ratingsAverage: parseInt(String(ratingsSum / ratingsCount)),
        ratingsCount,
        ratings,
        categories,
      }

      return newBook
    }),
  )

  return res.json(books)
}
