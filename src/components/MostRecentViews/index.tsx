import { useQuery } from 'react-query'
import { RatingCard } from '../RatingCard'
import { api } from 'src/lib/api'

export const MostRecentRatings = () => {
  const { data } = useQuery(
    ['most-recent-ratings'],
    async () => await api.getLatestRatings(),
  )

  // TODO: SKELETON
  if (!data) {
    return <></>
  }

  return (
    <div>
      <h3>Avaliações mais recentes</h3>

      <div className="mt-4 flex flex-col gap-3">
        {data.map((rating) => {
          return <RatingCard rating={rating} key={rating.id} />
        })}
      </div>
    </div>
  )
}
