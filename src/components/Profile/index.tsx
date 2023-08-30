/* eslint-disable react-hooks/rules-of-hooks */
import { BookOpen, Bookmark, Books, UserList } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { api } from 'src/lib/api'
import { getMainCategory } from 'src/utils/getMainCategory'

import { getReadAuthors } from 'src/utils/getReadAuthors'
import { getReadBooks } from 'src/utils/getReadBooks'
import { getReadPages } from 'src/utils/getReadPages'
import { ProfileItem, ProfileItemSkeleton } from './Item'

export const Profile = () => {
  const { data } = useSession()

  const { data: profile, isLoading } = useQuery(
    [data?.user.id],
    async () => await api.getProfile(String(data!.user.id)),
  )

  if (!profile || isLoading || !data) {
    return (
      <div className="flex w-full flex-col items-center border-l border-gray-700">
        <figure className="h-[72px] w-[72px] animate-pulse rounded-full bg-gray-600" />

        <div className="mt-5 h-[18px] w-[50%] animate-pulse rounded-lg bg-gray-600" />

        <div className="mt-2 h-[14px] w-[40%] animate-pulse rounded-lg bg-gray-600" />

        <div className="my-8 h-1  w-8 rounded-full bg-gradient-vertical transition-all" />

        <div className="align-start flex flex-col gap-10 py-5">
          <ProfileItemSkeleton icon={BookOpen} label="Páginas lidas" />
          <ProfileItemSkeleton icon={Books} label="Livros avaliados" />
          <ProfileItemSkeleton icon={UserList} label="Autores lidos" />
          <ProfileItemSkeleton icon={Bookmark} label="Categoria mais lida" />
        </div>
      </div>
    )
  }

  const readPages = getReadPages(profile)
  const readBooks = getReadBooks(profile)
  const readAuthors = getReadAuthors(profile)
  const mainCategory = getMainCategory(profile)

  return (
    <div className="flex w-full flex-col border-l border-transparent sm:items-center sm:border-gray-700">
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
          value={mainCategory === 'undefined' ? '?' : mainCategory}
          label="Categoria mais lida"
        />
      </div>
    </div>
  )
}
