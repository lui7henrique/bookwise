import { useQuery } from 'react-query'
import { api } from 'src/lib/api'
import { Category, CategorySkeleton } from './Category'

type CategoriesProps = {
  selectedCategories: string[]
  onReset: () => void
  onSelect: (id: string) => void
}

export const Categories = (props: CategoriesProps) => {
  const { selectedCategories, onReset, onSelect } = props

  const { data, isLoading } = useQuery(
    ['categories'],
    async () => await api.getCategories(),
  )

  if (!data || isLoading) {
    return (
      <div className="flex flex-wrap gap-3">
        {Array.from({
          length: 10,
        }).map((_, index) => {
          return <CategorySkeleton key={index} />
        })}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Category
        aria-checked={selectedCategories.length === 0}
        onClick={onReset}
      >
        Tudo
      </Category>

      {data.categories.map((category) => {
        const isChecked = selectedCategories.includes(category.id)

        return (
          <Category
            key={category.id}
            aria-checked={isChecked}
            onClick={() => onSelect(category.id)}
          >
            {category.name}
          </Category>
        )
      })}
    </div>
  )
}
