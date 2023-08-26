import { useSession } from 'next-auth/react'
import { useQuery } from 'react-query'
import { api } from 'src/lib/api'
import { useState } from 'react'

import { ProfileBooksInput } from './Input'
import { ProfileCard, ProfileCardSkeleton } from './Card'

export const ProfileBooks = () => {
  const [query, setQuery] = useState('')
  const { data } = useSession()

  const { data: profile, isLoading } = useQuery(
    [data?.user.id],
    async () => await api.getProfile(String(data!.user.id)),
  )

  if (!data || isLoading) {
    return (
      <>
        <ProfileBooksInput
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />

        {Array.from({ length: 3 }).map((_, index) => {
          return <ProfileCardSkeleton key={index} />
        })}
      </>
    )
  }

  const results = profile?.ratings.filter((rating) =>
    rating.book.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <>
      <ProfileBooksInput
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />

      <div className="mt-10 flex flex-col gap-6">
        {results?.map((rating) => {
          return <ProfileCard rating={rating} key={rating.id} />
        })}
      </div>
    </>
  )
}
