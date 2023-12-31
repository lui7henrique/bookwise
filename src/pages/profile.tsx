import { User } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Layout } from 'src/components/Layout'
import { Profile } from 'src/components/Profile'
import { ProfileBooks } from 'src/components/ProfileBooks'

export default function ProfilePage() {
  const { status } = useSession()
  const { push } = useRouter()

  if (status === 'unauthenticated') {
    push('/login')
  }

  return (
    <>
      <Head>
        <title>BookWise | Perfil</title>
      </Head>

      <Layout.Root>
        <Layout.Sidebar />

        <Layout.Container>
          <Layout.Header>
            <Layout.HeaderIcon icon={User} />
            <Layout.HeaderTitle>Perfil</Layout.HeaderTitle>
          </Layout.Header>

          <div className="flex flex-col-reverse gap-8 sm:flex-row sm:gap-16">
            <div className="flex w-full max-w-[560px] flex-col gap-10">
              <ProfileBooks />
            </div>

            <div className="w-full sm:max-w-[324px]">
              <Profile />
            </div>
          </div>
        </Layout.Container>
      </Layout.Root>
    </>
  )
}
