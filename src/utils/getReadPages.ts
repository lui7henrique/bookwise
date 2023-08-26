import { Profile } from 'src/lib/api'

export const getReadPages = (profile: Profile) => {
  return profile.ratings.reduce(
    (sum, rating) => sum + rating.book.total_pages,
    0,
  )
}
