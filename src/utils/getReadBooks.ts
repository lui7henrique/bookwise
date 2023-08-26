import { Profile } from 'src/lib/api'

export const getReadBooks = (profile: Profile) => {
  return profile.ratings.map((rating) => rating.book).length || 0
}
