import {
  Book as PrismaBook,
  Category,
  Rating as PrismaRating,
  User,
} from '@prisma/client'
import axios from 'axios'
import { RatingData } from 'src/components/RatingForm'

const url = axios.create({
  baseURL: '/api',
})

// TODO: REFACTOR THIS
export type Book = {
  ratingsAverage: number
  ratingsCount: number
  ratings: PrismaRating[]
  categories: Category[]
} & PrismaBook

type Books = Array<Book>

export type Rating = {
  user: User
} & PrismaRating

type Ratings = Array<Rating>

export type LatestRating = Rating & {
  book: PrismaBook
}

type LatestRatings = Array<LatestRating>

export type Read = PrismaRating & {
  book: PrismaBook
}

type Profile = {
  user: User
  ratings: Array<
    {
      book: PrismaBook & {
        categories: Array<{
          id: string
          bookId: string
          category: Category
        }>
      }
    } & PrismaRating
  >
}

export const api = {
  getCategories: async () => {
    const { data } = await url.get<{ categories: Category[] }>('/categories')

    return data
  },
  getBooks: async (categories: string[]) => {
    const params = categories.length
      ? {
          categories: categories.join(','),
        }
      : undefined

    const { data } = await url.get<Books>('/books', {
      params,
    })

    return data
  },
  getBookRatings: async (bookId: string) => {
    const { data } = await url.get<Ratings>(`/ratings/${bookId}`)
    return data
  },
  getLatestRatings: async () => {
    const { data } = await url.get<LatestRatings>(`/ratings`)
    return data
  },
  getLastRead: async () => {
    const { data } = await url.get<Read>('/last-read')

    return data
  },
  createBookRating: async (bookId: string, ratingData: RatingData) => {
    const { data } = await url.post(`/books/${bookId}/rating`, ratingData)

    return data
  },
  getProfile: async (userId: string) => {
    const { data } = await url.get<Profile>(`/profile/${userId}`)

    return data
  },
}
