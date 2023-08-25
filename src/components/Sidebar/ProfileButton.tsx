import { SignIn } from '@phosphor-icons/react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export const ProfileButton = () => {
  const { data } = useSession()

  if (!data?.user) {
    return <></>
  }

  return (
    <div className="flex items-center gap-3">
      <figure className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gradient-vertical">
        <Image
          src={data.user.avatar_url}
          width={32}
          height={32}
          alt={data.user.name}
          className="overflow-hidden rounded-full "
        />
      </figure>

      <p>{data.user.name}</p>

      <button onClick={() => signOut({ callbackUrl: '/login' })}>
        <SignIn className="fill-red-400" width={20} height={20} />
      </button>
    </div>
  )
}
