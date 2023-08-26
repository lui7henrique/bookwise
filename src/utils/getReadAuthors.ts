import { Profile } from 'src/lib/api'

export const getReadAuthors = (profile: Profile) => {
  return profile.ratings.map((rating) => rating.book.author).length || 0
}
