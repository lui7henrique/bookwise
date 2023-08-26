import { User } from '@phosphor-icons/react'

import { Layout } from 'src/components/Layout'
import { Profile } from 'src/components/Profile'
import { ProfileBooks } from 'src/components/ProfileBooks'

export default function ProfilePage() {
  return (
    <Layout.Root>
      <Layout.Sidebar />

      <Layout.Container>
        <Layout.Header>
          <Layout.HeaderIcon icon={User} />
          <Layout.HeaderTitle>Profile</Layout.HeaderTitle>
        </Layout.Header>

        <div className="flex gap-16">
          <div className="flex w-full max-w-[560px] flex-col gap-10">
            <ProfileBooks />
          </div>

          <div className=" w-full max-w-[324px]  ">
            <Profile />
          </div>
        </div>
      </Layout.Container>
    </Layout.Root>
  )
}
