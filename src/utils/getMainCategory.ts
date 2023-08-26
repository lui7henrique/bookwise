import { Profile } from 'src/lib/api'
import { getMostFrequentArrayItem } from './getMostFrequentArrayItem'

export const getMainCategory = (profile: Profile) => {
  const categories = profile.ratings
    .map((rating) => rating.book.categories)
    .flatMap((category) => category)
    .map((category) => category.category.name)

  return getMostFrequentArrayItem(categories)
}
