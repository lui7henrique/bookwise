import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { getServerSession } from 'next-auth'
import { prisma } from 'src/lib/prisma'
import { buildNextAuthOptions } from '../auth/[...nextauth]'

const createRatingBody = z.object({
  description: z.string(),
  book_id: z.string(),
  user_id: z.string(),
  rate: z.number(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET' && req.method !== 'POST')
    return res.status(405).end()

  const { book_id: bookId } = req.query

  if (!bookId) return res.status(400).json({ message: 'Book does not exist.' })

  if (req.method === 'GET') {
    const rating = await prisma.rating.findMany({
      where: {
        book_id: {
          equals: String(bookId),
        },
      },
      include: {
        book: {
          select: {
            cover_url: true,
            name: true,
            author: true,
          },
        },
        user: {
          select: {
            id: true,
            avatar_url: true,
            name: true,
          },
        },
      },
    })

    return res.status(200).json(rating)
  }

  if (req.method === 'POST') {
    const session = await getServerSession(req, res, buildNextAuthOptions())

    if (!session) {
      return res.status(401).end()
    }

    const sanitized = createRatingBody.parse({
      book_id: bookId,
      user_id: session.user?.email,
      ...req.body,
    })

    const rating = await prisma.rating.create({
      data: {
        description: sanitized.description,
        book_id: sanitized.book_id,
        user_id: sanitized.user_id,
        rate: sanitized.rate,
      },
      include: {
        user: true,
      },
    })

    return res.status(201).json(rating)
  }
}
