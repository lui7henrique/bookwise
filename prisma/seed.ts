import { PrismaClient } from '@prisma/client'
import { books } from './constants/books'
import { categories } from './constants/categories'

const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.rating.deleteMany()
    await prisma.categoriesOnBooks.deleteMany()
    await prisma.category.deleteMany()
    await prisma.book.deleteMany()

    const categoriesSeed = categories.map((category) => {
      return prisma.category.create({
        data: {
          name: category.name,
          id: category.id,
        },
      })
    })

    const booksSeed = books.map((book) => {
      return prisma.book.create({
        data: {
          id: book.id,
          name: book.name,
          author: book.author,
          summary: book.summary,
          cover_url: book.cover_url,
          total_pages: book.total_pages,
          categories: {
            create: [
              ...book.categories.map((category) => {
                return {
                  category: {
                    connect: {
                      id: category.id,
                    },
                  },
                }
              }),
            ],
          },
        },
      })
    })

    await prisma.$transaction([...categoriesSeed, ...booksSeed])
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}
load()
