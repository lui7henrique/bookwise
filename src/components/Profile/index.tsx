/* eslint-disable react-hooks/rules-of-hooks */
import {
  BookOpen,
  Bookmark,
  Books,
  Icon,
  UserList,
} from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { api } from 'src/lib/api'
import { getMostFrequentArrayItem } from 'src/utils/getMostFrequentArrayItem'

type ProfileItemProps = {
  icon: Icon
  value: number | string
  label: string
}

export const ProfileItem = ({ icon: Icon, label, value }: ProfileItemProps) => {
  return (
    <div className="flex items-center gap-5">
      <Icon width={32} height={32} className="fill-green-100" />

      <div>
        <h6 className="font-bold">{value}</h6>
        <span className="text-gray-300">{label}</span>
      </div>
    </div>
  )
}

export const Profile = () => {
  const { data } = useSession()

  const { data: profile } = useQuery(
    [data?.user.id],
    async () => await api.getProfile(String(data!.user.id)),
  )

  if (!data) {
    return <></>
  }

  if (!profile) {
    // TODO: SKELETON
    return <></>
  }

  const readPages = profile.ratings.reduce(
    (sum, rating) => sum + rating.book.total_pages,
    0,
  )

  const readBooks = profile.ratings.map((rating) => rating.book).length || 0

  const readAuthors =
    profile.ratings.map((rating) => rating.book.author).length || 0

  const categories = profile.ratings
    .map((rating) => rating.book.categories)
    .flatMap((category) => category)
    .map((category) => category.category.name)

  const mainCategory = getMostFrequentArrayItem(categories)

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

      <div className="my-8 h-1  w-8 rounded-full bg-gradient-vertical transition-all" />

      <div className="align-start flex flex-col gap-10 py-5">
        <ProfileItem icon={BookOpen} value={readPages} label="Páginas lidas" />
        <ProfileItem icon={Books} value={readBooks} label="Livros avaliados" />
        <ProfileItem
          icon={UserList}
          value={readAuthors}
          label="Autores lidos"
        />
        <ProfileItem
          icon={Bookmark}
          value={mainCategory}
          label="Categoria mais lida"
        />
      </div>
    </div>
  )
}
