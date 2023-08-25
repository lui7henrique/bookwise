/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { api } from 'src/lib/api'

export const Profile = () => {
  const { data } = useSession()

  if (!data) {
    return <></>
  }

  const { data: profile } = useQuery(
    [data?.user.id],
    async () => await api.getProfile(String(data.user.id)),
  )

  return (
    <div className="flex w-full flex-col items-center border-l border-gray-700">
      <figure className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-vertical">
        <Image
          src={data.user.avatar_url}
          width={70}
          height={70}
          alt={data.user.name}
          className="overflow-hidden rounded-full "
        />
      </figure>

      <h1 className="mt-5 text-lg font-bold text-gray-100">{data.user.name}</h1>
      <span className="text-sm text-gray-400">membro desde 2023</span>

      <div className="mt-8 h-1   w-8 rounded-full bg-gradient-vertical transition-all" />
    </div>
  )
}
