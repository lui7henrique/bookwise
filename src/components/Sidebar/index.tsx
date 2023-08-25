import Image from 'next/image'
import { TrendUp, Binoculars, User } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useSession } from 'next-auth/react'

import { SignInButton } from './SignInButton'
import { ProfileButton } from './ProfileButton'

export const Sidebar = () => {
  const { status } = useSession()
  const { asPath } = useRouter()

  const publicNavigation = useMemo(
    () => [
      {
        icon: TrendUp,
        label: 'Início',
        href: '/app',
      },
      {
        icon: Binoculars,
        label: 'Explorar',
        href: '/explore',
      },
    ],
    [],
  )

  const privateNavigation = useMemo(
    () => [
      ...publicNavigation,
      {
        icon: User,
        label: 'Perfil',
        href: '/profile',
      },
    ],
    [publicNavigation],
  )

  const navigation =
    status === 'authenticated' ? privateNavigation : publicNavigation

  return (
    <aside className="relative flex h-full w-[232px] flex-col items-center justify-between overflow-hidden rounded-xl p-6">
      <div>
        <Image
          src="/images/logos/logo.svg"
          width={128}
          height={32}
          alt="Logo"
        />

        <nav className="mt-16 flex flex-col gap-6 px-3">
          {navigation.map((item) => {
            const { href, icon: Icon, label } = item

            const isActive = asPath === href

            return (
              <div key={href} className="flex">
                {isActive && (
                  <div className="h-6 w-1 -translate-x-4 rounded-full bg-red-600 bg-gradient-vertical transition-all" />
                )}

                <Link
                  href={href}
                  className={`flex w-full gap-3 transition-all hover:text-gray-100 ${
                    isActive ? 'text-gray-100' : 'text-gray-400'
                  }`}
                >
                  <Icon width={24} height={24} />
                  {label}
                </Link>
              </div>
            )
          })}
        </nav>
      </div>

      {status === 'authenticated' ? <ProfileButton /> : <SignInButton />}

      <Image
        src="/images/sidebar-background.svg"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
        alt="sidebar-background"
      />
    </aside>
  )
}
