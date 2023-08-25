import { RatingCard } from '../RatingCard'

export const MostRecentRatings = () => {
  return (
    <div>
      <h3>Avaliações mais recentes</h3>

      <div className="mt-4 flex flex-col gap-3">
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </div>
    </div>
  )
}
